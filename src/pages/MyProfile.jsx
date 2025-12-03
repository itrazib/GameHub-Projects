import React, { useContext } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import { SiGmail } from 'react-icons/si';
import { CgMail } from 'react-icons/cg';

export default function MyProfile() {
  const { user } = useContext(AuthContext);
  if (!user) return null;

  return (
    <div className=" flex items-center justify-center  p-6">
      <div className="w-full max-w-7xl bg-gradient-to-br from-indigo-600 via-indigo-900 to-[#0f0f17] rounded-3xl p-[2px] shadow-2xl">
        <div className="bg-[#0f0f17]/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col md:flex-row items-center md:items-start text-center md:text-left gap-8">

          {/* Left: Avatar */}
          <div className="relative md:w-1/3 flex justify-center">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-indigo-500 via-indigo-700 to-indigo-900 blur-md opacity-40"></div>
            <img
              src={'https://i.ibb.co/Z6gCTKL4/219983.png'}
              alt="avatar"
              className="w-40 h-40 rounded-2xl object-cover relative shadow-lg border border-indigo-800"
            />
          </div>

          {/* Right: Details */}
          <div className="md:w-2/3 flex flex-col items-center md:items-start text-white">
            <h2 className="text-3xl font-semibold mt-4 md:mt-0">{user.displayName || 'No Name'}</h2>
            <p className="text-indigo-300 mt-1 text-sm flex items-center">
              <span className='mr-2'><CgMail /></span>
              {user.email}</p>

            {/* Bio */}
            <p className="text-slate-400 mt-3 text-sm w-full md:w-4/5">{user.bio || 'No bio added yet'}</p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-6 w-full md:w-4/5">
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">12</span>
                <span className="text-xs text-slate-400">Games</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">5</span>
                <span className="text-xs text-slate-400">Favorites</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl font-bold">3</span>
                <span className="text-xs text-slate-400">Reviews</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6 w-full md:w-4/5">
              <Link to="/update-info" className="btn btn-primary flex-1">
                Update Info
              </Link>
              <Link to="/" className="btn btn-outline text-white border-indigo-500 flex-1">
                Home
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}