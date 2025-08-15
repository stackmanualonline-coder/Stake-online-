import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-orange-500/30">
      {/* Top Support Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-600 py-3">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white font-semibold">
            Need help? Our 24/7 support team is here for you anytime!
          </p>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Side - SSL Badge and Security Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              {/* SSL Security Badge */}
              <div className="bg-gradient-to-r from-orange-500 to-yellow-600 rounded-lg p-3 flex items-center space-x-3">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">SECURE</div>
                  <div className="text-white text-xs">SSL ENCRYPTION</div>
                </div>
              </div>

              {/* Security Text */}
              <div>
                <h3 className="text-white font-bold text-lg mb-1">100% Safe</h3>
                <p className="text-gray-400 text-sm max-w-md">
                  Your data is safe with encrypted protection. Enjoy a secure and private connection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Logos */}
          <div className="flex justify-center lg:justify-end space-x-6">
            {/* GamCare Logo */}
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-orange-500/30 hover:border-orange-500/50 transition-colors">
              <span className="text-orange-300 text-xs font-bold">GamCare</span>
            </div>
            
            {/* 18+ Logo */}
            <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-orange-500/30 hover:border-orange-500/50 transition-colors">
              <span className="text-orange-300 text-2xl font-bold">18+</span>
            </div>
          </div>
        </div>

        {/* Description Text */}
        <div className="mt-8 pt-6 border-t border-orange-500/30">
          <p className="text-gray-400 text-sm leading-relaxed max-w-4xl">
            Stake-Manual Online-Hub provides a smooth and secure betting experience with a variety of reliable payment options. Whether you're placing 
            bets on casino games or sports, our platform ensures quick and hassle-free transactions. Enjoy the convenience of seamless 
            deposits and withdrawals, and focus on the thrill of the game.
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-orange-500/30 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © Copyright 2024. All Rights Reserved. Powered by Stake-Manual Online-Hub.
          </p>
          
          <div className="mt-4 md:mt-0">
            <p className="text-orange-400 text-sm font-medium">
              RULES & REGULATIONS © 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
