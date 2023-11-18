const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
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

Project.belongsToMany(Employee, { through: 'ProjectEmployee', foreignKey: 'projectId',
});

module.exports = Project;