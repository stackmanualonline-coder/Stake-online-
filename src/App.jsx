import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UltraWinSite from './page/UltraWinSite '
import { Routes, Route, Navigate } from 'react-router-dom';
// ProtectedRoute component
function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('authToken');
  const role = localStorage.getItem('role');
  if ( role === 'admin') {
    return children;
  }
  return <Navigate to="/login" replace />;
}
import LoginPage from './page/LoginPage'
import RegisterPage from './page/Signup'
import AdminLoginPage from './page/AdminLoginPage '
import AllUseers from './page/AllUseers'

// Placeholder components




function App() {
  return (

      <Routes>
        <Route path="/" element={<UltraWinSite />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin/users" element={
          <ProtectedRoute>
            <AllUseers />
          </ProtectedRoute>
        } />
      </Routes>
 
  );
}

export default App
