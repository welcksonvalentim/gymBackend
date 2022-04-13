const { Student } = require('../models');

const getStudents = async (_req, res) => {
  try {
    const student = await Student.findAll();
    res.status(200).json(student);
  } catch (error) {
    res.status(404).json({ message: 'Not Fount student'});
  }
};

module.exports = { getStudents };