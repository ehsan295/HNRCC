const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const OrderModel = sequelize.define("Order", {
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
   
  },
});


module.exports = OrderModel;
