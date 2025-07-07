
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import UserMenu from "./UserMenu";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // In a real app, clear auth state here
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md text-gray-800 py-4 px-6 border-b border-gray-200 flex items-center justify-between">
        <div className="font-extrabold text-2xl text-blue-700">Token Guardian</div>
        <div className="flex items-center space-x-6 ml-8">
          <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors">Input Figma CSS</Link>
          <Link to="/projects" className="text-gray-700 hover:text-blue-600 font-medium text-lg transition-colors">Projects</Link>
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserMenu />
        </div>
      </nav>
      <main className="flex-grow pt-20 bg-gray-100 flex justify-center items-start pb-8">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;
