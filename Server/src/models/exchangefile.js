// models/exchangeFile.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database/index');
const ChatRoom = require('./chatroom'); // Assuming you have a ChatRoom model
const ChatUser = require('./chatUser'); // Assuming you have a ChatUser model

const ExchangeFile = sequelize.define('ExchangeFile', {
  fileId: {
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
  fileName: {
    type: DataTypes.STRING,
  },
  filePath: {
    type: DataTypes.STRING,
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
});

module.exports = ExchangeFile;