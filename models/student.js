const Student = (sequelize, DataTypes) => {
    const Student = sequelize.define("Student", {
      automaker: DataTypes.STRING,
      model: DataTypes.STRING,
      version: DataTypes.STRING,
      image: DataTypes.STRING,
      info: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Student',
    });
    return Student;
  };
  
  module.exports = Student;