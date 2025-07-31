import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await axios.get('/api/posts');
        setPosts(data);
        setError(null);
      } catch (error) {
        console.error('Could not fetch posts', error);
        setError('Unable to load posts. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div>Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="hero-section">
          <h1>Welcome to BlogSphere</h1>
          <p>Discover amazing stories, insights, and ideas from our community of writers. Share your thoughts and connect with fellow bloggers in your personal sphere of influence.</p>
        </div>
        
        <div className="empty-state">
          <h3>⚠️ Connection Issue</h3>
          <p>{error}</p>
          <button 
            className="btn" 
            onClick={() => window.location.reload()}
            style={{ marginTop: '1rem' }}
          >
            🔄 Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="hero-section">
        <h1>Welcome to BlogSphere</h1>
        <p>Discover amazing stories, insights, and ideas from our community of writers. Share your thoughts and connect with fellow bloggers in your personal sphere of influence.</p>
      </div>
      
      <div>
        <h2 style={{ marginBottom: '2rem', fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)' }}>
          Latest Posts
        </h2>
        
        {posts.length === 0 ? (
          <div className="empty-state">
            <h3>No posts yet</h3>
            <p>Be the first to share your story! Create an account and start writing.</p>
          </div>
        ) : (
          posts.map((post) => (
            <div className="post" key={post._id}>
              <h2>{post.title}</h2>
              <div className="post-meta">
                By {post.author ? post.author.name : 'Unknown Author'} • {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="post-content">
                {post.content.length > 300 
                  ? `${post.content.substring(0, 300)}...` 
                  : post.content
                }
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;