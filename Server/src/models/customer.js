const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const customer = sequelize.define("customer", {
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
   
});


module.exports = customer;
