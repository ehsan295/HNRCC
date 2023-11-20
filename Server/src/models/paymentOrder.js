const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const PaymentOrderModel = sequelize.define("PaymentOrder", {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  paymentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
});


module.exports = PaymentOrderModel;