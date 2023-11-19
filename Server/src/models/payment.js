const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const customerModel = require("./customer");
const OrderModel = require("./order");

const PaymentModel = sequelize.define("payment", {
  paymentId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: order,
      key: "orderid",
    },
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: customer,
      key: "customerId",
    },
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
PaymentModel.belongsTo(OrderModel, {
  foreignkey: "orderId",
});
PaymentModel.belongsTo(customerModel, {
  foreignkey: "customerId",
});

module.exports = PaymentModel;
