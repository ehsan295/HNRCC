
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const ExpenseCatagore = sequelize.define("expenseCatagore", {
expenseCatagoreid: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
 expenseType: {
    type: DataTypes.STRING,
    allowNull: false,
  },


});


module.exports = ExpenseCatagore;

