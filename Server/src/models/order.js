const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const order = sequelize.define("order", {
  orderId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  orderdetailId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references:{
      model:orderdetail,
      key:'orderdetailId'
    }
  },
});
order.belongsTo(orderdetail,
{
  foreignkey:'orderdetailId'
});

module.exports = order;
