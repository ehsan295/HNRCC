// models/projectEmployee.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');
const Project = require('./project'); // Assuming you have a Project model
const Employee = require('./employee'); // Assuming you have an Employee model

const ProjectEmployee = sequelize.define('projectEmployee', {
  projectId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Project,
      key: 'projectId',
    },
  },
  employeeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Employee,
      key: 'employeeId',
    },
  }, // Assuming you want an additional field like role for the association table
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
Project.belongsToMany(Employee, {
  through: ProjectEmployee,
  foreignKey: 'projectId',
});
Employee.belongsToMany(Project, {
  through: ProjectEmployee,
  foreignKey: 'employeeId',
});

module.exports = ProjectEmployee;