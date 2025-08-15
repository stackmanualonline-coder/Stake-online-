import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  User, 
  Bell, 
  Globe, 
  ChevronDown,
  MessageCircle,
  Search,
  Home,
  Zap,
  Gamepad2,
  TrendingUp
} from 'lucide-react';
import Logo from '../assets/Logo/Logo.png'

const Header = ({ setSidebarOpen }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-black border-b border-orange-500/30 sticky top-0 z-50 backdrop-blur-sm">
        {/* Main Header */}
        <div className="flex items-center justify-center px-3 py-2.5">
          {/* Left Section - Mobile Menu + Logo */}
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-white/80 hover:text-orange-400 p-1.5 rounded-lg hover:bg-orange-500/20 transition-all"
            >
              <Menu size={20} />
            </button>
            
            <div className="flex md:hidden items-center">
              <img 
                src={Logo} 
                width={90} 
                height={60} 
                alt="Logo" 
                className="sm:w-24 sm:h-12"
              />
            </div>
          </div>

          {/* Center Navigation - Desktop Only */}
          <nav className="hidden justify-start lg:flex items-center space-x-1">
            <a href="#" className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-600 px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-yellow-700 transition-all text-sm shadow-lg">
              <Home size={16} />
              <span>Home</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-orange-200 px-4 py-2 rounded-lg hover:bg-orange-500/20 transition-all text-sm">
              <Zap size={16} />
              <span>Live</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-orange-200 px-4 py-2 rounded-lg hover:bg-orange-500/20 transition-all text-sm">
              <TrendingUp size={16} />
              <span>Sports</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-orange-200 px-4 py-2 rounded-lg hover:bg-orange-500/20 transition-all text-sm">
              <Gamepad2 size={16} />
              <span>Casino</span>
            </a>
          </nav>

          {/* Right Section */}
          <div className="flex items-center  space-x-6">
            {/* Search Button - Mobile */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden text-white/80 hover:text-orange-400 p-2 rounded-lg hover:bg-orange-500/20 transition-all"
            >
              <Search size={18} />
            </button>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center bg-gray-700/50 border border-orange-500/20 rounded-lg px-3 py-2 min-w-[200px] focus-within:border-orange-500/50">
              <Search size={16} className="text-orange-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search games..." 
                className="bg-transparent text-white placeholder-gray-400 text-sm outline-none flex-1"
              />
            </div>

            {/* WhatsApp - Desktop */}
            <div className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-700 transition-all cursor-pointer">
              <MessageCircle size={16} />
              <span className="text-sm font-medium">Support</span>
            </div>

            {/* Language Selector */}
            <button className="hidden sm:flex items-center space-x-1 text-white/80 hover:text-orange-200 px-2 py-2 rounded-lg hover:bg-orange-500/20 transition-all">
              <Globe size={16} />
              <span className="text-sm">EN</span>
              <ChevronDown size={14} />
            </button>

            {/* Notifications */}
            {/* <button className="relative text-white/80 hover:text-orange-400 p-2 rounded-lg hover:bg-orange-500/20 transition-all">
              <Bell size={18} />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </button> */}

            {/* Auth Buttons */}
            <div className="flex items-center space-x-1.5">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-yellow-700 transition-all shadow-lg">
                Login
              </button>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-600 px-3 py-2 rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-orange-700 transition-all shadow-lg">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar - Expandable */}
        {searchOpen && (
          <div className="lg:hidden border-t border-orange-500/30 p-3">
            <div className="flex items-center bg-gray-700/50 border border-orange-500/20 rounded-lg px-3 py-2">
              <Search size={16} className="text-orange-400 mr-2" />
              <input 
                type="text" 
                placeholder="Search games, sports..." 
                className="bg-transparent text-white placeholder-gray-400 text-sm outline-none flex-1"
                autoFocus
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-gray-400 hover:text-orange-400 ml-2"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
