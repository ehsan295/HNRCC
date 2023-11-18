const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const Product = sequelize.define("product", {
  productId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  date: {
   type: DataTypes.DATE,
    allowNull: false,
  },
  detail: {
    type: DataTypes.STRING,
    allowNull: true,
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
  picture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
    projectId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references:{
        model:project,
        key:'projectId'
      }
    },
});
product.belongsTo(project,
  {
    foreignkey:'projectId'
  });

module.exports = Product;
