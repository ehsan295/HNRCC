// models/exchangeMessage.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');
const ChatRoom = require('./chatroom'); // Assuming you have a ChatRoom model
const ChatUser = require('./chatUser'); // Assuming you have a ChatUser model

const ExchangeMessage = sequelize.define('ExchangeMessage', {
  messageId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  roomId: {
    type: DataTypes.INTEGER,
    references: {
      model: ChatRoom,
      key: 'roomId',
    },
  },
  timeStamp: {
    type: DataTypes.DATE,
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: ChatUser,
      key: 'userId',
    },
  },
  messageContent: {
    type: DataTypes.STRING,
  },
});

module.exports = ExchangeMessage;