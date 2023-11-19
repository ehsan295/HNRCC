const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const OrderModel = sequelize.define("order", {
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  orderdetailId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: OrderdetailModel,
      key: "orderdetailId",
    },
  },
});
OrderModel.belongsTo(OrderdetailModel, {
  foreignkey: "orderdetailId",
});

module.exports = OrderModel;
