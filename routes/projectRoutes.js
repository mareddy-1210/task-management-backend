const { isAdmin } = require('../middleware/roleMiddleware');
const express = require('express');
const router = express.Router();

const { createProject } = require('../controllers/projectController');
const authMiddleware = require('../middleware/authMiddleware');

// CREATE PROJECT
router.post('/', authMiddleware, isAdmin, createProject);

module.exports = router;