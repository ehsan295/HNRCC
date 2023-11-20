const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const OrderdetailProductModel = sequelize.define("OrderDetailProductModel", {
 
  orderdetailId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true
   
  },
  productId:{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey:true
  }
});


module.exports = OrderdetailProductModel;
