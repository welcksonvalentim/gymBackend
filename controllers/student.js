const { Student } = require('../models');

const getStudents = async (_req, res) => {
  try {
    const students = await Student.findAll();
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: 'Not Fount registered student' });
  }
};

module.exports = { getStudents };