import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // redirect to login after logout
  };

  return (
    <header style={{ padding: '1rem', background: '#eee', display: 'flex', justifyContent: 'flex-end' }}>
      <button onClick={handleLogout}>Logout</button>
    </header>
  );
};
