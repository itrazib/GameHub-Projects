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
   <div className='max-w-xl mx-auto mt-20'>
    <title>Update Info</title>
    <h1 className='text-2xl mb-4 font-semibold'>Update Info</h1>
      <form onSubmit={handle} className="card  bg-white p-4 ">
      <label className="block mb-1">Name</label>
      <input value={name} onChange={e => setName(e.target.value)} className="w-full mb-3 px-3 py-2 rounded-md bg-white  text-gray-700 border-1 border-gray-400 " />

      <label className="block mb-1">Photo URL</label>
      <input value={photo} onChange={e => setPhoto(e.target.value)} className="w-full mb-3 px-3 py-2 rounded-md bg-white  text-gray-700 border-1 border-gray-400 " />

      <button className="btn btn-success text-xl text-white">Update</button>
    </form>
   </div>
  );
}
