const express = require('express');
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask   // ✅ ADD THIS HERE
} = require('../controllers/taskController');

const authMiddleware = require('../middleware/authMiddleware');

// CREATE
router.post('/', authMiddleware, createTask);

// GET ALL
router.get('/', authMiddleware, getTasks);

// UPDATE
router.put('/:id', authMiddleware, updateTask);

// ✅ DELETE (ADD THIS LINE HERE)
router.delete('/:id', authMiddleware, deleteTask);

module.exports = router;