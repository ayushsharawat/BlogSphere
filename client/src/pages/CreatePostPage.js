import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const CreatePostPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  // This useEffect hook will protect the page
  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, [user, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    };
    try {
      await axios.post('/api/posts', { title, content }, config);
      navigate('/dashboard');
    } catch (error) {
      alert('Failed to create post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div style={{ marginBottom: '2rem' }}>
        <Link 
          to="/dashboard" 
          style={{ 
            color: 'var(--primary-color)', 
            textDecoration: 'none', 
            fontWeight: '600',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          ← Back to Dashboard
        </Link>
      </div>
      
      <div className="form-container" style={{ maxWidth: '800px' }}>
        <h2>✍️ Create New Post</h2>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
          Share your thoughts, ideas, and stories with the community
        </p>
        
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>📝 Post Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              required 
              placeholder="Enter an engaging title for your post"
              style={{ fontSize: '1.125rem' }}
            />
          </div>
          <div className="form-group">
            <label>📄 Content</label>
            <textarea 
              rows="12" 
              value={content} 
              onChange={(e) => setContent(e.target.value)} 
              required
              placeholder="Write your post content here... Tell your story, share your insights, or express your ideas."
              style={{ fontSize: '1rem', lineHeight: '1.6' }}
            ></textarea>
            <small style={{ 
              color: 'var(--text-light)', 
              fontSize: '0.75rem', 
              marginTop: '0.25rem', 
              display: 'block' 
            }}>
              {content.length} characters
            </small>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <Link 
              to="/dashboard" 
              className="btn btn-secondary" 
              style={{ textDecoration: 'none', flex: 1 }}
            >
              Cancel
            </Link>
            <button 
              type="submit" 
              className="btn" 
              disabled={loading || !title.trim() || !content.trim()}
              style={{ flex: 2 }}
            >
              {loading ? 'Publishing...' : '🚀 Publish Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePostPage;