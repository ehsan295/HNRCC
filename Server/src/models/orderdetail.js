
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const order = require("./order")

const orderdetail = sequelize.define("orderdetail", {
  orderdetailId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: order ,
      key:'orderid'
    }},

  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model: product ,
      key:'productid'
    }
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

orderdetail.belongsTo(order,
  {
    foreignkey:'orderId'
  });

  orderdetail.belongsTo(product,
    {
      foreignkey:'productId'
    });

module.exports = orderdetail;
