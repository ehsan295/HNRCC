// models/chatUser.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const Employee = require('./employee'); // Assuming you have an Employee model

const ChatUser = sequelize.define('ChatUser', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  employeeId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Employee,
      key: 'employeeId',
    },
  },
  lastLogin: {
    type: DataTypes.DATE,
  },
 
 
});

module.exports = ChatUser;