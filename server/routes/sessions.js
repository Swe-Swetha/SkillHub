import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import pool from '../config/db.js';

const router = express.Router();

// Create a new session request
router.post('/', verifyToken, async (req, res) => {
  try {
    const { teacherUserId, skillId, scheduledDateTime } = req.body;
    
    // Check if learner has enough SkillBucks
    const [learner] = await pool.query(
      'SELECT SkillBucksBalance FROM Users WHERE UserID = ?',
      [req.user.id]
    );

    if (learner[0].SkillBucksBalance < 1) {
      return res.status(400).json({ message: 'Insufficient SkillBucks' });
    }

    const [result] = await pool.query(
      `INSERT INTO Sessions (
        TeacherUserID, LearnerUserID, SkillID, 
        RequestDateTime, ScheduledDateTime, Status
      ) VALUES (?, ?, ?, NOW(), ?, 'pending')`,
      [teacherUserId, req.user.id, skillId, scheduledDateTime]
    );

    res.status(201).json({
      sessionId: result.insertId,
      message: 'Session request created successfully'
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Accept/Decline session request
router.put('/:id', verifyToken, async (req, res) => {
  try {
    const { status, googleMeetLink } = req.body;
    const sessionId = req.params.id;

    const [session] = await pool.query(
      'SELECT * FROM Sessions WHERE SessionID = ? AND TeacherUserID = ?',
      [sessionId, req.user.id]
    );

    if (!session[0]) {
      return res.status(404).json({ message: 'Session not found' });
    }

    if (status === 'accepted') {
      await pool.query(
        'UPDATE Sessions SET Status = ?, GoogleMeetLink = ? WHERE SessionID = ?',
        [status, googleMeetLink, sessionId]
      );
    } else if (status === 'declined') {
      await pool.query(
        'UPDATE Sessions SET Status = ? WHERE SessionID = ?',
        [status, sessionId]
      );
    }

    res.json({ message: `Session ${status} successfully` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Complete session and transfer SkillBucks
router.put('/:id/complete', verifyToken, async (req, res) => {
  try {
    const sessionId = req.params.id;
    const connection = await pool.getConnection();

    try {
      await connection.beginTransaction();

      const [session] = await connection.query(
        'SELECT * FROM Sessions WHERE SessionID = ? AND (LearnerUserID = ? OR TeacherUserID = ?)',
        [sessionId, req.user.id, req.user.id]
      );

      if (!session[0]) {
        return res.status(404).json({ message: 'Session not found' });
      }

      if (session[0].Status === 'completed') {
        return res.status(400).json({ message: 'Session already completed' });
      }

      // Transfer SkillBucks
      await connection.query(
        'UPDATE Users SET SkillBucksBalance = SkillBucksBalance - 1 WHERE UserID = ?',
        [session[0].LearnerUserID]
      );

      await connection.query(
        'UPDATE Users SET SkillBucksBalance = SkillBucksBalance + 1 WHERE UserID = ?',
        [session[0].TeacherUserID]
      );

      // Update session status
      await connection.query(
        'UPDATE Sessions SET Status = ?, ActualEndTime = NOW() WHERE SessionID = ?',
        ['completed', sessionId]
      );

      await connection.commit();
      res.json({ message: 'Session completed successfully' });
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

// Get user's sessions
router.get('/', verifyToken, async (req, res) => {
  try {
    const [sessions] = await pool.query(
      `SELECT s.*, 
        t.Username as TeacherName, 
        l.Username as LearnerName,
        sk.SkillName
       FROM Sessions s
       JOIN Users t ON s.TeacherUserID = t.UserID
       JOIN Users l ON s.LearnerUserID = l.UserID
       JOIN Skills sk ON s.SkillID = sk.SkillID
       WHERE s.TeacherUserID = ? OR s.LearnerUserID = ?
       ORDER BY s.RequestDateTime DESC`,
      [req.user.id, req.user.id]
    );

    res.json(sessions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;