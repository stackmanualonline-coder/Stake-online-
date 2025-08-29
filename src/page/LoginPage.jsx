import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../api/auth';
import Swal from 'sweetalert2';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Use the imported login function and pass the form data
      const data = await login({
        email: formData.email,
        password: formData.password
      });

      // Handle successful login
      console.log('Login successful:', data);
      
      // Store user data and token
      if (data.token) {
        localStorage.setItem('authToken', data.token);
      }
      if (data.user) {
        localStorage.setItem('user', JSON.stringify(data));
      }

      // Show success message with SweetAlert
      await Swal.fire({
        title: 'Welcome Back!',
        text: 'Login successful. Redirecting to dashboard...',
        icon: 'success',
        confirmButtonColor: '#f97316',
        timer: 1500,
        showConfirmButton: false
      });

      // Redirect to home page
      navigate('/');

    } catch (error) {
      // Handle login error with SweetAlert
      console.error('Login failed:', error);
      
      Swal.fire({
        title: 'Login Failed',
        text: error.message || 'Login failed. Please check your credentials.',
        icon: 'error',
        confirmButtonColor: '#f97316'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header/>
      <main className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-100px)]">
        <div className="w-full max-w-md">
          {/* Login Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Welcome Back!</h1>
              <p className="text-gray-400">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all pr-12"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  onClick={() => {
                    Swal.fire({
                      title: 'Forgot Password?',
                      text: 'Please contact support to reset your password.',
                      icon: 'info',
                      confirmButtonColor: '#f97316'
                    });
                  }}
                  className="text-sm text-orange-400 hover:text-orange-300 transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:transform-none disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Signing In...
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-8">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link
                  to="/register"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  Sign up here
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>By continuing, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default LoginPage;
