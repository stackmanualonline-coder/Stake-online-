import React, { useState, useEffect } from 'react';
import { getAllUsers } from '../api/auth';
import { useNavigate } from 'react-router-dom';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const [usersPerPage] = useState(10);  // Set users per page to 10


  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);  // Fetch users whenever the page changes

  const handleLogout = () => {
    localStorage.removeItem('role');
    localStorage.removeItem('adminToken');
    navigate("/admin/login")
    
  };

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await getAllUsers({ page: currentPage, limit: usersPerPage });
      if (response.success) {
        setUsers(response.users);
        setTotalUsers(response.totalUsers);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getRoleBadgeColor = (role) => {
    switch (role) {
      case 'admin':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'moderator':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  // Pagination logic
  const pageCount = Math.ceil(totalUsers / usersPerPage);  // Calculate total number of pages

  const changePage = (page) => {
    if (page >= 1 && page <= pageCount) {
      setCurrentPage(page);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 text-center">
            <h2 className="text-red-400 text-xl font-semibold mb-2">Error Loading Users</h2>
            <p className="text-gray-400">{error}</p>
            <button
              onClick={fetchUsers}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <button
            onClick={handleLogout}
            className="px-4 py-2 mx-2 text-red-500 border border-gray-600 rounded-lg hover:bg-gray-600 disabled:opacity-50"
          >
            Logout
          </button>
      <div className="max-w-7xl mx-auto ">


         <div className="mb-6 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <div className="text-gray-400 text-sm">Total Users</div>
            <div className="text-white text-2xl font-bold">{totalUsers}</div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <div className="text-gray-400 text-sm">Verified Users</div>
            <div className="text-green-400 text-2xl font-bold">
              {users.filter(user => user.isVerified).length}
            </div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <div className="text-gray-400 text-sm">Admin Users</div>
            <div className="text-red-400 text-2xl font-bold">
              {users.filter(user => user.role === 'admin').length}
            </div>
          </div>
          <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
            <div className="text-gray-400 text-sm">Total Wallet Balance</div>
            <div className="text-orange-400 text-2xl font-bold">
              ${users.reduce((sum, user) => sum + (user.wallet || 0), 0).toFixed(2)}
            </div>
          </div>
        </div>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">All Users</h1>
              <p className="text-gray-400">Manage and view all registered users</p>
            </div>
            <div className="bg-slate-800/50 px-4 py-2 rounded-lg border border-slate-700">
              <span className="text-gray-400">Total Users: </span>
              <span className="text-orange-400 font-semibold">{totalUsers}</span>
            </div>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-700/50 border-b border-slate-600">
                <tr>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">User</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">User ID</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">Email</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">Wallet</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">Role</th>
                  <th className="text-left py-4 px-6 text-gray-300 font-semibold">Joined</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr 
                    key={user.id} 
                    className={`border-b border-slate-600/50 hover:bg-slate-700/30 transition-colors ${
                      index % 2 === 0 ? 'bg-slate-800/20' : 'bg-slate-800/10'
                    }`}
                  >
                    {/* User Info */}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                          {user.username.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <p className="text-white font-medium">{user.username}</p>
                          <p className="text-gray-400 text-sm">ID: {user.id.slice(-8)}</p>
                        </div>
                      </div>
                    </td>

                    {/* User ID */}
                    <td className="py-4 px-6">
                      <span className="bg-slate-700/50 text-orange-400 px-3 py-1 rounded-full text-sm font-mono">
                        {user.userId || 'N/A'}
                      </span>
                    </td>

                    {/* Email */}
                    <td className="py-4 px-6">
                      <p className="text-gray-300">{user.email}</p>
                    </td>

                    {/* Wallet */}
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-1">
                        <span className="text-green-400 font-semibold">
                          ${(user.wallet || 0).toFixed(2)}
                        </span>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getRoleBadgeColor(user.role)}`}>
                        {user.role?.toUpperCase() || 'USER'}
                      </span>
                    </td>

                    {/* Joined Date */}
                    <td className="py-4 px-6">
                      <p className="text-gray-300 text-sm">{formatDate(user.createdAt)}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {users.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-lg mb-2">No users found</div>
              <p className="text-gray-500">Users will appear here once they register</p>
            </div>
          )}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => changePage(currentPage - 1)}
            className="px-4 py-2 mx-2 text-gray-500 border border-gray-600 rounded-lg hover:bg-gray-600 disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span className="px-4 py-2 mx-2 text-gray-300">
            Page {currentPage} of {pageCount}
          </span>
          <button
            onClick={() => changePage(currentPage + 1)}
            className="px-4 py-2 mx-2 text-gray-500 border border-gray-600 rounded-lg hover:bg-gray-600 disabled:opacity-50"
            disabled={currentPage === pageCount}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
