const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const PaymentOrderModel = sequelize.define("Order", {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  paymentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
});


module.exports = PaymentOrderModel;