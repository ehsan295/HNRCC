const { DataTypes } = require('sequelize');
const sequelize = require('../database/index')

const User = sequelize.define('signup',{
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    }
})

module.exports = User