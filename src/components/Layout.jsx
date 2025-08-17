import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Sidebar from './Sidebar';
import Logo from '../assets/Logo/Logo.png'
import Footer from './Footer';
import BottomNavigation from './BottomNavigation';
import Header from './Header';
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen  text-white">
      {/* Header */}



      <div className="flex">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="flex-1 min-h-screen">
<Header setSidebarOpen ={setSidebarOpen}/>
          <div className="p-2 z-0 bg-gray-900 sm:p-6">
            {children}
          </div>
          <BottomNavigation/>
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default Layout;
