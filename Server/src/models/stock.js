// models/stock.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const ProjectModel = require("./project");
const ProductModel = require("./product");

const StockModel = sequelize.define("Stock", {
  stockId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  volume: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});


module.exports = StockModel;
