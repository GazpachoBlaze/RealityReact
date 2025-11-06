import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './components/PrivateRoute'; // You need to create this or inline the logic
import { Registration } from './pages/Registration';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { Header } from './components/Header';

export const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />

          {/* Protected Route with Header */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Header />
                <Home />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};


export default App;
