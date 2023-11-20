const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");


const PaymentModel = sequelize.define("Payment", {
  paymentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
   
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
 
  },

  total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  payed: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  loan: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


module.exports = PaymentModel;
