const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const VehicleModel = sequelize.define("Vehicle", {
  vehicleId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  employeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  plate: {
    type: DataTypes.STRING,
     allowNull: false,
     primaryKey:true,
   },
   projectId:{ 
    type:DataTypes.INTEGER,
    allowNull:false,
   }, 

});


module.exports = VehicleModel;

