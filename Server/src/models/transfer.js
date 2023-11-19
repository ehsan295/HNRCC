const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");


const TransferModel = sequelize.define("transfer", {
  transferId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  vehicleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
     allowNull: false,
   },
   orderId:{ 
    type:DataTypes.INTEGER,
    allowNull:true,
   },
   detail:{
    type:DataTypes.STRING,
    allowNull:true,
   },
   lodingPosition:{
    type:DataTypes.STRING,
    allowNull:false,
   },
   dischargePosition:{
    type:DataTypes.STRING,
    allowNull:false,
   },
   phone:{
    type:DataTypes.STRING,
    allowNull:true,
   },
   rent:{
    type:DataTypes.INTEGER,
    allowNull:true,
   },

});


module.exports = TransferModel;

