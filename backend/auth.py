"""Google OAuth + secure email/password login for Adcom Media admin panel."""
import os
import logging
import secrets
from datetime import datetime, timedelta, timezone
from typing import Optional
from urllib.parse import urlencode, quote

import bcrypt
import httpx
from fastapi import APIRouter, HTTPException, Request, Response, Depends
from fastapi.responses import RedirectResponse
from pydantic import BaseModel, EmailStr, Field

logger = logging.getLogger(__name__)

SESSION_TTL_DAYS = 7
BRUTE_FORCE_MAX = 5
BRUTE_FORCE_WINDOW_MIN = 15
OAUTH_STATE_TTL_SEC = 600

GOOGLE_AUTH_URL = "https://accounts.google.com/o/oauth2/auth"
GOOGLE_TOKEN_URL = "https://oauth2.googleapis.com/token"
GOOGLE_USERINFO_URL = "https://www.googleapis.com/oauth2/v3/userinfo"

# Production defaults: Vercel frontend + Render API custom domain
DEFAULT_FRONTEND_URL = "https://adcommedia.in"
DEFAULT_GOOGLE_REDIRECT_URI = "https://api.adcommedia.in/api/auth/google/callback"


def _admin_allowlist() -> set:
    raw = os.environ.get("ADMIN_ALLOWLIST", "")
    return {e.strip().lower() for e in raw.split(",") if e.strip()}


def _frontend_url() -> str:
    return (
        os.environ.get("PUBLIC_SITE_URL")
        or os.environ.get("FRONTEND_URL")
        or DEFAULT_FRONTEND_URL
    ).rstrip("/")


def _google_client_id() -> str:
    return (os.environ.get("GOOGLE_CLIENT_ID") or "").strip()


def _google_client_secret() -> str:
    return (os.environ.get("GOOGLE_CLIENT_SECRET") or "").strip()


def _google_redirect_uri() -> str:
    explicit = (os.environ.get("GOOGLE_REDIRECT_URI") or "").strip()
    if explicit:
        return explicit
    return DEFAULT_GOOGLE_REDIRECT_URI


def _hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def _verify_password(plain: str, hashed: str) -> bool:
    try:
        return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))
    except Exception:
        return False


def _cookie_samesite() -> str:
    # "lax" for same-origin Vercel /api proxy; "none" only if FE calls Render host directly
    return (os.environ.get("COOKIE_SAMESITE") or "lax").strip().lower() or "lax"


def _set_session_cookie(response: Response, token: str):
    samesite = _cookie_samesite()
    response.set_cookie(
        key="session_token",
        value=token,
        httponly=True,
        secure=True,
        samesite=samesite,
        path="/",
        max_age=SESSION_TTL_DAYS * 24 * 60 * 60,
    )


class PasswordLoginRequest(BaseModel):
    email: EmailStr
    password: str = Field(..., min_length=1, max_length=200)


class PasswordChangeRequest(BaseModel):
    current_password: str = Field(..., min_length=1, max_length=200)
    new_password: str = Field(..., min_length=8, max_length=200)


class AuthUser(BaseModel):
    user_id: str
    email: str
    name: str
    picture: Optional[str] = None
    role: str = "admin"


async def seed_admin(db):
    """Seed the bootstrap admin from env vars. Rehashes password if env changes."""
    email = (os.environ.get("ADMIN_EMAIL") or "").strip().lower()
    password = os.environ.get("ADMIN_PASSWORD") or ""
    if not email or not password:
        logger.info("ADMIN_EMAIL / ADMIN_PASSWORD not set — skipping seed")
        return
    existing = await db.users.find_one({"email": email}, {"_id": 0})
    now = datetime.now(timezone.utc).isoformat()
    if not existing:
        user_id = f"user_{secrets.token_hex(6)}"
        await db.users.insert_one({
            "user_id": user_id,
            "email": email,
            "name": "Chief Admin",
            "picture": None,
            "role": "chief",
            "password_hash": _hash_password(password),
            "created_at": now,
            "last_login": None,
        })
        logger.info("Seeded admin %s", email)
    else:
        # Only reseed from env when the user has never rotated their own password
        has_self_set = bool(existing.get("password_updated_at"))
        existing_hash = existing.get("password_hash") or ""
        if not existing_hash or (not has_self_set and not _verify_password(password, existing_hash)):
            await db.users.update_one(
                {"email": email},
                {"$set": {"password_hash": _hash_password(password), "role": existing.get("role") or "chief"}},
            )
            logger.info("Refreshed admin password hash for %s", email)


async def _upsert_google_user(db, email: str, name: str, picture: Optional[str]):
    existing = await db.users.find_one({"email": email}, {"_id": 0})
    now = datetime.now(timezone.utc)
    role = "chief" if email == "hello.adcommedia@gmail.com" else "admin"
    if existing:
        user_id = existing["user_id"]
        role = existing.get("role") or role
        await db.users.update_one(
            {"user_id": user_id},
            {"$set": {"name": name, "picture": picture, "last_login": now.isoformat()}},
        )
    else:
        user_id = f"user_{secrets.token_hex(6)}"
        await db.users.insert_one({
            "user_id": user_id,
            "email": email,
            "name": name,
            "picture": picture,
            "role": role,
            "created_at": now.isoformat(),
            "last_login": now.isoformat(),
        })
    return user_id, role, now


def build_auth_router(db) -> APIRouter:
    router = APIRouter(prefix="/api/auth", tags=["auth"])

    async def get_current_user(request: Request) -> AuthUser:
        # Cookie first, Authorization: Bearer fallback (per playbook)
        token = request.cookies.get("session_token")
        if not token:
            auth_header = request.headers.get("Authorization", "")
            if auth_header.startswith("Bearer "):
                token = auth_header[len("Bearer "):].strip()
        if not token:
            raise HTTPException(status_code=401, detail="Not authenticated")

        session_doc = await db.user_sessions.find_one(
            {"session_token": token}, {"_id": 0}
        )
        if not session_doc:
            raise HTTPException(status_code=401, detail="Invalid session")

        expires_at = session_doc.get("expires_at")
        if isinstance(expires_at, str):
            expires_at = datetime.fromisoformat(expires_at)
        if expires_at.tzinfo is None:
            expires_at = expires_at.replace(tzinfo=timezone.utc)
        if expires_at < datetime.now(timezone.utc):
            raise HTTPException(status_code=401, detail="Session expired")

        user_doc = await db.users.find_one(
            {"user_id": session_doc["user_id"]}, {"_id": 0}
        )
        if not user_doc:
            raise HTTPException(status_code=401, detail="User not found")
        return AuthUser(**user_doc)

    async def require_admin(user: AuthUser = Depends(get_current_user)) -> AuthUser:
        allowlist = _admin_allowlist()
        if allowlist and user.email.lower() not in allowlist:
            raise HTTPException(status_code=403, detail="Not authorized")
        return user

    @router.get("/google/start")
    async def google_start(request: Request):
        """Begin Google OAuth — redirects the browser to Google consent."""
        client_id = _google_client_id()
        if not client_id:
            raise HTTPException(status_code=503, detail="Google OAuth is not configured")

        state = secrets.token_urlsafe(24)
        params = {
            "client_id": client_id,
            "redirect_uri": _google_redirect_uri(),
            "response_type": "code",
            "scope": "openid email profile",
            "access_type": "online",
            "include_granted_scopes": "true",
            "prompt": "select_account",
            "state": state,
        }
        response = RedirectResponse(f"{GOOGLE_AUTH_URL}?{urlencode(params)}", status_code=302)
        response.set_cookie(
            key="oauth_state",
            value=state,
            httponly=True,
            secure=True,
            samesite="lax",
            path="/",
            max_age=OAUTH_STATE_TTL_SEC,
        )
        return response

    @router.get("/google/callback")
    async def google_callback(request: Request, code: Optional[str] = None, state: Optional[str] = None, error: Optional[str] = None):
        """Google redirects here with ?code=… — exchange, set session cookie, send user to admin."""
        frontend = _frontend_url() or str(request.base_url).rstrip("/")
        def fail(msg: str):
            return RedirectResponse(f"{frontend}/login?error={quote(msg)}", status_code=302)

        if error:
            logger.warning("Google OAuth error: %s", error)
            return fail("Google sign-in was cancelled or failed")
        if not code or not state:
            return fail("Missing Google authorization code")

        cookie_state = request.cookies.get("oauth_state")
        if not cookie_state or cookie_state != state:
            return fail("Invalid OAuth state")

        client_id = _google_client_id()
        client_secret = _google_client_secret()
        if not client_id or not client_secret:
            return fail("Google OAuth is not configured")

        redirect_uri = _google_redirect_uri()
        try:
            async with httpx.AsyncClient(timeout=20) as http:
                token_res = await http.post(
                    GOOGLE_TOKEN_URL,
                    data={
                        "code": code,
                        "client_id": client_id,
                        "client_secret": client_secret,
                        "redirect_uri": redirect_uri,
                        "grant_type": "authorization_code",
                    },
                    headers={"Accept": "application/json"},
                )
                if token_res.status_code != 200:
                    logger.warning("Google token exchange failed: %s %s", token_res.status_code, token_res.text[:300])
                    return fail("Google authentication failed")
                tokens = token_res.json()
                access_token = tokens.get("access_token")
                if not access_token:
                    return fail("Google authentication failed")

                info_res = await http.get(
                    GOOGLE_USERINFO_URL,
                    headers={"Authorization": f"Bearer {access_token}"},
                )
                if info_res.status_code != 200:
                    logger.warning("Google userinfo failed: %s %s", info_res.status_code, info_res.text[:300])
                    return fail("Google authentication failed")
                data = info_res.json()
        except Exception:
            logger.exception("Google OAuth exchange error")
            return fail("Auth service unreachable")

        email = (data.get("email") or "").lower().strip()
        name = data.get("name") or (email.split("@")[0] if email else "Admin")
        picture = data.get("picture")
        if not email:
            return fail("Google did not return an email")
        if data.get("email_verified") is False:
            return fail("Google email is not verified")

        allowlist = _admin_allowlist()
        if allowlist and email not in allowlist:
            return fail("This account is not authorized for the admin panel")

        user_id, role, now = await _upsert_google_user(db, email, name, picture)
        session_token = f"ggl_{secrets.token_urlsafe(48)}"
        expires = now + timedelta(days=SESSION_TTL_DAYS)
        await db.user_sessions.insert_one({
            "user_id": user_id,
            "session_token": session_token,
            "expires_at": expires.isoformat(),
            "created_at": now.isoformat(),
            "kind": "google",
        })

        response = RedirectResponse(f"{frontend}/adcom-admin", status_code=302)
        _set_session_cookie(response, session_token)
        response.delete_cookie("oauth_state", path="/")
        return response

    @router.post("/session")
    async def exchange_session_removed():
        """Legacy Emergent session exchange — removed in favor of Google OAuth."""
        raise HTTPException(
            status_code=410,
            detail="Emergent auth is no longer supported. Use Continue with Google or email/password login.",
        )

    @router.get("/me", response_model=AuthUser)
    async def me(user: AuthUser = Depends(get_current_user)):
        return user

    @router.post("/login")
    async def password_login(payload: PasswordLoginRequest, request: Request, response: Response):
        """Secure email + password login. Uniform error to avoid user enumeration."""
        email = payload.email.lower().strip()
        client_ip = request.headers.get("x-forwarded-for", request.client.host if request.client else "unknown").split(",")[0].strip()
        attempt_key = f"{client_ip}:{email}"

        # Brute force lockout
        now = datetime.now(timezone.utc)
        window_start = now - timedelta(minutes=BRUTE_FORCE_WINDOW_MIN)
        recent_fails = await db.login_attempts.count_documents({
            "identifier": attempt_key,
            "success": False,
            "ts": {"$gte": window_start.isoformat()},
        })
        if recent_fails >= BRUTE_FORCE_MAX:
            raise HTTPException(status_code=429, detail="Too many attempts. Try again in 15 minutes.")

        user_doc = await db.users.find_one({"email": email}, {"_id": 0})
        allowlist = _admin_allowlist()
        allowed = (not allowlist) or (email in allowlist)
        ok = False
        if user_doc and user_doc.get("password_hash") and allowed:
            ok = _verify_password(payload.password, user_doc["password_hash"])

        if not ok:
            await db.login_attempts.insert_one({
                "identifier": attempt_key,
                "email": email,
                "ip": client_ip,
                "success": False,
                "ts": now.isoformat(),
            })
            raise HTTPException(status_code=401, detail="Invalid credentials")

        # Clear failed attempts for this identifier on success
        await db.login_attempts.delete_many({"identifier": attempt_key})

        # Issue an opaque session token stored in db.user_sessions (same mechanism as Google flow)
        token = f"pwd_{secrets.token_urlsafe(48)}"
        expires = now + timedelta(days=SESSION_TTL_DAYS)
        await db.user_sessions.insert_one({
            "user_id": user_doc["user_id"],
            "session_token": token,
            "expires_at": expires.isoformat(),
            "created_at": now.isoformat(),
            "kind": "password",
        })
        await db.users.update_one({"user_id": user_doc["user_id"]}, {"$set": {"last_login": now.isoformat()}})

        _set_session_cookie(response, token)
        return {
            "user": {
                "user_id": user_doc["user_id"],
                "email": user_doc["email"],
                "name": user_doc.get("name") or user_doc["email"].split("@")[0],
                "picture": user_doc.get("picture"),
                "role": user_doc.get("role") or "admin",
            }
        }

    @router.post("/logout")
    async def logout(request: Request, response: Response):
        token = request.cookies.get("session_token")
        if token:
            await db.user_sessions.delete_one({"session_token": token})
        response.delete_cookie("session_token", path="/", samesite=_cookie_samesite(), secure=True)
        return {"ok": True}

    @router.post("/change-password")
    async def change_password(payload: PasswordChangeRequest, request: Request, user: AuthUser = Depends(get_current_user)):
        """Change the current user's password. Requires current password verification."""
        if len(payload.new_password) < 8:
            raise HTTPException(status_code=400, detail="Password must be at least 8 characters")
        if payload.current_password == payload.new_password:
            raise HTTPException(status_code=400, detail="New password must differ from current")

        user_doc = await db.users.find_one({"user_id": user.user_id}, {"_id": 0})
        if not user_doc or not user_doc.get("password_hash"):
            raise HTTPException(status_code=400, detail="Password login not enabled for this account")
        if not _verify_password(payload.current_password, user_doc["password_hash"]):
            raise HTTPException(status_code=401, detail="Current password is incorrect")

        # Update hash and revoke all other sessions for this user (keep current)
        current_token = request.cookies.get("session_token")
        await db.users.update_one(
            {"user_id": user.user_id},
            {"$set": {"password_hash": _hash_password(payload.new_password), "password_updated_at": datetime.now(timezone.utc).isoformat()}},
        )
        query = {"user_id": user.user_id}
        if current_token:
            query["session_token"] = {"$ne": current_token}
        await db.user_sessions.delete_many(query)
        return {"ok": True, "sessions_revoked": True}

    return router, get_current_user, require_admin
