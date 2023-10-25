const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: 'localhost',
      dialect: 'mysql',
    }
  );
  sequelize.sync()
//26:14
// (async ()=>{
//     try{
//         await sequelize.authenticate()
//         console.log('Conection established')
//     }catch(error){
//         console.log('Could not Connect', error)
//     }
// })();
module.exports = sequelize