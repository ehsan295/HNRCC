const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Empolyee = sequelize.define("empolyee", {
    empolyeId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fatherName: {
    type: DataTypes.STRING,
     allowNull: false,
   },
   tazkiraNumber: {
    type: DataTypes.STRING,
     allowNull: false,
   },
   phoneNumbe: {
    type: DataTypes.STRING,
     allowNull: false,
   },
   Cv:{
    type: DataTypes.STRING,
     allowNull: true,
   },
   photo:{
    type: DataTypes.STRING,
     allowNull: true,
   },
   position:{
    type:DataTypes.STRING,
    allowNull:false,
   },
   sallary:{
    type:DataTypes.INTEGER,
    allowNull:false,
   },
   startDate:{
    type:DataTypes.STRING,
    allowNull:false,
   },
   projectId:{ 
    type:DataTypes.INTEGER,
    allowNull:false,
   },

   

});
Empolyee.belongsTo(project,
    {
      foreignkey:'projectId'
    });
    Empolyee.belongsToMany(Project, {
      through: 'ProjectEmployee',
      foreignKey: 'employeeId',
    });
    


module.exports = Empolyee;

