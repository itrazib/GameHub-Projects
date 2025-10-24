import React, { useContext, useState } from 'react';
import { AuthContext} from '../../firebase/AuthContext';
import { useLocation } from 'react-router';


export default function ForgotPassword() {
  const { resetPassword } = useContext(AuthContext);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || '');

  async function handle(e) {
    e.preventDefault();
    try {
      await resetPassword(email);
      // Best-effort to help user open mail
      window.open('https://mail.google.com', '_blank');
      alert('Reset email sent. Opening Gmail...');
    } catch (err) {
      alert('Error: ' + err.message);
    }
  }

  return (
    <div className="card max-w-md">
      <h2 className="text-xl font-semibold mb-3">Reset Password</h2>
      <form onSubmit={handle}>
        <input value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Your email" required className="w-full mb-3 px-3 py-2 rounded-md bg-slate-700 text-slate-100" />
        <button className="btn">Send reset email</button>
      </form>
    </div>
  );
}
