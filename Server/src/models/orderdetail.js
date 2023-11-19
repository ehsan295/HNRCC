const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const OrderModel = require("./order");
const ProductModel = require("./product");
const OrderModel = require("./order");

const OrderdetailModel = sequelize.define("orderdetail", {
  orderdetailId: {
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

  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: product,
      key: "productid",
    },
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

OrderdetailModel.belongsTo(OrderModel, {
  foreignkey: "orderId",
});

OrderdetailModel.belongsTo(ProductModel, {
  foreignkey: "productId",
});

module.exports = OrderdetailModel;
