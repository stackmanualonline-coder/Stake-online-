import React, { useEffect, useState } from "react";
import { TrendingUp } from "lucide-react";
import CasinoGamesSwiper from "../page/CasinoGamesSwiper";
import { Swiper, SwiperSlide } from "swiper/react";

import cricketImg from "../assets/Sports/cricket.1d9c2d59.webp";
import footballImg from "../assets/Sports/football.2fdc311b.webp";
import tennisImg from "../assets/Sports/tennis.8553c42e.webp";
import kabaddiImg from "../assets/Sports/kabaddi.7f9dd034.webp";
import basketballImg from "../assets/Sports/binary.219a1f7d.webp";
import baseballImg from "../assets/Sports/baseball.6ab62b36.webp";
import greyhoundImg from "../assets/Sports/greyhound.33cb9e90.webp";
import dartsImg from "../assets/Sports/darts.7d14984e.webp";
import futsalImg from "../assets/Sports/futsal.e1f85b35.webp";
import horseraceImg from "../assets/Sports/horserace.36554b87.webp";
import rugbyImg from "../assets/Sports/rugby.cd558bdd.webp";
import tableTennisImg from "../assets/Sports/table-tennis.1ecd69f4.webp";
import volleyballImg from "../assets/Sports/volleyball.0ce3df92.webp";
// Lonch img
import Cimg1 from "../assets/Lonch/img_1.webp";
import Cimg2 from "../assets/Lonch/img_2.webp";
import Cimg3 from "../assets/Lonch/img_3.webp";
import Cimg4 from "../assets/Lonch/img_4.webp";
import Cimg5 from "../assets/Lonch/img_5.webp";
import Cimg6 from "../assets/Lonch/img_6.webp";
import Cimg7 from "../assets/Lonch/img_7.webp";
import Cimg8 from "../assets/Lonch/img_8.webp";
import Cimg9 from "../assets/Lonch/img_9.webp";
import Cimg10 from "../assets/Lonch/img_10.webp";
import Cimg11 from "../assets/Lonch/img_11.webp";
import Cimg12 from "../assets/Lonch/img_12.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./homePage.css";
import img1 from "../assets/HeroSection/img1.png";
import img2 from "../assets/HeroSection/img2.png";
import risimg1 from "../assets/HeroSection/resimg1.png";
import risimg2 from "../assets/HeroSection/resimg2.png";

// import required modules
import { Autoplay, FreeMode, Mousewheel, Pagination } from "swiper/modules";
import Banner from "./Banner";

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check on initial load
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();

    // Listen for window resize
    window.addEventListener("resize", checkIsMobile);
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  // Top Matches Data
  const topMatches = [
    {
      teams: [
        { label: "MO", color: "bg-blue-500" },
        { label: "BM", color: "bg-blue-600" },
        { label: "F", color: "bg-blue-700" },
      ],
      live: true,
      sport: "FOOTBALL",
      event: "English Community Shield",
      match: "Crystal Palace V Liverpool",
      time: "Today 07:30 PM",
      odds: ["5.90", "6.40", "4.70", "1.62", "1.63"],
    },
    {
      teams: [
        { label: "P", color: "bg-purple-500" },
        { label: "MO", color: "bg-blue-600" },
      ],
      live: false,
      sport: "CRICKET",
      event: "The Hundred - Womens",
      match: "The Hundred - Womens",
      time: "06 Aug 05:30 PM",
      odds: ["", ""],
    },
    {
      teams: [
        { label: "MO", color: "bg-blue-500" },
        { label: "BM", color: "bg-blue-600" },
      ],
      live: true,
      sport: "CRICKET",
      event: "International Twenty20 Matches",
      match: "Australia V South Africa",
      time: "Today 02:45 PM",
      odds: ["1.36", "1.37"],
    },
    {
      teams: [
        { label: "MO", color: "bg-blue-500" },
        { label: "BM", color: "bg-blue-600" },
      ],
      live: true,
      sport: "CRICKET",
      event: "International Twenty20 Matches",
      match: "Australia V South Africa",
      time: "Today 02:45 PM",
      odds: ["1.36", "1.37"],
    },
    {
      teams: [
        { label: "MC", color: "bg-sky-500" },
        { label: "CHE", color: "bg-blue-800" },
      ],
      live: true,
      sport: "FOOTBALL",
      event: "Premier League",
      match: "Manchester City V Chelsea",
      time: "Today 09:00 PM",
      odds: ["2.10", "3.40", "3.20", "1.85", "1.90"],
    },
    {
      teams: [
        { label: "IND", color: "bg-orange-500" },
        { label: "PAK", color: "bg-green-600" },
      ],
      live: false,
      sport: "CRICKET",
      event: "Asia Cup 2024",
      match: "India V Pakistan",
      time: "Tomorrow 02:30 PM",
      odds: ["1.45", "2.85"],
    },
    {
      teams: [
        { label: "LAL", color: "bg-purple-600" },
        { label: "GSW", color: "bg-yellow-500" },
      ],
      live: true,
      sport: "BASKETBALL",
      event: "NBA Regular Season",
      match: "Los Angeles Lakers V Golden State Warriors",
      time: "Today 11:30 PM",
      odds: ["1.95", "1.85", "2.10", "1.75"],
    },
    {
      teams: [
        { label: "RM", color: "bg-white" },
        { label: "BAR", color: "bg-red-600" },
      ],
      live: false,
      sport: "FOOTBALL",
      event: "La Liga",
      match: "Real Madrid V Barcelona",
      time: "Aug 15 08:15 PM",
      odds: ["2.25", "3.10", "3.40", "1.80", "2.00"],
    },
    {
      teams: [
        { label: "ENG", color: "bg-red-500" },
        { label: "AUS", color: "bg-yellow-600" },
      ],
      live: false,
      sport: "CRICKET",
      event: "Ashes Series",
      match: "England V Australia",
      time: "Aug 20 03:30 PM",
      odds: ["2.10", "1.75"],
    },
    {
      teams: [
        { label: "NOV", color: "bg-blue-600" },
        { label: "FED", color: "bg-red-500" },
      ],
      live: true,
      sport: "TENNIS",
      event: "US Open 2024",
      match: "Novak Djokovic V Roger Federer",
      time: "Today 06:00 PM",
      odds: ["1.55", "2.45"],
    },
    {
      teams: [
        { label: "PSG", color: "bg-blue-700" },
        { label: "MUN", color: "bg-red-600" },
      ],
      live: false,
      sport: "FOOTBALL",
      event: "Champions League",
      match: "Paris Saint-Germain V Manchester United",
      time: "Aug 18 12:45 AM",
      odds: ["2.05", "3.25", "3.50", "1.88", "1.92"],
    },
    {
      teams: [
        { label: "WI", color: "bg-red-700" },
        { label: "NZ", color: "bg-black" },
      ],
      live: true,
      sport: "CRICKET",
      event: "T20 World Cup",
      match: "West Indies V New Zealand",
      time: "Today 04:15 PM",
      odds: ["1.95", "1.85"],
    },
    {
      teams: [
        { label: "BOS", color: "bg-green-600" },
        { label: "MIA", color: "bg-red-500" },
      ],
      live: false,
      sport: "BASKETBALL",
      event: "NBA Playoffs",
      match: "Boston Celtics V Miami Heat",
      time: "Aug 22 09:30 PM",
      odds: ["1.70", "2.15", "1.90", "1.95"],
    },
    {
      teams: [
        { label: "ARG", color: "bg-sky-400" },
        { label: "BRA", color: "bg-yellow-400" },
      ],
      live: false,
      sport: "FOOTBALL",
      event: "Copa America Final",
      match: "Argentina V Brazil",
      time: "Aug 25 11:00 PM",
      odds: ["2.40", "2.80", "3.60", "1.85", "1.95"],
    },
    {
      teams: [
        { label: "SER", color: "bg-red-600" },
        { label: "NAD", color: "bg-green-500" },
      ],
      live: true,
      sport: "TENNIS",
      event: "Wimbledon 2024",
      match: "Serena Williams V Rafael Nadal",
      time: "Today 08:45 PM",
      odds: ["1.85", "1.95"],
    },
  ];

  const liveCasinoGames3 = [
    {
      name: "AUTO-ROULETTE",
      image: Cimg1,
      isLive: true,
    },
    {
      name: "CRAZY TIME",
      image: Cimg2,
      isLive: true,
    },
    {
      name: "DRAGON TIGER",
      image: Cimg3,
      isLive: true,
    },
    {
      name: "LIGHTNING DICE",
      image: Cimg4,
      isLive: true,
    },
    {
      name: "LIGHTNING ROULETTE",
      image: Cimg5,
      isLive: true,
    },
    {
      name: "RED DOOR ROULETTE",
      image: Cimg6,
      isLive: true,
    },
    {
      name: "SPEED BACCARAT A",
      image: Cimg7,
      isLive: true,
    },
    {
      name: "SUPER SIC BO",
      image: Cimg8,
      isLive: true,
    },
    {
      name: "LIGHTNING",
      image: Cimg9,
      isLive: true,
    },
    {
      name: "LIGHTNING",
      image: Cimg10,
      isLive: true,
    },
    {
      name: "LIGHTNING",
      image: Cimg11,
      isLive: true,
    },
    {
      name: "LIGHTNING",
      image: Cimg12,
      isLive: true,
    },
  ];

  return (
    <>
      {/* Hero Banners */}
  {/* Hero Banners */}
<div className="grid grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
  {/* First Hero Banner */}
  <div className="relative rounded-lg sm:rounded-2xl overflow-hidden h-40 sm:h-48 md:h-56 lg:h-55 bg-[#111827]">
    <img
      src={isMobile ? risimg1 : img1}
      alt="Hero Banner 1"
      className="w-full h-full object-cover transition-transform duration-300"
    />
  </div>
  {/* Second Hero Banner */}
  <div className="relative rounded-lg sm:rounded-2xl overflow-hidden h-40 sm:h-48 md:h-56 lg:h-55 bg-[#111827]">
    <img
      src={isMobile ? risimg2 : img2}
      alt="Hero Banner 2"
      className="w-full h-full object-cover transition-transform duration-300"
    />
  </div>
</div>


      {/* <Banner/> */}

      {/* Sports Section */}
      {/* Sports Section */}
      <div className="mb-3 mt-4">
        <div className="flex items-center mb-2 sm:mb-8">
          <div className="relative">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Sports
            </h2>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          <div className="ml-4 sm:ml-6 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent flex-1 max-w-60"></div>
        </div>{" "}
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
            {[
              {
                name: "KABADDI",
                icon: kabaddiImg,
                bgColor: "from-orange-500 to-orange-700",
              },
              {
                name: "BASKETBALL",
                icon: basketballImg,
                bgColor: "from-amber-500 to-orange-600",
              },
              {
                name: "BASEBALL",
                icon: baseballImg,
                bgColor: "from-gray-500 to-gray-700",
              },
              {
                name: "GREYHOUND",
                icon: greyhoundImg,
                bgColor: "from-amber-600 to-amber-800",
              },
              {
                name: "CRICKET",
                icon: cricketImg,
                bgColor: "from-red-500 to-red-700",
              },
              {
                name: "FOOTBALL",
                icon: footballImg,
                bgColor: "from-blue-500 to-blue-700",
              },
              {
                name: "TENNIS",
                icon: tennisImg,
                bgColor: "from-green-500 to-green-700",
              },
              {
                name: "VOLLEYBALL",
                icon: volleyballImg,
                bgColor: "from-yellow-500 to-yellow-700",
              },
              {
                name: "DARTS",
                icon: dartsImg,
                bgColor: "from-red-600 to-red-800",
              },
              {
                name: "FUTSAL",
                icon: futsalImg,
                bgColor: "from-blue-400 to-blue-600",
              },
              {
                name: "HORSERACE",
                icon: horseraceImg,
                bgColor: "from-gray-800 to-black",
              },
              {
                name: "RUGBY",
                icon: rugbyImg,
                bgColor: "from-indigo-500 to-indigo-700",
              },
              {
                name: "TABLE TENNIS",
                icon: tableTennisImg,
                bgColor: "from-cyan-500 to-cyan-700",
              },
            ].map((sport, index) => (
              <SwiperSlide key={index} className="mySwiper2">
                <div className="group relative">
                  {/* Card Container */}
                  <div
                    className="w-full min-w-[6rem] max-w-[8rem] aspect-[4/2] rounded-2xl overflow-hidden 
          cursor-pointer transform transition-all duration-300 ease-out
        
          shadow-lg border border-white/20 relative"
                  >
                    {/* Gradient Background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${sport.bgColor}`}
                    ></div>

                    {/* Darker overlay for better contrast */}
                    <div
                      className="absolute inset-0 bg-black/30 group-hover:bg-black/20 
            transition-colors duration-300"
                    ></div>

                    {/* Content Container */}
                    <div className="absolute inset-0 flex  items-center justify-center p-3 text-center ">
                      {/* Sport Icon */}
                      <div
                        className="text-3xl sm:text-4xl mb-2 transform transition-transform duration-300 
              group-hover:scale-110 drop-shadow-lg"
                      >
                        <img src={sport.icon} alt="" />
                      </div>

                      {/* Sport Name */}
                      <div
                        className="text-[0.65rem] sm:text-xs font-bold text-white uppercase tracking-wider 
              leading-tight drop-shadow-lg text-center transform transition-transform duration-300 
              group-hover:scale-105"
                      >
                        {sport.name}
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 
            transition-opacity duration-300"
                    ></div>

                    {/* Active Indicator for Popular Sports */}
                    {["CRICKET", "FOOTBALL", "TENNIS"].includes(sport.name) && (
                      <div
                        className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full 
              border-2 border-white shadow-lg  animate-pulse"
                      ></div>
                    )}

                    {/* Bottom Shine Effect */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t 
            from-white/20 to-transparent opacity-0 group-hover:opacity-100 
            transition-opacity duration-300"
                    ></div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-2 
          bg-white/50 rounded-full blur-md opacity-0 group-hover:opacity-60 
          transition-opacity duration-300"
                  ></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Top Matches */}
      <div className="mb-2">
        <div className="flex items-center mb-2 sm:mb-8">
          <div className="relative">
            <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              Top Matches
            </h2>
            <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          <div className="ml-4 sm:ml-6 h-px bg-gradient-to-r from-cyan-400 via-purple-400 to-transparent flex-1 max-w-60"></div>
        </div>{" "}
        <div className="grid">
          <Swiper
            slidesPerView={1.1}
            spaceBetween={15}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            freeMode={true}
            // Mouse wheel and trackpad support
            simulateTouch={true}
            grabCursor={true}
            touchRatio={1}
            touchAngle={45}
            allowTouchMove={true}
            mousewheel={{
              enabled: true,
              forceToAxis: true,
              sensitivity: 1,
              thresholdDelta: 50,
              releaseOnEdges: true,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1.5,
                spaceBetween: 15,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.5,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3.5,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode, Autoplay, Mousewheel]}
            className="mySwiper"
          >
            {topMatches.map((match, idx) => (
              <SwiperSlide key={idx} className="mySwiper2">
                <div className="group relative w-full max-w-80 h-full min-h-[300px] cursor-pointer">
                  {/* Card Container with background image */}
                  <div
                    className="relative h-full rounded-2xl overflow-hidden shadow-xl border border-white/10 
          transform transition-all duration-300 ease-out hover:scale-105 hover:shadow-2xl"
                  >
                    {/* Background Image based on sport */}
                    <div className="absolute inset-0">
                      <img
                        src={
                          match.sport === "FOOTBALL"
                            ? "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400&h=300&fit=crop&crop=center"
                            : match.sport === "CRICKET"
                            ? "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=300&fit=crop&crop=center"
                            : "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop&crop=center"
                        }
                        alt={match.sport}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "block";
                        }}
                      />
                      {/* Fallback gradient */}
                      <div
                        className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900"
                        style={{ display: "none" }}
                      ></div>
                    </div>

                    {/* Dark overlay for better readability */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/80 
            group-hover:from-black/60 group-hover:via-black/50 group-hover:to-black/70 
            transition-all duration-300"
                    ></div>

                    {/* Content Container */}
                    <div className="relative  h-full p-4 sm:p-6 flex flex-col">
                      {/* Top Section - Teams and Live Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          {match.teams.map((team, i) => (
                            <div
                              key={i}
                              className={`w-8 h-8 sm:w-9 sm:h-9 ${team.color} rounded-full flex items-center 
                      justify-center text-xs sm:text-sm font-bold text-white shadow-lg
                      border-2 border-white/20 backdrop-blur-sm`}
                            >
                              {team.label}
                            </div>
                          ))}
                        </div>
                        {match.live && (
                          <div
                            className="bg-red-500 px-3 py-1 rounded-full text-xs font-bold animate-pulse 
                  shadow-lg border border-red-400 text-white"
                          >
                            🔴 LIVE
                          </div>
                        )}
                      </div>

                      {/* Match Information - Flexible grow area */}
                      <div className="mb-4 flex-grow">
                        {/* Sport Badge */}
                        <div
                          className="inline-block bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full 
                text-xs font-bold text-white uppercase tracking-wider mb-3 border border-white/20"
                        >
                          {match.sport}
                        </div>

                        {/* Event */}
                        <div className="text-xs sm:text-sm mb-2 text-gray-300 font-medium">
                          {match.event}
                        </div>

                        {/* Match Title */}
                        <div
                          className="font-bold text-sm sm:text-base text-white mb-3 leading-tight 
                drop-shadow-lg"
                        >
                          {match.match}
                        </div>

                        {/* Time with icon */}
                        <div className="flex items-center text-xs text-gray-400">
                          <svg
                            className="w-4 h-4 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {match.time}
                        </div>
                      </div>

                      {/* Odds Section */}
                      <div className="mt-auto">
                        <div className="text-xs text-gray-400 mb-2 font-medium">
                          Betting Odds
                        </div>
                        <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                          {match.odds.map(
                            (odd, i) =>
                              odd && (
                                <div
                                  key={i}
                                  className={`px-3 py-2 rounded-lg text-xs sm:text-sm text-center font-bold 
                        cursor-pointer backdrop-blur-sm border transition-all duration-200
                        hover:scale-105 hover:shadow-lg ${
                          i % 2 === 0
                            ? "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 border-pink-400/50"
                            : "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 border-purple-400/50"
                        } text-white shadow-lg`}
                                >
                                  {odd}
                                </div>
                              )
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div
                      className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-white/5 to-transparent 
            rounded-bl-full"
                    ></div>
                    <div
                      className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent 
            rounded-tr-full"
                    ></div>

                    {/* Hover Glow Effect */}
                    <div
                      className="absolute inset-0 rounded-2xl bg-white opacity-0 group-hover:opacity-10 
            transition-opacity duration-300"
                    ></div>
                  </div>

                  {/* Bottom Glow Effect */}
                  <div
                    className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-3 
          bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full blur-md 
          opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  ></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* New Launch Games */}
      <div className="mb-4">
          <div className="flex items-center mb-6 sm:mb-8">
      <div className="relative">
        <h2 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
         New Launch

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
              <SwiperSlide key={index} className="mySwiper2">
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
    </>
  );
};

export default HomePage;
