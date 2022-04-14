'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      image: {
        allowNull: true,
        type: Sequelize.STRING
      },
      age: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      monday_practice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      thursday_practice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      wednesday_practice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      tuesday_practice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      friday_practice: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};