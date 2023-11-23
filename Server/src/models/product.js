const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const ProductModel = sequelize.define("Product", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  volume: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  detail: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = ProductModel;
