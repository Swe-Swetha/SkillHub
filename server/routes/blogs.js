import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import pool from '../config/db.js';

const router = express.Router();

// Create blog post
router.post('/', verifyToken, async (req, res) => {
  try {
    const { title, content } = req.body;

    const [result] = await pool.query(
      `INSERT INTO Blog_Posts (
        AuthorUserID, Title, Content, 
        PublishedDate, LastModifiedDate
      ) VALUES (?, ?, ?, NOW(), NOW())`,
      [req.user.id, title, content]
    );

    res.status(201).json({
      postId: result.insertId,
      message: 'Blog post created successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get all blog posts
router.get('/', async (req, res) => {
  try {
    const [posts] = await pool.query(
      `SELECT bp.*, u.Username as AuthorName
       FROM Blog_Posts bp
       JOIN Users u ON bp.AuthorUserID = u.UserID
       ORDER BY bp.PublishedDate DESC`
    );

    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get single blog post
router.get('/:id', async (req, res) => {
  try {
    const [post] = await pool.query(
      `SELECT bp.*, u.Username as AuthorName
       FROM Blog_Posts bp
       JOIN Users u ON bp.AuthorUserID = u.UserID
       WHERE bp.PostID = ?`,
      [req.params.id]
    );

    if (!post[0]) {
      return res.status(404).json({ message: 'Post not found' });
    }

    res.json(post[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update blog post
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { title, content } = req.body;

    const [post] = await pool.query(
      'SELECT * FROM Blog_Posts WHERE PostID = ? AND AuthorUserID = ?',
      [req.params.id, req.user.id]
    );

    if (!post[0]) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await pool.query(
      `UPDATE Blog_Posts 
       SET Title = ?, Content = ?, LastModifiedDate = NOW()
       WHERE PostID = ?`,
      [title, content, req.params.id]
    );

    res.json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete blog post
router.delete('/:id', verifyToken, async (req, res) => {
  try {
    const [post] = await pool.query(
      'SELECT * FROM Blog_Posts WHERE PostID = ? AND AuthorUserID = ?',
      [req.params.id, req.user.id]
    );

    if (!post[0]) {
      return res.status(404).json({ message: 'Post not found' });
    }

    await pool.query('DELETE FROM Blog_Posts WHERE PostID = ?', [req.params.id]);

    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;