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
   <div className='flex  justify-center mx-auto mt-5'>
          <div className="card max-w-[400px] bg-white p-5">
      <h2 className="text-xl font-semibold mb-3">Register</h2>
      <form onSubmit={handle}>
        <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" required className="w-full mb-3 px-3 py-2 rounded-md bg-white  text-gray-700 border-1 border-gray-400 " />
        <input value={photo} onChange={e => setPhoto(e.target.value)} placeholder="Photo URL (optional)" className="w-full mb-3 px-3 py-2 rounded-md bg-white  text-gray-700 border-1 border-gray-400 " />
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Email" required className="w-full mb-3 px-3 py-2 rounded-md bg-white  text-gray-700 border-1 border-gray-400 " />
        <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Password" required className="w-full mb-3 px-3 py-2 rounded-md bg-white  text-gray-700 border-1 border-gray-400 " />
        <button className="btn btn-secondary w-full">Register</button>
      </form>
      {
        error && <p>{error}</p>
      }

      <div className="mt-3">
         <button
            onClick={handleGoogle}
            className="btn bg-white text-black border-[#e5e5e5] w-full"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
      </div>

      <p className="mt-3 text-slate-400">Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link></p>
    </div>
   </div>
  );
}
