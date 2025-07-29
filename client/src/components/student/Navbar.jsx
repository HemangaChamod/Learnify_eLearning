import React, { useContext } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {
  const location = useLocation();
  const isCoursesListPage = location.pathname.includes('/course-list');
  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator');
        return;
      }

      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/educator/update-role`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (data.success) {
        toast.success(data.message);
        setIsEducator(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-md border-b border-gray-200 shadow-sm transition duration-300 ${
        isCoursesListPage ? 'bg-white/90' : 'bg-white/70'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16 py-4 flex items-center justify-between">
        {/* Logo */}
        <img
          src={assets.logo}
          alt="Logo"
          className="w-28 lg:w-32 cursor-pointer hover:scale-105 transition-transform duration-300"
          onClick={() => navigate('/')}
        />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          {user && (
            <>
              <button
                onClick={becomeEducator}
                className="hover:text-blue-600 transition-colors"
              >
                {isEducator ? 'Educator Dashboard' : 'Become Educator'}
              </button>
              <Link to="/my-enrollments" className="hover:text-blue-600 transition-colors">
                My Enrollments
              </Link>
            </>
          )}

          {user ? (
            <UserButton />
          ) : (
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition duration-200"
            >
              Create Account
            </button>
          )}
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-3">
          {user && (
            <>
              <button
                onClick={becomeEducator}
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                {isEducator ? 'Dashboard' : 'Become'}
              </button>
              <Link
                to="/my-enrollments"
                className="text-sm text-gray-600 hover:text-blue-600"
              >
                Enrollments
              </Link>
            </>
          )}
          {user ? (
            <UserButton />
          ) : (
            <button onClick={openSignIn}>
              <img src={assets.user_icon} alt="Sign In" className="w-6 h-6" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
