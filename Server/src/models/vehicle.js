const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const vehicle = sequelize.define("vehicle", {
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
vehicle.belongsTo(project,
    {
      foreignkey:'projectId'
    });
 vehicle.belongsTo(empolyee,
      {
        foreignkey:'driver'
  });


module.exports = vehicle;

