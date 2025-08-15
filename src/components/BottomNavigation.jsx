import React from 'react';
import { 
  BookOpenIcon, 
  SignalIcon, 
  HomeIcon, 
  Cog6ToothIcon, 
  UserIcon 
} from '@heroicons/react/24/outline';

const TelegramIcon = () => (
  <svg 
    className="w-6 h-6" 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
  </svg>
);

const BottomNavigation = () => {
  const [activeTab, setActiveTab] = React.useState('Home');

  const navItems = [
    {
      name: 'Sportsbook',
      icon: BookOpenIcon,
      active: false
    },
    {
      name: 'In-play',
      icon: SignalIcon,
      active: false
    },
    {
      name: 'Home',
      icon: HomeIcon,
      active: true
    },
    {
      name: 'Casino',
      icon: Cog6ToothIcon,
      active: false
    },
    {
      name: 'Preferences',
      icon: UserIcon,
      active: false
    }
  ];

  return (
    <div className="relative">
      {/* Telegram Floating Button */}
      <div className="fixed bottom-20 right-4 z-[100]">
        <div className="relative">
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 shadow-lg transition-colors duration-200">
            <TelegramIcon />
          </button>
          {/* 24/7 Badge */}
          <div className="absolute -top-1 -right-1 bg-green-400 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center border-2 border-white">
            24/7
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-[100] bg-slate-800 border-t border-slate-700 md:hidden">
        <div className="flex items-center justify-around py-2">
          {navItems.map((item, index) => {
            const IconComponent = item.icon;
            const isActive = item.name === activeTab;
            
            return (
              <button
                key={index}
                onClick={() => setActiveTab(item.name)}
                className={`flex flex-col items-center justify-center py-2 px-3 min-w-0 flex-1 ${
                  isActive 
                    ? 'text-cyan-400' 
                    : 'text-gray-400 hover:text-gray-200'
                } transition-colors duration-200`}
              >
                <div className="relative">
                  <IconComponent className="w-6 h-6" />
                  {/* Active indicator line */}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-cyan-400 rounded-full"></div>
                  )}
                </div>
                <span className="text-xs mt-1 font-medium leading-tight">
                  {item.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
