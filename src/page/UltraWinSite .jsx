import React from 'react';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import CasinoGamesSwiper from './CasinoGamesSwiper';
import TrendingGamesSection from '../components/TrendingGamesSection';

const UltraWinSite = () => {
  return (
    <Layout>
      <HomePage />
      <TrendingGamesSection/>
      <CasinoGamesSwiper/>
    </Layout>
  );
};

export default UltraWinSite;