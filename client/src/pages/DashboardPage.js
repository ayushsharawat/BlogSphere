import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const DashboardPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const fetchUserPosts = async () => {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        const { data } = await axios.get('/api/posts/myposts', config);
        setPosts(data);
        setError(null);
      } catch (error) {
        console.error('Could not fetch user posts', error);
        setError('Unable to load your posts. Please check your connection.');
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [user, navigate]);

  const deleteHandler = async (id) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      const config = {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      };
      try {
        await axios.delete(`/api/posts/${id}`, config);
        setPosts(posts.filter((post) => post._id !== id));
      } catch (error) {
        console.error('Could not delete post', error);
      }
    }
  };

  if (loading) {
    return (
      <div className="loading">
        <div>Loading your posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <div className="dashboard-header">
          <div>
            <h1>My Dashboard</h1>
            <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
              Welcome back, {user?.user?.name || 'Writer'}!
            </p>
          </div>
          <Link to="/create-post" className="btn" style={{textDecoration: 'none'}}>
            ✍️ Create New Post
          </Link>
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
      <div className="dashboard-header">
        <div>
          <h1>My Dashboard</h1>
          <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
            Welcome back, {user?.user?.name || 'Writer'}! Manage your blog posts here.
          </p>
        </div>
        <Link to="/create-post" className="btn" style={{textDecoration: 'none'}}>
          ✍️ Create New Post
        </Link>
      </div>

      <div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          marginBottom: '2rem' 
        }}>
          <h2 style={{ 
            margin: 0, 
            fontSize: '1.5rem', 
            fontWeight: '700', 
            color: 'var(--text-primary)' 
          }}>
            Your Posts ({posts.length})
          </h2>
        </div>

        {posts.length === 0 ? (
          <div className="empty-state">
            <h3>No posts yet</h3>
            <p>Ready to share your ideas? Create your first blog post and start connecting with readers.</p>
            <Link to="/create-post" className="btn" style={{textDecoration: 'none', marginTop: '1rem'}}>
              Create Your First Post
            </Link>
          </div>
        ) : (
          posts.map((post) => (
            <div className="post" key={post._id}>
              <h2>{post.title}</h2>
              <div className="post-meta">
                Published on {new Date(post.createdAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })} • {post.content.length} characters
              </div>
              <div className="post-content">
                {post.content.length > 200 
                  ? `${post.content.substring(0, 200)}...` 
                  : post.content
                }
              </div>
              <div className="post-actions">
                <button className="btn btn-secondary" style={{ marginRight: '0.75rem' }}>
                  📝 Edit Post
                </button>
                <button onClick={() => deleteHandler(post._id)} className="btn btn-delete">
                  🗑️ Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DashboardPage;