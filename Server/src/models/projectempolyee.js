// models/projectEmployee.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const ProjectModel = require("./project");
const EmployeeModel = require("./empolyee");
// Assuming you have a Project model
// Assuming you have an Employee model

const ProjectEmployee = sequelize.define("projectEmployee", {
  projectId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Project,
      key: "projectId",
    },
  },
  employeeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Employee,
      key: "employeeId",
    },
  }, // Assuming you want an additional field like role for the association table
  role: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});
ProjectModel.belongsToMany(EmployeeModel, {
  through: "ProjectEmployee",
  foreignKey: "projectId",
});
EmployeeModel.belongsToMany(ProjectModel, {
  through: "projectEmployee",
  foreignKey: "employeeId",
});

module.exports = ProjectEmployee;
