import React, { useContext } from 'react';
import { AuthContext} from '../firebase/AuthContext';
import { Link } from 'react-router';


export default function MyProfile() {
  const { user } = useContext(AuthContext);
  if (!user) return null;
  return (
    <div className="card flex items-center gap-6">
      <img src={user.photoURL || 'https://via.placeholder.com/120'} alt="avatar" className="w-28 h-28 rounded-xl object-cover" />
      <div>
        <h2 className="text-xl font-semibold">{user.displayName || 'No name'}</h2>
        <p className="text-slate-400">{user.email}</p>
        <div className="mt-3">
          <Link className="btn" to="/update-info">Update Info</Link>
        </div>
      </div>
    </div>
  );
}
