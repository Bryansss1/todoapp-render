
const {Sequelize}=require("sequelize")
require("dotenv").config()

//crear una instancia con parametros de configuracion de nuestra base de datos
//objeto de configuracion -> 
const db= new Sequelize({
    database:process.env.DB_NAME,
    username:process.env.DB_USER,
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    logging:false,
    dialect:"postgres"//la base de datos que estamos usando
})


module.exports=db;