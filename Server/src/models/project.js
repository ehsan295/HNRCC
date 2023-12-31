const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
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
  projectLocation: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
module.exports = ProjectModel;
