import React, { useContext, useState } from 'react';

import { Link, useNavigate } from 'react-router'; 
import { AuthContext } from '../../context/AuthContext';

export default function Register() {
  const { registerWithEmail, loginWithGoogle, error, setError } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{6,}$/;

  async function handle(e) {
    e.preventDefault();
    setError('');

    if (!passwordRegex.test(password)) {
      setError('Password must include 1 uppercase letter, 1 number, 1 special character, and be at least 6 characters long.');
      return;
    }

    try {
      await registerWithEmail(name, email, password, photo);
      navigate('/');
    } catch (err) {
      setError('Register failed: ' + err.message);
    }
  }

  async function handleGoogle() {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      setError('Google register failed: ' + err.message);
    }
  }

  return (
    <div className='flex justify-center mx-auto mt-5'>
      <div className="card max-w-[400px] bg-gradient text-white p-5">
        <h2 className="text-xl font-semibold mb-3 text-center">Register</h2>
        <form onSubmit={handle}>
          <input  onChange={e => setName(e.target.value)} placeholder="Name" required className="w-full mb-3 px-3 py-2 rounded-md border border-gray-400" />
          <input onChange={e => setPhoto(e.target.value)} placeholder="Photo URL (optional)" className="w-full mb-3 px-3 py-2 rounded-md border border-gray-400" />
          <input  onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required className="w-full mb-3 px-3 py-2 rounded-md border border-gray-400" />
          <input  onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required className="w-full mb-3 px-3 py-2 rounded-md border border-gray-400" />
          <button className="btn  w-full  bg-yellow-500 text-gray-900 font-semibold  rounded-lg hover:bg-yellow-400 transition-colors">Register</button>
        </form>
        {error && <p className="text-red-500 mt-2">{error}</p>}

        <div className="mt-3">
          <button onClick={handleGoogle} className="mt-4 w-full flex items-center justify-center gap-2 py-3 border border-gray-300 rounded-lg hover:bg-yellow-400 hover:text-black transition">
            <svg width="16" height="16" viewBox="0 0 512 512"><g><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"/><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"/><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"/><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"/></g></svg>
            Login with Google
          </button>
        </div>

        <p className="mt-3 text-slate-400">Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>
      </div>
    </div>
  );
}
