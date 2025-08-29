import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/auth';
import Swal from 'sweetalert2';
import Header from '../components/Header';
import Footer from '../components/Footer';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
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
      // Use the imported register function and pass the form data
      const data = await register({
        username: formData.username,
        email: formData.email,
        password: formData.password
      });

      // Handle successful registration - CHECK RESPONSE SUCCESS PROPERLY
      console.log('Registration response:', data);
      
      // Only proceed if backend response is successful
      if (data && data.success === true) {
        // Store the complete response in localStorage with key 'user'
        localStorage.setItem('user', JSON.stringify(data));

        // Also store token separately if it exists (for backward compatibility)
        if (data.token) {
          localStorage.setItem('authToken', data.token);
        }

        // Show success SweetAlert with personalized message
        await Swal.fire({
          title: 'Welcome to Stake Manual Online!',
          html: `
            <div class="text-left">
              <p><strong>Account created successfully!</strong></p>
              <p><strong>Your User ID:</strong> ${data.user?.userId || 'N/A'}</p>
              <p><strong>Username:</strong> ${data.user?.username || 'N/A'}</p>
              <p><strong>Starting Wallet:</strong> $${(data.user?.wallet || 0).toFixed(2)}</p>
            </div>
          `,
          icon: 'success',
          confirmButtonColor: '#f97316',
          confirmButtonText: 'Continue to Dashboard'
        });

        // Redirect to home page
        navigate('/');

      } else {
        // Backend returned error response
        throw new Error(data.message || 'Registration failed. Please try again.');
      }

    } catch (error) {
      // Handle registration error with SweetAlert
      console.error('Registration failed:', error);
      
      Swal.fire({
        title: 'Registration Failed',
        text: error.message || 'Something went wrong during registration. Please try again.',
        icon: 'error',
        confirmButtonColor: '#f97316',
        confirmButtonText: 'Try Again'
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
          {/* Register Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
              <p className="text-gray-400">Join us and start playing!</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Username Field */}
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Choose a username"
                />
              </div>

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
                    placeholder="Create a strong password"
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.723 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
                <div className="mt-2 text-xs text-gray-400">
                  Password should be at least 8 characters long
                </div>
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
                    Creating Account...
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
            </form>

            {/* Login Link */}
            <div className="text-center mt-8">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link
                  to="/login"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </div>

          {/* Footer Text */}
          <div className="text-center mt-8 text-gray-400 text-sm">
            <p>By creating an account, you agree to our Terms of Service and Privacy Policy</p>
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  );
};

export default RegisterPage;
