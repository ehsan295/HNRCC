// models/project.js
const { DataTypes } = require('sequelize');
const sequelize = require('../database/index');
const Product = require('./product'); // Assuming you have a Product model
const Stock = require('./stock'); // Assuming you have a Stock model
const Employee = require('./employee'); // Assuming you have an Employee model
const Vehicle = require('./vehicle');

const ProjectModel = sequelize.define("Project", {
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  projectName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  startDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

ProjectModel.hasMany(Product, { foreignKey: "projectId" });

ProjectModel.hasMany(Stock, { foreignKey: "projectId" });

ProjectModel.belongsToMany(Employee, {
  through: "ProjectEmployee",
  foreignKey: "projectId",
});

ProjectModel.belongsToMany(Vehicle, {
  through: "VehicleProject",
  foreignKey: "projectId",
});

module.exports = ProjectModel;