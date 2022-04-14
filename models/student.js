const Student = (sequelize, DataTypes) => {
  const Student = sequelize.define("Student", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    age: DataTypes.NUMBER,
    monday_practice: DataTypes.STRING,
    thursday_practice: DataTypes.STRING,
    wednesday_practice: DataTypes.STRING,
    tuesday_practice: DataTypes.STRING,
    friday_practice: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};
  
module.exports = Student;