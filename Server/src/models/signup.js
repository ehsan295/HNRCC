const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const signup = sequelize.define("signup", {
  id: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updateAt: {
        type: DataTypes.DATE,
        allowNull: false,
      }
});


module.exports = signup;