import React from 'react'
import img1 from '../assets/HeroSection/spribe.81fe54c5.webp'
import img2 from '../assets/HeroSection/turbo-games.2084e5aa.webp'

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-slate to-slate-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
          backgroundSize: '20px 20px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold">
                <span className="text-white">Get </span>
                <span className="text-yellow-400">500%</span>
                <br />
                <span className="text-white">Joining Bonus</span>
              </h1>
              
              <p className="text-gray-300 text-lg lg:text-xl max-w-md">
                Start your winning journey with our exclusive welcome bonus. Play premium games and win big!
              </p>
            </div>

            {/* CTA Button */}
            <button className="bg-cyan-400 hover:bg-cyan-500 text-slate-900 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              Join Now
            </button>

            {/* Quick Stats */}
            <div className="flex space-x-8 pt-4">
              <div>
                <div className="text-2xl font-bold text-cyan-400">500K+</div>
                <div className="text-gray-400 text-sm">Active Players</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">₹50L+</div>
                <div className="text-gray-400 text-sm">Daily Wins</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-400">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
              </div>
            </div>
          </div>

          {/* Right Content - Game Cards */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Main Card */}
              <div className="bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                <img 
                  src={img1} 
                  alt="Spribe Games" 
                  className="w-72 h-44 object-cover rounded-xl mb-4"
                />
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-white">Premium Games</h3>
                  <div className="flex space-x-2">
                    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">HOT</span>
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-pulse">LIVE</span>
                  </div>
                </div>
              </div>

              {/* Secondary Card */}
              <div className="absolute -bottom-4 -right-4 bg-slate-800 rounded-xl p-4 shadow-xl border border-slate-700">
                <img 
                  src={img2} 
                  alt="Turbo Games" 
                  className="w-48 h-28 object-cover rounded-lg mb-3"
                />
                <div className="text-center">
                  <h4 className="text-lg font-bold text-white mb-2">Turbo Games</h4>
                  <span className="bg-green-400 text-black px-3 py-1 rounded-full text-xs font-bold">NEW</span>
                </div>
              </div>

              {/* Floating Bonus Badge */}
              <div className="absolute -top-3 -left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold px-4 py-2 rounded-full shadow-lg animate-bounce">
                💰 ₹1000 FREE
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Bar */}
        {/* <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="flex items-center justify-center space-x-2">
              <span className="text-cyan-400 text-xl">🏆</span>
              <span className="text-gray-300 text-sm">Licensed & Secure</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-yellow-400 text-xl">⚡</span>
              <span className="text-gray-300 text-sm">Instant Withdrawal</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-green-400 text-xl">🎯</span>
              <span className="text-gray-300 text-sm">98% Win Rate</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-cyan-400 text-xl">📱</span>
              <span className="text-gray-300 text-sm">Mobile Optimized</span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default Banner
