import React from 'react';
import { ArrowLeft, Menu, X, Volume2 } from 'lucide-react';

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 border-b border-gray-800">
      <div className="flex items-center gap-6">
        <button className="p-1 hover:bg-gray-800 rounded transition-colors">
          <ArrowLeft size={20} />
        </button>
        
        <div className="flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition-colors cursor-pointer">
          <Volume2 size={14} className="text-white" />
          <span>Read.cv is winding down</span>
          <ArrowLeft size={14} className="rotate-180" />
        </div>
      </div>

      <nav className="hidden lg:flex items-center gap-8">
        <button className="text-white hover:text-gray-300 transition-colors font-medium">
          Front page
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          Job board
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          Activity
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          Gift shop
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          Pricing
        </button>
        <button className="text-gray-400 hover:text-white transition-colors">
          About
        </button>
      </nav>

      <div className="flex items-center gap-4">
        <button className="hidden md:block bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors font-medium">
          Log in or sign up
        </button>
        
        <button 
          className="lg:hidden p-2 hover:bg-gray-800 rounded transition-colors"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;