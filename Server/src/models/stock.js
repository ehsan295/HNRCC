// models/stock.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/index'); // Assuming you have a file for database configuration
const Project = require('./project'); // Assuming you have a Project model
const Product = require('./product'); // Assuming you have a Product model

const Stock = sequelize.define('Stock', {
  stockId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  date: {
    type: DataTypes.DATE,
    primaryKey: true,
  },
  productId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull:true,
  },
  volume: {
    type: DataTypes.INTEGER,
    allowNull:true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull:true,
  },
 
  
});

Stock.belongsTo(Project, { foreignKey: 'projectId' });
Stock.belongsToMany(Product, { through: 'StockProduct', foreignKey: 'stockId' });

module.exports = Stock;