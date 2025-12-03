import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../context/AuthContext';

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
    <div className="flex items-center justify-center  p-6">
      <div className="w-full max-w-7xl bg-gradient-to-br from-indigo-600 via-indigo-900 to-[#0f0f17] rounded-3xl p-[2px] shadow-2xl">
        <div className="bg-[#0f0f17]/80 backdrop-blur-xl rounded-3xl p-8">
          <h1 className="text-2xl text-center font-semibold text-white mb-6">Update Info</h1>
          <form onSubmit={handle} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label className="text-indigo-300 mb-1">Name</label>
              <input
                value={name}
                onChange={e => setName(e.target.value)}
                className="px-3 py-2 rounded-md bg-[#1a1a25] text-white border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-indigo-300 mb-1">Photo URL</label>
              <input
                value={photo}
                onChange={e => setPhoto(e.target.value)}
                className="px-3 py-2 rounded-md bg-[#1a1a25] text-white border border-indigo-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>

            <button className="mt-4 py-3 rounded-xl bg-yellow-500 text-black font-semibold shadow-lg hover:opacity-90 transition text-lg">
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}