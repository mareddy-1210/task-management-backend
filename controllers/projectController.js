const Project = require('../models/Project');

// CREATE PROJECT
exports.createProject = async (req, res) => {
  try {
    const { name, description } = req.body;

    const project = new Project({
      name,
      description,
      owner: req.user.id,
      members: [req.user.id]
    });

    await project.save();

    res.json({
      message: "Project created",
      project
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};