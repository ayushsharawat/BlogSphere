import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/login', formData);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/dashboard');
      window.location.reload();
    } catch (err) {
      alert(err.response.data.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>🔐 Welcome Back to BlogSphere</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Sign in to your account to continue writing and sharing your stories
      </p>
      
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>📧 Email Address</label>
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={onChange} 
            required 
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>🔒 Password</label>
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={onChange} 
            required 
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>
      
      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem', 
        padding: '1rem 0', 
        borderTop: '1px solid var(--border-color)' 
      }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          Don't have an account? <Link to="/register" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>Create one here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;