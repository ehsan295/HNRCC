const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const CustomerModel = sequelize.define("Customer", {
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  orderId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  projectId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = CustomerModel;
