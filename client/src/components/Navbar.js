import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  // Check for user data in local storage to determine login state
  const user = localStorage.getItem('user');

  const handleLogout = () => {
    localStorage.removeItem('user');
    // Force a re-render and navigate to login
    navigate('/login');
    window.location.reload();
  };

  return (
    <nav>
      <h1>
        <Link to="/">BlogSphere</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {user ? (
          <>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <a href="#!" onClick={handleLogout}>
                Logout
              </a>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;