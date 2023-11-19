// models/project.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const ProductModel = require("./product"); // Assuming you have a Product model
const StockModel = require("./stock"); // Assuming you have a Stock model
const EmployeeModel = require("./employee"); // Assuming you have an Employee model
const VehicleModel = require("./vehicle");

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

ProjectModel.hasMany(ProductModel, { foreignKey: "projectId" });

ProjectModel.hasMany(StockModel, { foreignKey: "projectId" });

ProjectModel.belongsToMany(EmployeeModel, {
  through: "ProjectEmployee",
  foreignKey: "projectId",
});

ProjectModel.belongsToMany(VehicleModel, {
  through: "VehicleProject",
  foreignKey: "projectId",
});

module.exports = ProjectModel;
