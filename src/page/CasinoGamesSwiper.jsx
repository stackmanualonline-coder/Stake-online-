import React from 'react';
import { TrendingUp } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../components/homePage.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import Simg1 from '../assets/Slotes/img_1.webp'
import Simg2 from '../assets/Slotes/img_2.webp'
import Simg3 from '../assets/Slotes/img_3.webp'
import Simg4 from '../assets/Slotes/img_4.webp'
import Simg5 from '../assets/Slotes/img_5.webp'
import Simg6 from '../assets/Slotes/img_6.webp'
import Simg7 from '../assets/Slotes/img_7.webp'
import Simg8 from '../assets/Slotes/img_8.webp'
import Simg9 from '../assets/Slotes/img_9.webp'
import Simg10 from '../assets/Slotes/img_10.webp'
import Simg11 from '../assets/Slotes/img_11.webp'
import Simg12 from '../assets/Slotes/img_12.webp'
import Simg13 from '../assets/Slotes/img_13.webp'
import Simg14 from '../assets/Slotes/img_14.webp'

import Rimg1 from '../assets/recomended section/LUCKY 5.jpeg'
import Rimg2 from '../assets/recomended section/ANDAR BAHAR.png'
import Rimg3 from '../assets/recomended section/BACCARAT.png'
import Rimg4 from '../assets/recomended section/MUFLIS TEENPATTI.png'
import Rimg5 from '../assets/recomended section/BOLLYWOOD CASINO.png'
import Rimg6 from '../assets/recomended section/DRAGON TIGER.png'
import Rimg7 from '../assets/recomended section/dRAGON TIGER 2.png'
import Rimg8 from '../assets/recomended section/INSTANT 2 CARDS TEENPATTI.png'
import Rimg9 from '../assets/recomended section/LUCKY.png'

import Cimg1 from '../assets/Casino/img1.webp';
import Cimg2 from '../assets/Casino/img_2.webp';
import Cimg3 from '../assets/Casino/img_3.webp';
import Cimg4 from '../assets/Casino/img_4.webp';
import Cimg5 from '../assets/Casino/img_17.webp';
import Cimg6 from '../assets/Casino/img_6.webp';
import Cimg7 from '../assets/Casino/img_7.webp';
import Cimg8 from '../assets/Casino/img_8.webp';
import Cimg9 from '../assets/Casino/img_9.webp';
import Cimg10 from '../assets/Casino/img_10.webp';
import Cimg11 from '../assets/Casino/img_11.webp';
import Cimg12 from '../assets/Casino/img_12.webp';
import Cimg13 from '../assets/Casino/img_13.webp';
import Cimg14 from '../assets/Casino/img_14.webp';
import Cimg15 from '../assets/Casino/img_15.webp';
import Cimg16 from '../assets/Casino/img_16.webp';


// import required modules
import { Autoplay, FreeMode, Mousewheel, Pagination } from 'swiper/modules';

const CasinoGamesSwiper = () => {
  // Recommended Games Data (matching the image)
  const recommendedGames = [
    { 
      name: 'LUCKY 5', 
      image: Rimg1, 
      category: 'Slots',
      isNew: false 
    },
    { 
      name: 'ANDAR BAHAR', 
      image: Rimg2, 
      category: 'Card Games',
      isNew: false 
    },
    { 
      name: 'BACCARAT', 
      image: Rimg3, 
      category: 'Card Games',
      isNew: false 
    },
    { 
      name: 'MUFLIS TEENPATTI', 
      image: Rimg4, 
      category: 'Card Games',
      badge: 'MACES GAMING'
    },
    { 
      name: 'BOLLYWOOD CASINO', 
      image: Rimg5, 
      category: 'Themed Games',
      isNew: false 
    },
    { 
      name: 'DRAGON TIGER', 
      image: Rimg6, 
      category: 'Card Games',
      badge: 'MACES GAMING'
    },
    { 
      name: 'DRAGON TIGER 2', 
      image: Rimg7, 
      category: 'Card Games',
      badge: 'MACES GAMING'
    },
    { 
      name: 'INSTANT 2 CARDS TEENPATTI', 
      image: Rimg8, 
      category: 'Card Games',
      badge: 'MACES GAMING'
    },
    { 
      name: 'LUCKY', 
      image:Rimg9 , 
      category: 'Slots',
      isNew: false 
    }
  ];

 


  const liveCasinoGames = [
    { 
      name: 'AUTO-ROULETTE', 
      image: Rimg1, 
      isLive: true 
    },
    { 
      name: 'CRAZY TIME', 
      image: Rimg2, 
      isLive: true 
    },
    { 
      name: 'DRAGON TIGER', 
      image: Rimg3, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING DICE', 
      image: Rimg4, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING ROULETTE', 
      image: Rimg5, 
      isLive: true 
    },
    { 
      name: 'RED DOOR ROULETTE', 
      image: Rimg6, 
      isLive: true 
    },
    { 
      name: 'SPEED BACCARAT A', 
      image: Rimg1, 
      isLive: true 
    },
    { 
      name: 'SUPER SIC BO', 
      image: Rimg2, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING', 
      image: Rimg3, 
      isLive: true 
    }
  ];

 
 const liveCasinoGames2 = [
    { 
      name: 'AUTO-ROULETTE', 
      image: Simg1, 
      isLive: true 
    },
    { 
      name: 'CRAZY TIME', 
      image: Simg2, 
      isLive: true 
    },
    { 
      name: 'DRAGON TIGER', 
      image: Simg3, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING DICE', 
      image: Simg4, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING ROULETTE', 
      image: Simg5, 
      isLive: true 
    },
    { 
      name: 'RED DOOR ROULETTE', 
      image: Simg6, 
      isLive: true 
    },
    { 
      name: 'SPEED BACCARAT A', 
      image: Simg12, 
      isLive: true 
    },
    { 
      name: 'SUPER SIC BO', 
      image: Simg8, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING', 
      image: Simg9, 
      isLive: true 
    }
  ];


 const liveCasinoGames3 = [
    { 
      name: 'AUTO-ROULETTE', 
      image: Cimg1, 
      isLive: true 
    },
    { 
      name: 'CRAZY TIME', 
      image: Cimg2, 
      isLive: true 
    },
    { 
      name: 'DRAGON TIGER', 
      image: Cimg3, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING DICE', 
      image: Cimg4, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING ROULETTE', 
      image: Cimg5, 
      isLive: true 
    },
    { 
      name: 'RED DOOR ROULETTE', 
      image: Cimg6, 
      isLive: true 
    },
    { 
      name: 'SPEED BACCARAT A', 
      image: Cimg7, 
      isLive: true 
    },
    { 
      name: 'SUPER SIC BO', 
      image: Cimg8, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING', 
      image: Cimg9, 
      isLive: true 
    }
  ];
 const liveCasinoGames4 = [
    { 
      name: 'AUTO-ROULETTE', 
      image: Cimg10, 
      isLive: true 
    },
    { 
      name: 'CRAZY TIME', 
      image: Cimg11, 
      isLive: true 
    },
    { 
      name: 'DRAGON TIGER', 
      image: Cimg12, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING DICE', 
      image: Cimg14, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING ROULETTE', 
      image: Cimg14, 
      isLive: true 
    },
    { 
      name: 'RED DOOR ROULETTE', 
      image: Cimg15, 
      isLive: true 
    },
    { 
      name: 'SPEED BACCARAT A', 
      image: Cimg15, 
      isLive: true 
    },
    { 
      name: 'SUPER SIC BO', 
      image: Cimg2, 
      isLive: true 
    },
    { 
      name: 'LIGHTNING', 
      image: Cimg5, 
      isLive: true 
    }
  ];






  return (
    <>
      {/* Your existing Hero Banners code */}
      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* ... existing hero banners ... */}
      </div>

      {/* Your existing Sports Section */}
      <div className="mb-8">
        {/* ... existing sports section ... */}
      </div>

      {/* Your existing Top Matches */}
      <div className="mb-8">
        {/* ... existing top matches section ... */}
      </div>

      {/* NEW: Recommended Games Section - Matching the Image */}
      <div className="mb-8">
   <div className="flex items-center mb-6 sm:mb-8">
      <div className="relative">
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
          Recommended Games

        </h2>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>
      <div className="ml-4 sm:ml-6 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent flex-1 max-w-60"></div>
    </div>     
       <div className="grid">
      <Swiper
                  slidesPerView={2.5}
                  spaceBetween={15}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  simulateTouch={true}
                  grabCursor={true}
                  touchRatio={1}
                  touchAngle={45}
                  allowTouchMove={true}
                  loop={true}
                  freeMode={true}
                  // Mouse wheel and trackpad support
                  mousewheel={{
                    enabled: true,
                    forceToAxis: true, // Forces scroll to swiper axis (horizontal)
                    sensitivity: 1, // Adjust sensitivity (0.1 - 2)
                    thresholdDelta: 50, // Minimum delta to trigger slide change
                  }}
                  breakpoints={{
                    480: { slidesPerView: 3, spaceBetween: 12 },
                    640: { slidesPerView: 4, spaceBetween: 15 },
                    768: { slidesPerView: 5, spaceBetween: 16 },
                    1024: { slidesPerView: 6, spaceBetween: 18 },
                    1280: { slidesPerView: 8, spaceBetween: 20 },
                  }}
                  modules={[FreeMode, Autoplay, Mousewheel]}
                  className="sportsSwiper"
                >

            {recommendedGames.map((game, index) => (
              <SwiperSlide key={index} className='mySwiper2'>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group">
                  {/* Game Image */}
                  <div className="relative h-32 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Badge for special games */}
                    {game.badge && (
                      <div className="absolute top-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                        {game.badge}
                      </div>
                    )}
                    {/* Live indicator */}
                    {game.isLive && (
                      <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        LIVE
                      </div>
                    )}
                  </div>
                  
                  {/* Game Name */}
                  
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* NEW: Live Casino Games Section - Matching the Image */}
      <div className="mb-8">
   <div className="flex items-center mb-6 sm:mb-8">
      <div className="relative">
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
         Live Casino Games

        </h2>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>
      <div className="ml-4 sm:ml-6 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent flex-1 max-w-60"></div>
    </div>        <div className="grid">
     <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            simulateTouch={true}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            allowTouchMove={true}
            loop={true}
            freeMode={true}
            // Mouse wheel and trackpad support
            mousewheel={{
              enabled: true,
              forceToAxis: true, // Forces scroll to swiper axis (horizontal)
              sensitivity: 1, // Adjust sensitivity (0.1 - 2)
              thresholdDelta: 50, // Minimum delta to trigger slide change
            }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 12 },
              640: { slidesPerView: 4, spaceBetween: 15 },
              768: { slidesPerView: 5, spaceBetween: 16 },
              1024: { slidesPerView: 6, spaceBetween: 18 },
              1280: { slidesPerView: 8, spaceBetween: 20 },
            }}
            modules={[FreeMode, Autoplay, Mousewheel]}
            className="sportsSwiper"
          >


            {liveCasinoGames.map((game, index) => (
              <SwiperSlide key={index} className='mySwiper2'>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group">
                  {/* Game Image */}
                  <div className="relative h-32 bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Live indicator - always shown for live games */}
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      LIVE
                    </div>
                  </div>
                  
                  {/* Game Name */}
                  
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* NEW: Live Casino Games Section - Matching the Image */}
      <div className="mb-8">
   <div className="flex items-center mb-6 sm:mb-8">
      <div className="relative">
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
         Slots Games
        </h2>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>
      <div className="ml-4 sm:ml-6 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent flex-1 max-w-60"></div>
    </div>        <div className="grid">
<Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            simulateTouch={true}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            allowTouchMove={true}
            loop={true}
            freeMode={true}
            // Mouse wheel and trackpad support
            mousewheel={{
              enabled: true,
              forceToAxis: true, // Forces scroll to swiper axis (horizontal)
              sensitivity: 1, // Adjust sensitivity (0.1 - 2)
              thresholdDelta: 50, // Minimum delta to trigger slide change
            }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 12 },
              640: { slidesPerView: 4, spaceBetween: 15 },
              768: { slidesPerView: 5, spaceBetween: 16 },
              1024: { slidesPerView: 6, spaceBetween: 18 },
              1280: { slidesPerView: 8, spaceBetween: 20 },
            }}
            modules={[FreeMode, Autoplay, Mousewheel]}
            className="sportsSwiper"
          >
            {liveCasinoGames2.map((game, index) => (
              <SwiperSlide key={index} className='mySwiper2'>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group">
                  {/* Game Image */}
               <div className="relative h-40 sm:h-48 bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
  <img 
    src={game.image} 
    alt={game.name}
    className="w-full h-full object-cover"
    onError={(e) => {
      e.target.style.display = 'none';
    }}
  />
</div>
    
                  
                  {/* Game Name */}
                  
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <div className="mb-8">
     <div className="flex items-center mb-6 sm:mb-8">
      <div className="relative">
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
         Casino Lobby
        </h2>
        <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      </div>
      <div className="ml-4 sm:ml-6 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent flex-1 max-w-60"></div>
    </div>
        <div className="grid">
    <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            simulateTouch={true}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            allowTouchMove={true}
            loop={true}
            freeMode={true}
            // Mouse wheel and trackpad support
            mousewheel={{
              enabled: true,
              forceToAxis: true, // Forces scroll to swiper axis (horizontal)
              sensitivity: 1, // Adjust sensitivity (0.1 - 2)
              thresholdDelta: 50, // Minimum delta to trigger slide change
            }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 12 },
              640: { slidesPerView: 4, spaceBetween: 15 },
              768: { slidesPerView: 5, spaceBetween: 16 },
              1024: { slidesPerView: 6, spaceBetween: 18 },
              1280: { slidesPerView: 8, spaceBetween: 20 },
            }}
            modules={[FreeMode, Autoplay, Mousewheel]}
            className="sportsSwiper"
          >

            {liveCasinoGames3.map((game, index) => (
              <SwiperSlide key={index} className='mySwiper2'>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group">
                  {/* Game Image */}
                  <div className="relative h-32 bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Live indicator - always shown for live games */}
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      LIVE
                    </div>
                  </div>
                  
                  {/* Game Name */}
                  
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
         <div className="grid mt-4">
   <Swiper
            slidesPerView={2.5}
            spaceBetween={15}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            simulateTouch={true}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            allowTouchMove={true}
            loop={true}
            freeMode={true}
            // Mouse wheel and trackpad support
            mousewheel={{
              enabled: true,
              forceToAxis: true, // Forces scroll to swiper axis (horizontal)
              sensitivity: 1, // Adjust sensitivity (0.1 - 2)
              thresholdDelta: 50, // Minimum delta to trigger slide change
            }}
            breakpoints={{
              480: { slidesPerView: 3, spaceBetween: 12 },
              640: { slidesPerView: 4, spaceBetween: 15 },
              768: { slidesPerView: 5, spaceBetween: 16 },
              1024: { slidesPerView: 6, spaceBetween: 18 },
              1280: { slidesPerView: 8, spaceBetween: 20 },
            }}
            modules={[FreeMode, Autoplay, Mousewheel]}
            className="sportsSwiper"
          >

            {liveCasinoGames4.map((game, index) => (
              <SwiperSlide key={index} className='mySwiper2'>
                <div className="relative bg-gray-800 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-200 group">
                  {/* Game Image */}
                  <div className="relative h-32 bg-gradient-to-br from-red-600 to-purple-600 flex items-center justify-center">
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    {/* Live indicator - always shown for live games */}
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                      LIVE
                    </div>
                  </div>
                  
                  {/* Game Name */}
                  
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

     
    </>
  );
};

export default CasinoGamesSwiper;
