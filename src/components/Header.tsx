import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Redirect user to login page after logout
  };

  return (
    <header style={{
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'flex-end',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <button
        onClick={handleLogout}
        style={{
          padding: '0.5rem 1rem',
          backgroundColor: '#d9534f',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </header>
  );
};

export {};
