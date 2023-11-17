const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Product = sequelize.define("product", {
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
      model: project,
      key: "projectId",
    },
  },
});
product.belongsTo(project, {
  foreignkey: "projectId",
});

module.exports = Product;
