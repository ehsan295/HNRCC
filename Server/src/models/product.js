const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const ProjectModel = require("./project");
const StockModel = require("./stock");

const ProductModel = sequelize.define("product", {
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
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
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: ProjectModel, // Corrected model reference to ProjectModel
      key: "projectId",
    },
  },
});

ProductModel.belongsTo(ProjectModel, {
  foreignKey: "projectId",
});

ProductModel.belongsToMany(StockModel, {
  through: "StockProduct",
  foreignKey: "productId",
});

module.exports = ProductModel;
