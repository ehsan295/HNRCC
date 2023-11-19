// models/chatRoom.js
const { DataTypes } = require('sequelize');
const { sequelize } = require('../database');
const ChatUser = require('./chatUser');
const ExchangeMessage = require('./exchangeMessage');
const ExchangeFile = require('./exchangeFile');

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
      key: 'fileId',
    },
  },
});

// Define associations
ChatUser.hasMany(ChatRoom, { foreignKey: 'createdBy' });
ChatRoom.belongsTo(ChatUser, { foreignKey: 'createdBy' });

ChatRoom.hasMany(ExchangeMessage, { foreignKey: 'roomId' });
ExchangeMessage.belongsTo(ChatRoom, { foreignKey: 'roomId' });

ChatRoom.hasMany(ExchangeFile, { foreignKey: 'roomId' });
ExchangeFile.belongsTo(ChatRoom, { foreignKey: 'roomId' });

module.exports = ChatRoom;