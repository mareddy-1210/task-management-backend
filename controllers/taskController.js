const Task = require('../models/Task');

// CREATE TASK
exports.createTask = async (req, res) => {
  try {
    const { title, description, projectId, assignedTo } = req.body;
    const task = new Task({
      title,
      description,
      projectId,
      assignedTo,
      userId: req.user.id
    });
    await task.save();
    res.json({
      message: "Task created",
      task
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET TASKS
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.id })
    .populate('projectId')
    .populate('assignedTo');
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  try {
    const { title, description, status} = req.body;

    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      { title, description, status },
      { new: true }
    );

    res.json({
      message: "Task updated",
      task: updatedTask
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ ADD DELETE TASK HERE
exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);

    res.json({
      message: "Task deleted",
      task: deletedTask
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};