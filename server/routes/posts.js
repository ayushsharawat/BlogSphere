const express = require('express');
const router = express.Router();
const {
  getAllPosts,
  createPost,
  deletePost,
  getUserPosts,
} = require('../controllers/postController');
const { protect } = require('../middleware/authMiddleware');

// Public route to get all posts
router.route('/').get(getAllPosts);

// Private routes that require a valid token
router.route('/').post(protect, createPost);
router.route('/myposts').get(protect, getUserPosts);
router.route('/:id').delete(protect, deletePost);

module.exports = router;