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
  TrendingUp,
  Wallet,
  LogOut
} from 'lucide-react';
import Logo from '../assets/Logo/Logo.png'
import { Link } from 'react-router-dom';

const Header = ({ setSidebarOpen }) => {

  const [searchOpen, setSearchOpen] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  React.useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userRaw = localStorage.getItem('user');
    if (token) {
      setIsAuthenticated(true);
      if (userRaw) {
        try {
          const userObj = JSON.parse(userRaw);
          setUserData(userObj.user || null);
        } catch {
          setUserData(null);
        }
      } else {
        setUserData(null);
      }
    } else {
      setIsAuthenticated(false);
      setUserData(null);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('authToken');
    setUserData(null);
    setIsAuthenticated(false);
    setShowUserMenu(false);
  };

   const handleTelegramClick = () => {
    // WhatsApp channel link (Replace with your actual link)
    const whatsappLink = 'https://wa.link/StakeHelpDesk'; // Change this to your WhatsApp number/channel link
     window.open(whatsappLink, '_blank');
  };


  return (
    <>
    <header className="bg-gradient-to-r from-slate-900 via-gray-900 to-black border-b border-orange-500/30 sticky top-0 z-50 backdrop-blur-sm">
  {/* Main Header */}
  <div className="flex items-center justify-between px-2 py-2">
    
    {/* Left Section - Mobile Menu + Logo */}
    <div className="flex items-center">
      {/* Sidebar toggle on mobile/tablet */}
      <button 
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden text-white/80 hover:text-orange-400 p-1.5 rounded-lg hover:bg-orange-500/20 transition-all"
      >
        <Menu size={22} />
      </button>

      {/* Logo - show on mobile & tablet, hide only when desktop nav is active */}
      <div className="flex items-center md:flex lg:hidden">
        <img 
          src={Logo} 
          width={100} 
          height={60} 
          alt="Logo" 
          className="w-24 h-12 object-contain"
        />
      </div>
    </div>

    {/* Center Navigation - Desktop Only */}
    <nav className="hidden lg:flex items-center space-x-1">
      <a href="/" className="flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-600 px-4 py-2 rounded-lg font-medium hover:from-orange-600 hover:to-yellow-700 transition-all text-sm shadow-lg">
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
    <div className="flex items-center space-x-3 sm:space-x-5">
      {/* Search Button - Mobile/Tablet */}
      <button 
        onClick={() => setSearchOpen(!searchOpen)}
        className="lg:hidden text-white/80 hover:text-orange-400 p-2 rounded-lg hover:bg-orange-500/20 transition-all"
      >
        {/* <Search size={18} /> */}
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

      {/* Support - Desktop only */}
      <div 
      onClick={handleTelegramClick}
      className="hidden lg:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-2 rounded-lg hover:from-orange-600 hover:to-yellow-700 transition-all cursor-pointer">
        <MessageCircle size={16} />
        <span className="text-sm font-medium">Support</span>
      </div>

      {/* Language Selector */}
      <button className="hidden sm:flex items-center space-x-1 text-white/80 hover:text-orange-200 px-2 py-2 rounded-lg hover:bg-orange-500/20 transition-all">
        <Globe size={16} />
        <span className="text-sm">EN</span>
        <ChevronDown size={14} />
      </button>

      {/* Auth Buttons or User Info */}
      <div className="flex items-center space-x-1.5">
        {isAuthenticated && userData ? (
          <div className="relative">
            {/* User Info Display */}
            <button 
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="bg-gradient-to-r from-slate-700 to-slate-800 border border-orange-500/30 px-3 py-2 rounded-lg text-sm font-medium hover:from-slate-600 hover:to-slate-700 transition-all shadow-lg flex items-center space-x-3"
            >
              {/* User Avatar */}
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                {userData.username?.charAt(0).toUpperCase()}
              </div>
              
              {/* User Details - Desktop */}
              <div className="hidden sm:flex flex-col items-start">
                <div className="flex items-center space-x-2">
                  <span className="text-orange-400 font-mono text-xs">{userData.userId}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Wallet size={12} className="text-green-400" />
                  <span className="text-green-400 font-semibold text-xs">
                    ${(userData.wallet || 0).toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Mobile - Show only wallet */}
              <div className="sm:hidden flex items-center space-x-1">
                <Wallet size={14} className="text-green-400" />
                <span className="text-green-400 font-semibold text-sm">
                  ${(userData.wallet || 0).toFixed(2)}
                </span>
              </div>

              <ChevronDown size={14} className="text-gray-400" />
            </button>

            {/* Dropdown Menu */}
            {showUserMenu && (
              <div className="absolute right-0 mt-2 w-64 bg-slate-800 border border-orange-500/30 rounded-xl shadow-xl z-50">
                <div className="p-4 border-b border-slate-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {userData.username?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-white font-medium">{userData.username}</p>
                      <p className="text-orange-400 font-mono text-sm">{userData.userId}</p>
                      <p className="text-gray-400 text-xs">{userData.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-3">
                  <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-3 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300 text-sm">Wallet Balance</span>
                      <div className="flex items-center space-x-1">
                        <Wallet size={16} className="text-green-400" />
                        <span className="text-green-400 font-bold">
                          ${(userData.wallet || 0).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <button className="w-full text-left px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/20 rounded-lg transition-all text-sm flex items-center space-x-2">
                      <User size={16} />
                      <span>Profile</span>
                    </button>
                    <button className="w-full text-left px-3 py-2 text-gray-300 hover:text-orange-400 hover:bg-orange-500/20 rounded-lg transition-all text-sm flex items-center space-x-2">
                      <Wallet size={16} />
                      <span>Deposit</span>
                    </button>
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-red-400 hover:text-red-300 hover:bg-red-500/20 rounded-lg transition-all text-sm flex items-center space-x-2"
                    >
                      <LogOut size={16} />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to={"/login"}>
              <button className="bg-gradient-to-r from-orange-500 to-yellow-600 px-3 py-2 rounded-lg text-sm font-medium hover:from-orange-600 hover:to-yellow-700 transition-all shadow-lg">
                Login
              </button>
            </Link>
            <Link to={"/register"}>
              <button className="bg-gradient-to-r from-yellow-500 to-orange-600 px-3 py-2 rounded-lg text-sm font-medium hover:from-yellow-600 hover:to-orange-700 transition-all shadow-lg">
                Join
              </button>
            </Link>
          </>
        )}
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

  {/* Click outside to close dropdown */}
  {showUserMenu && (
    <div 
      className="fixed inset-0 z-40" 
      onClick={() => setShowUserMenu(false)}
    />
  )}
</header>
    </>
  );
};

export default Header;
