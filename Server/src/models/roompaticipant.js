// models/roomParticipant.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');
const User = require('./chatUser'); // Assuming you have a User model

const RoomParticipant = sequelize.define('roomparticipant', {
  roomId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: 'userId',
    },
  },
});

module.exports = RoomParticipant;