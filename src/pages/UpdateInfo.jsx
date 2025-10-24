import React, { useContext, useState } from 'react';
import { AuthContext} from '../firebase/AuthContext';
import { useNavigate } from 'react-router';

export default function UpdateInfo() {
  const { user, updateUserProfile } = useContext(AuthContext);
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');
  const navigate = useNavigate();

  async function handle(e) {
    e.preventDefault();
    try {
      await updateUserProfile({ displayName: name, photoURL: photo });
      alert('Profile updated');
      navigate('/my-profile');
    } catch (err) {
      console.error(err);
      alert('Update failed: ' + err.message);
    }
  }

  return (
    <form onSubmit={handle} className="card max-w-xl">
      <label className="block mb-1">Name</label>
      <input value={name} onChange={e => setName(e.target.value)} className="w-full mb-3 px-3 py-2 rounded-md bg-slate-700 text-slate-100" />

      <label className="block mb-1">Photo URL</label>
      <input value={photo} onChange={e => setPhoto(e.target.value)} className="w-full mb-3 px-3 py-2 rounded-md bg-slate-700 text-slate-100" />

      <button className="btn">Update</button>
    </form>
  );
}
