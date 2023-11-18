const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");
const Project = require("./project");
// the relationship is added
const Product = sequelize.define("product", {
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
      model: Project,
      key: "projectId",
    },
  },
});
Product.belongsTo(Project, {
  foreignkey: "projectId",
});

module.exports = Product;
