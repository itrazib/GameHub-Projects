import React, { useContext, useState } from 'react';

import { useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../context/AuthContext';


export default function ForgotPassword() {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');

  async function handle(e) {
    e.preventDefault();
    try {
      await resetPassword(email);
      window.open('https://mail.google.com', '_blank');
      toast.success('Reset email sent. Opening Gmail...');
    } catch (err) {
      toast('Error: ' + err.message);
    }
  }

  return (
    <div className="card max-w-3xl mx-auto bg-gradient p-5 mt-5">
      <h2 className="text-xl font-semibold text-white mb-3">Reset Password</h2>
      <form onSubmit={handle}>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Your email" required className="w-full mb-3 px-3 py-2 rounded-md  text-white border-1 border-gray-400" />
        <button className="btn btn-accent text-black bg-yellow-500">Send reset email</button>
      </form>
      <ToastContainer position='top-center'></ToastContainer>
    </div>
  );
}
