import React, { useContext, useState } from 'react';
import { AuthContext} from '../../firebase/AuthContext';
import { useLocation } from 'react-router';
import { toast, ToastContainer } from 'react-toastify';


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
    <div className="card max-w-md mx-auto bg-white p-5 mt-5">
      <h2 className="text-xl font-semibold mb-3">Reset Password</h2>
      <form onSubmit={handle}>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Your email" required className="w-full mb-3 px-3 py-2 rounded-md bg-white  text-gray-700 border-1 border-gray-400" />
        <button className="btn btn-accent text-white">Send reset email</button>
      </form>
      <ToastContainer position='top-center'></ToastContainer>
    </div>
  );
}
