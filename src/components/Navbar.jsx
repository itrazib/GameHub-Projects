import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error(err);
      alert('Logout failed');
    }
  }

  return (
    <header className="bg-slate-900 border-b border-slate-800">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="text-xl font-bold text-white">GameHub</Link>
          <nav className="hidden md:flex gap-3 text-slate-300">
            <Link to="/">Home</Link>
            <Link to="/newsletter">Newsletter</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          {!user && (
            <>
              <Link to="/login" className="text-slate-200">Login</Link>
              <Link to="/register" className="btn">Register</Link>
            </>
          )}

          {user && (
            <>
              <Link to="/my-profile" className="flex items-center gap-2">
                <img src={user.photoURL || 'https://via.placeholder.com/40'} alt="avatar" className="w-8 h-8 rounded-full" />
                <span className="hidden sm:inline">{user.displayName || user.email}</span>
              </Link>
              <button onClick={handleLogout} className="btn">Logout</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
