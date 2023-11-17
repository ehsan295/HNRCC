
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const customer = require("./customer");

const   payment = sequelize.define("payment", {
  paymentId: {
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
    customerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
          model: customer ,
          key:'customerId'
        }},
 
   total: {
    type: DataTypes.INTEGER,
     allowNull: false,
   },
   payed: {
    type: DataTypes.INTEGER,
     allowNull: false,
   },
   loan:{
    type: DataTypes.INTEGER,
     allowNull: false,
   },
 

});
payment.belongsTo(order,
    {
      foreignkey:'orderId'
    });
payment.belongsTo(customer,
        {
          foreignkey:'customerId'
    });


module.exports = payment;

