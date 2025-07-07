import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignupPage = ({ showToast }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Conceptual: Simulate signup logic
      await Promise.resolve(); // Replace with real signup
      if (showToast) showToast('Signup successful! Please check your email.', 'success');
      // Clear any local error state here if needed
    } catch (err) {
      if (showToast) showToast('Signup failed. Email may be in use.', 'error');
      // Optionally set local error state here
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left side: Brand */}
      <div className="hidden md:flex w-1/2 bg-blue-600 relative items-center justify-center">
        <div className="absolute inset-0 bg-blue-600 opacity-90" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Token Guardian</h1>
          <p className="text-lg md:text-2xl text-blue-100 font-medium">Secure your design tokens</p>
        </div>
      </div>
      {/* Right side: Signup Form */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 bg-white min-h-screen px-6 py-12">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-gray-900 text-center">Create Your Account</h2>
          <p className="text-gray-500 text-center mb-8">Enter your information to create an account</p>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 text-left">Full Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 text-left">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                placeholder="m@example.com"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 text-left">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1 text-left">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>
          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/auth" className="text-blue-700 hover:underline font-medium">Log in</Link>
          </p>
          <p className="mt-8 text-center text-xs text-gray-400">
            Manage your tokens. Delight your developers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage; 