import React from 'react';
import { Link } from 'react-router-dom';

// For now, hardcode loggedIn to false
const loggedIn = false;

export default function UserMenu() {
  if (!loggedIn) {
    return (
      <div className="flex items-center space-x-2">
        <Link to="/auth" className="text-gray-700 font-semibold text-sm hover:text-blue-600 transition-colors px-4 py-2">Login</Link>
        <Link to="/signup" className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors text-sm">Sign Up</Link>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold border border-gray-200 shadow-sm hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-haspopup="true"
        aria-expanded="false"
      >
        DA
      </button>
      <div className="absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 z-50">
        <div className="px-5 pt-4 pb-2">
          <div className="font-semibold text-gray-900 text-base">Your Name</div>
          <div className="text-gray-500 text-sm">your@email.com</div>
        </div>
        <div className="border-t border-gray-100 my-2" />
        <div className="flex flex-col">
          <button className="flex items-center px-5 py-2 text-gray-700 hover:bg-gray-50 text-base transition-colors text-left">My Profile</button>
          <button className="flex items-center px-5 py-2 text-gray-700 hover:bg-gray-50 text-base transition-colors text-left">Settings</button>
          <button className="flex items-center px-5 py-2 text-gray-700 hover:bg-gray-50 text-base transition-colors text-left border-t border-gray-100 mt-2">Log out</button>
        </div>
      </div>
    </div>
  );
} 