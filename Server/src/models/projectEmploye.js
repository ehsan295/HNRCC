const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const ProjectEmployeeModel = sequelize.define('ProjectEmployeeModel', {
  projectId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
   
  },
  employeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  
    primaryKey: true,
  },

  // Other fields in ProjectEmployeeModel
});


module.exports = ProjectEmployeeModel;
