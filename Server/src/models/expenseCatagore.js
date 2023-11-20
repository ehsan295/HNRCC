
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const ExpenseCatagoreModel = sequelize.define("expenseCatagore", {
CatagoreId: {
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


module.exports = ExpenseCatagoreModel;

