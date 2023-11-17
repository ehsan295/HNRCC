// models/chatRoom.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const ChatUser = require('./chatUser'); // Assuming you have a ChatUser model
const ExchangeMessage = require('./exchangemessage'); // Assuming you have an ExchangeMessage model
const ExchangeFile = require('./exchangefile'); // Assuming you have an ExchangeFile model

const ChatRoom = sequelize.define('ChatRoom', {
  roomId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  createTime: {
    type: DataTypes.DATE,
  },
  roomName: {
    type: DataTypes.STRING,
  },
  createdBy: {
    type: DataTypes.INTEGER,
    references: {
      model: ChatUser,
      key: 'userId',
    },
  },
  messageId: {
    type: DataTypes.INTEGER,
    references: {
      model: ExchangeMessage,
      key: 'messageId',
    },
  },
  fileId: {
    type: DataTypes.INTEGER,
    references: {
      model: ExchangeFile,
      key: 'messageId',
    },
  },
});

module.exports = ChatRoom;