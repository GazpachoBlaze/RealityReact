import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../styles/forms.css'; // Import your CSS styles

export const Login = () => {
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
      await auth.login(username, password);
      navigate('/');
    } catch (err: any) {
      setError(err.message);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
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
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <div className="error-message">{error}</div>}
      <p>
        Not registered? <a href="/register">Register</a>
      </p>
    </form>
  );
};




export {};