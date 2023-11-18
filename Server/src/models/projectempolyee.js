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
  },
});

module.exports = ProjectEmployee;