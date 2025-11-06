import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/forms.css'; // Make sure your styles are included

export const Registration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await auth.register(username, password);
      navigate('/login'); // After successful registration, redirect to login
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <label>
        Username:
        <input
          required
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>
      <button type="submit" disabled={loading}>
        {loading ? 'Registering...' : 'Register'}
      </button>
      {error && <div className="error-message">{error}</div>}
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </form>
  );
};


export {};