const Task = require('../models/Task');
exports.getDashboard = async (req, res) => {
  try {
    const total = await Task.countDocuments({ userId: req.user.id });
    const completed = await Task.countDocuments({ userId: req.user.id, status: "completed" });
    const pending = await Task.countDocuments({ userId: req.user.id, status: "pending" });
    res.json({
      total,
      completed,
      pending
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};