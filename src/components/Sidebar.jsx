import React, { useRef, useEffect } from 'react';
import { X, MessageCircle, ChevronRight, Gift, DollarSign, FileText, Globe, Palette, Shield } from 'lucide-react';
import Logo from '../assets/Logo/Logo.png';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile Sidebar */}
      <div className={`fixed lg:hidden inset-y-0 left-0 z-[1000] w-72 bg-gradient-to-b from-slate-900 via-gray-900 to-black border-r border-orange-500/30 transform transition-all duration-300 ease-in-out shadow-2xl ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        <div className="flex flex-col h-full backdrop-blur-sm">
          <div className="flex items-center justify-between p-6 border-b border-orange-500/30">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                <img src={Logo} width={100} alt="" />
              </span>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-orange-500/20 rounded-lg transition-colors"
            >
              <X size={24} className="text-orange-300" />
            </button>
          </div>
          <SidebarContent />
        </div>
      </div>

      {/* Desktop Sidebar - Sticky */}
      <div className="hidden lg:block w-72 flex-shrink-0">
        <div className="sticky top-0 h-[calc(100vh)] overflow-hidden">
          <div className="bg-gradient-to-b from-slate-900 via-gray-900 to-black border-r border-orange-500/30 h-full flex flex-col shadow-2xl">
            <div className="p-6 border-b border-orange-500/30">
              <div className="flex justify-center items-center space-x-3">
                <span className="flex justify-center w-auto items-center text-2xl font-bold bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
                  <img src={Logo} width={200} alt="" />
                </span>
              </div>
            </div>
            <SidebarContent />
          </div>
        </div>
      </div>
    </>
  );
};

const SidebarContent = () => {
  const scrollContainerRef = useRef(null);

  // Prevent scroll propagation to parent
  useEffect(() => {
    const handleWheel = (e) => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const { scrollTop, scrollHeight, clientHeight } = container;
      const isAtTop = scrollTop === 0;
      const isAtBottom = Math.abs(scrollHeight - clientHeight - scrollTop) < 1;

      // Prevent scroll propagation when at boundaries
      if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel, { passive: false });
      
      // Also prevent touch events from propagating
      const handleTouchMove = (e) => {
        e.stopPropagation();
      };
      
      container.addEventListener('touchmove', handleTouchMove, { passive: true });

      return () => {
        container.removeEventListener('wheel', handleWheel);
        container.removeEventListener('touchmove', handleTouchMove);
      };
    }
  }, []);

  const sportsCategories = [
    { name: 'Cricket', icon: '🏏', active: false, color: 'from-orange-400 to-yellow-500' },
    { name: 'Football', icon: '⚽', active: false, color: 'from-orange-400 to-red-500' },
    { name: 'Tennis', icon: '🎾', active: false, color: 'from-yellow-400 to-orange-500' },
    { name: 'Kabaddi', icon: '🤼', active: false, color: 'from-amber-400 to-orange-500' },
    { name: 'Basketball', icon: '🏀', active: false, color: 'from-orange-500 to-red-500' },
    { name: 'Baseball', icon: '⚾', active: false, color: 'from-yellow-500 to-orange-600' },
    { name: 'GreyHound', icon: '🐕', active: false, color: 'from-gray-400 to-orange-400' },
    { name: 'Horse Race', icon: '🐎', active: false, color: 'from-amber-400 to-yellow-500' },
    { name: 'Volleyball', icon: '🏐', active: false, color: 'from-orange-400 to-amber-500' },
    { name: 'Darts', icon: '🎯', active: false, color: 'from-red-400 to-orange-500' },
    { name: 'Futsal', icon: '⚽', active: false, color: 'from-orange-500 to-yellow-500' },
    { name: 'Table Tennis', icon: '🏓', active: false, color: 'from-yellow-400 to-orange-400' },
    { name: 'Binary', icon: '📊', active: false, color: 'from-orange-600 to-red-500' },
    { name: 'Politics', icon: '🏛️', active: false, color: 'from-amber-500 to-orange-600' },
    { name: 'Ice Hockey', icon: '🏒', active: false, color: 'from-orange-400 to-yellow-600' },
    { name: 'MMA', icon: '🥊', active: false, color: 'from-red-500 to-orange-500' },
    { name: 'Rugby', icon: '🏉', active: false, color: 'from-orange-500 to-amber-500' },
    { name: 'Multi Markets', icon: '📈', active: false, color: 'from-yellow-400 to-orange-500' }
  ];

  const otherMenuItems = [
    { name: 'Promotions', icon: Gift, color: 'text-orange-400' },
    { name: 'My Transaction', icon: DollarSign, color: 'text-yellow-400' },
    { name: 'Game Rules', icon: FileText, color: 'text-orange-300' },
    { name: 'Language : EN', icon: Globe, color: 'text-amber-400' },
    { name: 'Theme', icon: Palette, color: 'text-orange-500' }
  ];

  const securityItems = [
    { name: 'Terms & Policy', icon: Shield, color: 'text-orange-400' }
  ];

  return (
    <>
      {/* Scrollable Content with ref and proper containment */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 custom-scrollbar"
        style={{ 
          overscrollBehavior: 'contain',
          touchAction: 'pan-y'
        }}
      >
        {/* Sports Categories */}
        <div className="space-y-1">
          <h3 className="text-orange-300 text-xs font-semibold uppercase tracking-wider mb-4 px-3">
            Sports Categories
          </h3>
          {sportsCategories.map((sport, index) => (
            <div 
              key={index} 
              className={`group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer transition-all duration-150 ease-out ${
                sport.active 
                  ? `bg-gradient-to-r ${sport.color} shadow-lg shadow-orange-500/25` 
                  : 'hover:bg-orange-500/10 hover:shadow-md border border-transparent hover:border-orange-500/30'
              }`}
            >
              <div className="flex items-center space-x-3">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-150 ease-out ${
                  sport.active 
                    ? 'bg-white/20 backdrop-blur-sm' 
                    : 'bg-gray-700/50 group-hover:bg-orange-500/20'
                }`}>
                  <span className="text-sm">{sport.icon}</span>
                </div>
                <span className={`text-sm font-medium transition-colors duration-150 ease-out ${
                  sport.active ? 'text-white' : 'text-gray-300 group-hover:text-orange-200'
                }`}>
                  {sport.name}
                </span>
              </div>
              <ChevronRight 
                size={16} 
                className={`transition-all duration-150 ease-out ${
                  sport.active 
                    ? 'text-white opacity-100' 
                    : 'text-orange-400 opacity-0 group-hover:opacity-100'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Other Menu Items */}
        <div className="mt-8">
          <h3 className="text-orange-300 text-xs font-semibold uppercase tracking-wider mb-4 px-3">
            Other Menu
          </h3>
          <div className="space-y-1">
            {otherMenuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 transition-all duration-150 ease-out hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-150 ease-out">
                      <IconComponent size={16} className={item.color} />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-orange-200 transition-colors duration-150 ease-out">
                      {item.name}
                    </span>
                  </div>
                  <ChevronRight size={16} className="text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-out" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Security Items */}
        <div className="mt-8">
          <h3 className="text-orange-300 text-xs font-semibold uppercase tracking-wider mb-4 px-3">
            Security & Privacy
          </h3>
          <div className="space-y-1">
            {securityItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div 
                  key={index} 
                  className="group flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer hover:bg-orange-500/10 border border-transparent hover:border-orange-500/30 transition-all duration-150 ease-out hover:shadow-md"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-700/50 rounded-lg flex items-center justify-center group-hover:bg-orange-500/20 transition-colors duration-150 ease-out">
                      <IconComponent size={16} className={item.color} />
                    </div>
                    <span className="text-sm font-medium text-gray-300 group-hover:text-orange-200 transition-colors duration-150 ease-out">
                      {item.name}
                    </span>
                  </div>
                  <ChevronRight size={16} className="text-orange-400 opacity-0 group-hover:opacity-100 transition-all duration-150 ease-out" />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced Bottom Section */}
      <div className="p-4 border-t border-orange-500/30 bg-gray-800/50 flex-shrink-0">
        <button className="w-full bg-gradient-to-r from-orange-500 to-yellow-600 hover:from-orange-600 hover:to-yellow-700 text-white py-3 px-4 rounded-xl flex items-center justify-center space-x-3 transition-all duration-200 transform hover:scale-[1.02] shadow-lg hover:shadow-xl font-medium">
          <MessageCircle size={20} />
          <span>Follow on WhatsApp</span>
        </button>
        
        <div className="mt-4 text-center">
          <span className="text-xs text-gray-400">Online Players: </span>
          <span className="text-xs text-orange-400 font-semibold">12,847</span>
        </div>
      </div>

      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgb(31 41 55 / 0.3);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgb(251 146 60 / 0.6);
          border-radius: 3px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgb(251 146 60 / 0.8);
        }
      `}</style>
    </>
  );
};

export default Sidebar;
