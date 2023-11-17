const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const project = sequelize.define("project", {
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


module.exports = project;