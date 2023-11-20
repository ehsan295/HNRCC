
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const ExpenseModel = sequelize.define("Expense", {
  expenseId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
     allowNull: false,
   },
   projectId: {
    type: DataTypes.INTEGER,
     allowNull: false,
   },
   employeId: {
    type: DataTypes.INTEGER,
     allowNull: false,
   },
   catagorieId:{
    type: DataTypes.INTEGER,
     allowNull: false,
   },
   amount:{
    type: DataTypes.INTEGER,
     allowNull: false,
   },
   bilfile:{
    type:DataTypes.STRING,
    allowNull:false,
   }

});


module.exports = ExpenseModel;

