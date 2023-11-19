const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");


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
   
  },

  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    
  },

  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  customerId:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
  
});


module.exports = OrderdetailModel;
