// models/stock.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/index'); // Assuming you have a file for database configuration

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
  },
  volume: {
    type: DataTypes.INTEGER,
  },
  price: {
    type: DataTypes.INTEGER,
  },
  projectId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Project', // Assuming your project table is named 'Project'
      key: 'projectId',
    },
  },
});

module.exports = Stock;