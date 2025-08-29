import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UltraWinSite from './page/UltraWinSite '
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/LoginPage'
import RegisterPage from './page/Signup'

// Placeholder components




function App() {
  return (

      <Routes>
        <Route path="/" element={<UltraWinSite />} />
        <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegisterPage />} />
        
      </Routes>
 
  );
}

export default App
