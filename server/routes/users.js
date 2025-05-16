import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import pool from '../config/db.js';

const router = express.Router();

// Get user profile
router.get('/profile', verifyToken, async (req, res) => {
  try {
    const [user] = await pool.query(
      'SELECT UserID, Username, Email, ProfileInfo, SkillBucksBalance, DateJoined FROM Users WHERE UserID = ?',
      [req.user.id]
    );

    if (!user[0]) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Get teachable skills
    const [teachableSkills] = await pool.query(
      `SELECT s.SkillID, s.SkillName, uts.ProficiencyLevel 
       FROM Skills s 
       JOIN User_Teachable_Skills uts ON s.SkillID = uts.SkillID 
       WHERE uts.UserID = ?`,
      [req.user.id]
    );

    // Get skills to learn
    const [skillsToLearn] = await pool.query(
      `SELECT s.SkillID, s.SkillName, uwls.DesiredProficiencyLevel 
       FROM Skills s 
       JOIN User_Want_To_Learn_Skills uwls ON s.SkillID = uwls.SkillID 
       WHERE uwls.UserID = ?`,
      [req.user.id]
    );

    // Get earned badges
    const [badges] = await pool.query(
      `SELECT b.BadgeID, b.BadgeName, b.IconURL, ub.DateEarned 
       FROM Badges b 
       JOIN User_Badges ub ON b.BadgeID = ub.BadgeID 
       WHERE ub.UserID = ?`,
      [req.user.id]
    );

    res.json({
      ...user[0],
      teachableSkills,
      skillsToLearn,
      badges
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user profile
router.put('/profile', verifyToken, async (req, res) => {
  try {
    const { username, profileInfo } = req.body;

    await pool.query(
      'UPDATE Users SET Username = ?, ProfileInfo = ? WHERE UserID = ?',
      [username, profileInfo, req.user.id]
    );

    res.json({ message: 'Profile updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update user skills
router.put('/skills', verifyToken, async (req, res) => {
  try {
    const { teachableSkills, skillsToLearn } = req.body;
    const connection = await pool.getConnection();

    try {
      await connection.beginTransaction();

      // Update teachable skills
      await connection.query(
        'DELETE FROM User_Teachable_Skills WHERE UserID = ?',
        [req.user.id]
      );

      for (const skill of teachableSkills) {
        await connection.query(
          'INSERT INTO User_Teachable_Skills (UserID, SkillID, ProficiencyLevel) VALUES (?, ?, ?)',
          [req.user.id, skill.skillId, skill.proficiencyLevel]
        );
      }

      // Update skills to learn
      await connection.query(
        'DELETE FROM User_Want_To_Learn_Skills WHERE UserID = ?',
        [req.user.id]
      );

      for (const skill of skillsToLearn) {
        await connection.query(
          'INSERT INTO User_Want_To_Learn_Skills (UserID, SkillID, DesiredProficiencyLevel) VALUES (?, ?, ?)',
          [req.user.id, skill.skillId, skill.desiredLevel]
        );
      }

      await connection.commit();
      res.json({ message: 'Skills updated successfully' });
    } catch (error) {
      await connection.rollback();
      throw error;
    } finally {
      connection.release();
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Search users by skills
router.get('/search', async (req, res) => {
  try {
    const { skill, type } = req.query;
    let query;
    let params = [`%${skill}%`];

    if (type === 'teacher') {
      query = `
        SELECT DISTINCT u.UserID, u.Username, u.ProfileInfo, uts.ProficiencyLevel,
          s.SkillName, s.SkillID
        FROM Users u
        JOIN User_Teachable_Skills uts ON u.UserID = uts.UserID
        JOIN Skills s ON uts.SkillID = s.SkillID
        WHERE s.SkillName LIKE ?
      `;
    } else {
      query = `
        SELECT DISTINCT u.UserID, u.Username, u.ProfileInfo, uwls.DesiredProficiencyLevel,
          s.SkillName, s.SkillID
        FROM Users u
        JOIN User_Want_To_Learn_Skills uwls ON u.UserID = uwls.UserID
        JOIN Skills s ON uwls.SkillID = s.SkillID
        WHERE s.SkillName LIKE ?
      `;
    }

    const [users] = await pool.query(query, params);
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;