const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Vehicle = sequelize.define("vehicle", {
  vehicleId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  driver: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  plate: {
    type: DataTypes.STRING,
     allowNull: false,
     autoIncrement:true,
     primaryKey:true,
   },
   projectId:{ 
    type:DataTypes.INTEGER,
    allowNull:false,
   },

   

});

  Vehicle.belongsTo(Employee, {
    foreignKey: 'driver',
  });
  
  Vehicle.belongsToMany(Project, {
    through: 'VehicleProject',
    foreignKey: 'vehicleId',
  });


module.exports = vehicle;

