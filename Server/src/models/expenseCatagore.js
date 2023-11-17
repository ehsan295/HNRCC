
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const expense = sequelize.define("expense", {
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


module.exports = expenseCatagore;

