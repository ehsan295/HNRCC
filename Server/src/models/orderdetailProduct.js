const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const OrderdetailProduct = sequelize.define("orderdetailProduct", {
    orderdetailId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    productId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
    })

    module.exports = OrderdetailProduct;