const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Customer = sequelize.define("customer", {
  customerId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },

phoneNumber: {
  type: DataTypes.INTEGER,
  allowNull: false,
},

  orderId: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  projectId:{ 
    type:DataTypes.INTEGER,
    allowNull:false,
   },
   
});


module.exports = Customer;
