import React, { useContext, useState } from 'react';
import { AuthContext} from '../../firebase/AuthContext';
import { Link, useNavigate } from 'react-router';
import { p } from 'framer-motion/client';


export default function Register() {
  const { registerWithEmail, loginWithGoogle,error,setError } = useContext(AuthContext);
  const [name, setName] = useState('');
  
  const [photo, setPhoto] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const passwordRegex = /[A-Z]/.test(p) && /[0-9]/.test(p) && /[^A-Za-z0-9]/.test(p) && p.length >= 6;

//   function validPassword(p) {
//     return 
//   }

  async function handle(e) {
    e.preventDefault();
    if (passwordRegex.test(password)) setError('Password must have 1 uppercase, 1 number, 1 special char and at least 6 chars.')
    try {
      await registerWithEmail(name, email, password, photo);
      navigate('/');
    } catch (err) {
      alert('Register failed: ' + err.message);
    }
  }

  async function handleGoogle() {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (err) {
      alert('Google register failed', err.message);
    }
  }

  return (
    <div className="card max-w-md">
      <h2 className="text-xl font-semibold mb-3">Register</h2>
      <form onSubmit={handle}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required className="w-full mb-3 px-3 py-2 rounded-md bg-slate-700 text-slate-100" />
        <input value={photo} onChange={e => setPhoto(e.target.value)} placeholder="Photo URL (optional)" className="w-full mb-3 px-3 py-2 rounded-md bg-slate-700 text-slate-100" />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required className="w-full mb-3 px-3 py-2 rounded-md bg-slate-700 text-slate-100" />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required className="w-full mb-3 px-3 py-2 rounded-md bg-slate-700 text-slate-100" />
        <button className="btn">Register</button>
      </form>
      {
        error && <p>{error}</p>
      }

      <div className="mt-3">
        <button onClick={handleGoogle} className="btn" style={{background:'#22c55e'}}>Register with Google</button>
      </div>

      <p className="mt-3 text-slate-400">Already have an account? <Link to="/login" className="text-white">Login</Link></p>
    </div>
  );
}
