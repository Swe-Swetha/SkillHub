import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import pool from '../config/db.js';

const router = express.Router();

// Get all skills
router.get('/', async (req, res) => {
  try {
    const [skills] = await pool.query('SELECT * FROM Skills');
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search skills
router.get('/search', async (req, res) => {
  try {
    const { q } = req.query;
    const [skills] = await pool.query(
      'SELECT * FROM Skills WHERE SkillName LIKE ? OR Description LIKE ?',
      [`%${q}%`, `%${q}%`]
    );
    res.json(skills);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get skill details with quiz
router.get('/:id', async (req, res) => {
  try {
    const [skill] = await pool.query(
      'SELECT * FROM Skills WHERE SkillID = ?',
      [req.params.id]
    );

    if (!skill[0]) {
      return res.status(404).json({ message: 'Skill not found' });
    }

    // Get associated quiz
    const [quiz] = await pool.query(
      'SELECT * FROM Quizzes WHERE SkillID = ?',
      [req.params.id]
    );

    if (quiz[0]) {
      const [questions] = await pool.query(
        'SELECT * FROM Questions WHERE QuizID = ?',
        [quiz[0].QuizID]
      );

      for (const question of questions) {
        const [options] = await pool.query(
          'SELECT * FROM Answer_Options WHERE QuestionID = ?',
          [question.QuestionID]
        );
        question.options = options;
      }

      quiz[0].questions = questions;
    }

    res.json({
      ...skill[0],
      quiz: quiz[0] || null
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;