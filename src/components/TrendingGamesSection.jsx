import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import img1 from '../assets/Treanding Sedction/img1.gif'
import img2 from '../assets/Treanding Sedction/img2.gif'
import img3 from '../assets/Treanding Sedction/img3.gif'
import img4 from '../assets/Treanding Sedction/img4.gif'
import img5 from '../assets/Treanding Sedction/img5.gif'
import img6 from '../assets/Treanding Sedction/img6.gif'

const TrendingGamesSection = () => {
  const trendingGames = [
    {
      id: 1,
      title: 'AVIATOR',
      subtitle: 'Crash Game',
      image: img1,
      icon: '✈️',
      category: 'Premium'
    },
    {
      id: 2,
      title: 'LIVE PREDICTION',
      subtitle: 'Market Trading',
      image: img2,
      icon: '📈',
      category: 'Live'
    },
    {
      id: 3,
      title: 'LUCKY ACE',
      subtitle: 'Live Casino',
      image: img3,
      icon: '💎',
      category: 'Casino'
    },
    {
      id: 4,
      title: 'COLOR PREDICTION',
      subtitle: 'Color Game',
      image: img4,
      icon: '🎨',
      category: 'Quick'
    },
    {
      id: 5,
      title: 'MARBLE RACE',
      subtitle: 'Racing Game',
      image: img5,
      icon: '🏁',
      category: 'Racing'
    },
    {
      id: 6,
      title: 'MINES',
      subtitle: 'Strategy Game',
      image: img6,
      icon: '💣',
      category: 'Strategy'
    }
  ];

  return (
    <div className="bg-gradient-to-b from-slate-900 via-gray-900 to-black py-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto  relative">
        <TrendingHeader />
        <TrendingGrid games={trendingGames} />
      </div>
    </div>
  );
};

const TrendingHeader = () => {
  return (
    <div className="flex items-center mb-6 sm:mb-8">
      <div className="relative">
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-orange-300 via-yellow-400 to-orange-300 bg-clip-text text-transparent">
          Trending Games
        </h2>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
      </div>
      <div className="ml-4 sm:ml-6 h-px bg-gradient-to-r from-orange-400 via-yellow-400 to-transparent flex-1 max-w-60"></div>
    </div>
  );
};

const TrendingGrid = ({ games }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current.children,
        { opacity: 0, y: 30, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out"
        }
      );
    }
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3  gap-3 sm:gap-4 "
    >
      {games.map((game) => (
        <TrendingGameCard 
          key={game.id} 
          game={game} 
        />
      ))}
    </div>
  );
};

const TrendingGameCard = ({ game }) => {
  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (isMobile) return;
    setIsHovered(true);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1.05,
        y: -8,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(cardRef.current.querySelector('.gif-overlay'), {
        opacity: 0,
        duration: 0.3
      });
    }
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    setIsHovered(false);
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(cardRef.current.querySelector('.gif-overlay'), {
        opacity: 1,
        duration: 0.3
      });
    }
  };

  return (
    <div 
      ref={cardRef}
      className="relative group cursor-pointer h-48 sm:h-52 md:h-56 lg:h-64"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden relative">
        
        {/* GIF Background - Full visibility */}
        <div className="absolute inset-0">
          <img 
            src={game.image} 
            alt={game.title}
            className="w-full h-full object-cover"
          />
          
          {/* Subtle dark overlay for text readability */}
          <div className="gif-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
        </div>

        {/* Glass morphism border */}
        <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-orange-400/30"></div>

        {/* Premium glow effect on hover */}
        <div className={`absolute -inset-1 rounded-2xl sm:rounded-3xl transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-orange-400/20 via-yellow-400/20 to-orange-400/20 blur-sm"></div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-2 sm:top-3 left-2 sm:left-3">
          <div className="px-2 sm:px-3 py-1 sm:py-1.5 bg-black/40 backdrop-blur-md rounded-full border border-orange-400/30">
            <span className="text-orange-200 text-xs font-medium uppercase tracking-wider">
              {game.category}
            </span>
          </div>
        </div>

        {/* Game Icon */}
        <div className="absolute top-2 sm:top-3 right-2 sm:right-3">
          <div className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
            bg-orange-500/20 backdrop-blur-md rounded-xl sm:rounded-2xl flex items-center justify-center
            border border-orange-400/30 transition-all duration-300 ${
            isHovered ? 'bg-orange-500/30 scale-110' : ''
          }`}>
            <span className="text-lg sm:text-xl md:text-2xl">
              {game.icon}
            </span>
          </div>
        </div>

        {/* Special Live Indicator for Live Prediction */}
        {game.title === 'LIVE PREDICTION' && (
          <div className="absolute top-2 sm:top-3 right-12 sm:right-16 md:right-20">
            <div className="flex items-center space-x-1 sm:space-x-2 bg-red-500/90 px-2 sm:px-3 py-1 rounded-full">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-bold">LIVE</span>
            </div>
          </div>
        )}

        {/* Content Area */}
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
          <div className="space-y-2 sm:space-y-3">
            
            {/* Title and Subtitle */}
            <div>
              <h3 className="text-white font-bold uppercase leading-tight text-sm sm:text-base md:text-lg lg:text-xl">
                {game.title}
              </h3>
              <p className="text-orange-200/80 text-xs sm:text-sm mt-1 hidden sm:block">
                {game.subtitle}
              </p>
            </div>

            {/* Action Row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-gradient-to-br from-orange-400/20 to-yellow-400/20 
                      rounded-full border border-orange-300/30 flex items-center justify-center">
                      <span className="text-xs text-orange-200/80">👤</span>
                    </div>
                  ))}
                </div>
                <span className="text-orange-200/60 text-xs sm:text-sm font-medium hidden sm:inline">2.1k</span>
              </div>

              {/* Play Button */}
              <button className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12
                bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 rounded-full flex items-center justify-center 
                transition-all duration-300 hover:scale-110 shadow-lg">
                <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white ml-0.5" 
                  fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Hover Play Overlay - Only on desktop */}
        {!isMobile && isHovered && (
          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center 
            transition-all duration-300 rounded-2xl sm:rounded-3xl">
            <div className="bg-orange-500/20 border border-orange-400/30 rounded-2xl px-6 py-3 backdrop-blur-md
              shadow-2xl transform transition-all duration-200 hover:scale-105">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-bold text-lg">Play Now</span>
              </div>
            </div>
          </div>
        )}

        {/* Corner Accent Lines */}
        <div className="absolute top-0 left-0 w-6 h-6 sm:w-8 sm:h-8 border-l-2 border-t-2 border-orange-400/30 rounded-tl-2xl sm:rounded-tl-3xl"></div>
        <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 border-r-2 border-b-2 border-orange-400/30 rounded-br-2xl sm:rounded-br-3xl"></div>
      </div>
    </div>
  );
};

export default TrendingGamesSection;
