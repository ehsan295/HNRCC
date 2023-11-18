const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const Project = require("./project"); // Assuming you have a Project model
const Employee = require("./employee"); // Assuming you have an Employee model
const Vehicle = require("./vehicle");
// all relationship added
const Project = sequelize.define("project", {
  projectId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
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

Project.hasMany(Product, { foreignKey: "projectId" });

Project.belongsToMany(Employee, {
   through: 'ProjectEmployee',
    foreignKey: 'projectId',
});

Project.belongsToMany(Vehicle, {
  through: 'VehicleProject',
  foreignKey: 'projectId',
});

module.exports = Project;