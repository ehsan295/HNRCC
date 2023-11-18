// models/chatUser.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const Employee = require('./employee');

const ChatUser = sequelize.define('ChatUser', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  lastLogin: {
    type: DataTypes.DATE,
  },
});

// Define associations
ChatUser.belongsTo(Employee, { foreignKey: 'employeeId', unique: true }); // Assuming employeeId is the foreign key in ChatUser

module.exports = ChatUser;