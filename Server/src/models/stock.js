// models/stock.js
const { DataTypes } = require("sequelize");
const sequelize = require("../database/index"); // Assuming you have a file for database configuration
const ProjectModel = require("./project"); // Assuming you have a Project model
const ProductModel = require("./product"); // Assuming you have a Product model

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
});

StockModel.belongsTo(ProjectModel, { foreignKey: "projectId" });
StockModel.belongsToMany(ProductModel, {
  through: "StockProduct",
  foreignKey: "stockId",
});
ProductModel.belongsToMany(StockModel, {
  through: "StockProduct",
  foreignKey: "productId",
}); // Assuming reciprocal association

module.exports = StockModel;
