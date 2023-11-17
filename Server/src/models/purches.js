const { DataTypes } = require("sequelize");
const sequelize = require("../database/index");

const purches = sequelize.define("purches", {
    purchesId: {
   type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement:true,
    primaryKey:true,
  },
  projectId:{ 
    type:DataTypes.INTEGER,
    allowNull:false,
   },
   empolyeId: {
    type: DataTypes.INTEGER,
     allowNull: false,
   },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  companyName: {
    type: DataTypes.STRING,
     allowNull: false,
   },
   unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  billfile: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});

purches.belongsTo(project,
    {
      foreignkey:'projectId'
    });
purches.belongsTo(empolyee,
        {
          foreignkey:'empolyeId'
    });


module.exports = purches;

