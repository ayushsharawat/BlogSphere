import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/auth/register', formData);
      localStorage.setItem('user', JSON.stringify(res.data));
      navigate('/dashboard');
      window.location.reload();
    } catch (err) {
      alert(err.response.data.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>🚀 Join BlogSphere Community</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
        Create your account and start sharing your stories with the world
      </p>
      
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>👤 Full Name</label>
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={onChange} 
            required 
            placeholder="Enter your full name"
          />
        </div>
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
            placeholder="Create a strong password"
            minLength="6"
          />
          <small style={{ 
            color: 'var(--text-light)', 
            fontSize: '0.75rem', 
            marginTop: '0.25rem', 
            display: 'block' 
          }}>
            Password must be at least 6 characters long
          </small>
        </div>
        <button type="submit" className="btn" disabled={loading}>
          {loading ? 'Creating account...' : 'Create Account'}
        </button>
      </form>
      
      <div style={{ 
        textAlign: 'center', 
        marginTop: '2rem', 
        padding: '1rem 0', 
        borderTop: '1px solid var(--border-color)' 
      }}>
        <p style={{ color: 'var(--text-secondary)' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: '600' }}>Sign in here</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;