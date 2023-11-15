const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Product = sequelize.define("product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  details: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  volume: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  productCode: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Product;
