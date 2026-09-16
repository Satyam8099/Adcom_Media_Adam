import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

/** Legacy Emergent #session_id callback — redirects to login (Google OAuth is server-side now). */
export default function AdminAuthCallback() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate('/login', { replace: true });
  }, [navigate]);
  return null;
}
