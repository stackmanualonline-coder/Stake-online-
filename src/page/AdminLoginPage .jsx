import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { adminLogin } from '../api/auth';
import Swal from 'sweetalert2';

const AdminLoginPage = () => {
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
      // Use the imported adminLogin function instead of direct fetch
      const data = await adminLogin({
        email: formData.email,
        password: formData.password
      });

      // Handle successful admin login - CHECK RESPONSE SUCCESS PROPERLY
      console.log('Admin login successful:', data);
      
      // Only proceed if backend response is successful
      if (data && data.success === true) {
        // Store the complete admin response in localStorage with key 'user'
        localStorage.setItem('role', "admin");

        // Also store token separately for compatibility
        if (data.token) {
          localStorage.setItem('adminToken', data.token);
        }

        // Show success message with SweetAlert
        await Swal.fire({
          title: 'Welcome Admin!',
          html: `
            <div class="text-left">
              <p><strong>Admin login successful!</strong></p>
              <p><strong>Username:</strong> ${data.admin?.username || 'N/A'}</p>
              <p><strong>Email:</strong> ${data.admin?.email || 'N/A'}</p>
              <p><strong>Role:</strong> ${data.admin?.role || 'N/A'}</p>
            </div>
          `,
          icon: 'success',
          confirmButtonColor: '#dc2626',
          timer: 2000,
          showConfirmButton: false
        });

        // Navigate to admin users list
        navigate('/admin/users');

      } else {
        // Backend returned error response
        throw new Error(data.message || 'Admin login failed. Please try again.');
      }

    } catch (error) {
      // Handle admin login error with SweetAlert
      console.error('Admin login failed:', error);
      
      Swal.fire({
        title: 'Access Denied',
        text: error.message || 'Invalid admin credentials. Please try again.',
        icon: 'error',
        confirmButtonColor: '#dc2626'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Admin Header */}
      <header className="bg-slate-800/50 backdrop-blur-sm border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <div className="w-8 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center text-white font-bold text-sm">
                  A
                </div>
                <div className="w-8 h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-md flex items-center justify-center text-white font-bold text-sm">
                  K
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-2xl font-bold">Admin Panel</span>
                <span className="text-red-400 text-xs font-semibold tracking-wider">STAKE MANUAL ONLINE</span>
              </div>
            </div>

            {/* Back to Site */}
            <Link
              to="/"
              className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              ← Back to Site
            </Link>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-100px)]">
        <div className="w-full max-w-md">
          {/* Admin Login Card */}
          <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl border border-slate-700 p-8 shadow-2xl">
            {/* Admin Badge */}
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>ADMIN ACCESS</span>
              </div>
            </div>

            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
              <p className="text-gray-400">Access the administrative dashboard</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Admin Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="Enter admin email"
                />
              </div>

              {/* Password Field */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Admin Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all pr-12"
                    placeholder="Enter admin password"
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
              </div>

              {/* Security Notice */}
              <div className="bg-red-900/20 border border-red-700/50 rounded-lg p-3">
                <div className="flex items-center space-x-2 text-red-400 text-sm">
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L3.232 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span>Restricted area - Admin credentials required</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-slate-800 disabled:transform-none disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Authenticating...
                  </div>
                ) : (
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <span>Access Admin Panel</span>
                  </div>
                )}
              </button>
            </form>

            {/* User Login Link */}
            <div className="text-center mt-8">
              <p className="text-gray-400">
                Not an admin?{' '}
                <Link
                  to="/login"
                  className="text-orange-400 hover:text-orange-300 font-medium transition-colors"
                >
                  User login here
                </Link>
              </p>
            </div>
          </div>

          {/* Security Footer */}
          <div className="text-center mt-8 text-gray-400 text-sm">
            <p className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>Secure admin authentication</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminLoginPage;
