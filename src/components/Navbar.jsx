import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import logo from '../assets/gamehub.png'

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
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

  const links = (
    <>
      <li><NavLink to="/" className="px-3 py-2">Home</NavLink></li>
      <li><NavLink to="/games" className="px-3 py-2">Games</NavLink></li>
      <li><NavLink to="/blog" className="px-3 py-2">Blog</NavLink></li>
      <li><NavLink to="/contact" className="px-3 py-2">Contact</NavLink></li>
      <li><NavLink to="/about" className="px-3 py-2">About</NavLink></li>
    </>
  );

  return (
    <div className="navbar  max-w-7xl mx-auto text-white shadow-sm bg-gradient rounded-b-2xl sticky top-0 z-50">

      {/* Left */}
      <div className="navbar-start px-3">
        {/* Mobile Menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5"
              fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>

          <ul tabIndex={0}
            className="menu menu-sm dropdown-content 
            bg-gray-900 rounded-box z-50 mt-3 w-52 p-2 shadow">
            {links}
          </ul>
        </div>

        <Link to="/" className="btn btn-ghost text-xl"><img className='h-8 w-8 rounded-b-box' src={logo} alt="" />GameHub</Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      {/* Right - Avatar + Logout */}
      <div className="navbar-end pr-4">
        {!user && (
          <>
            <Link to="/login" className="btn btn-sm mx-1">Login</Link>
            <Link to="/register" className="btn btn-sm btn-outline mx-1">Register</Link>
          </>
        )}

        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="user"
                  src={user?.photoURL || "https://i.ibb.co/Z6gCTKL4/219983.png"}
                />
              </div>
            </div>

            <ul tabIndex={0}
              className="menu menu-sm dropdown-content bg-gray-900 
              text-white rounded-box z-50 mt-3 w-52 p-2 shadow">

              <li><Link to="/my-profile">Profile</Link></li>
              

              <li>
                <button onClick={handleLogout} className="text-red-400">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
