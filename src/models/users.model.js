//instancia para la conexion de la db

const db= require("../utils/database")

//Tipos de datos de sequelize
//varchar=> string

const {DataTypes}=require("sequelize")

//Definir el modelo de usuarios
//los modelos se definen con mayusuclas

//parametros
//nombre de la tabla
//los atributos de las tablas


const Users=db.define("users",{
id:{
    primaryKey:true,
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
},
username:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
},
email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true,
    validate:{
        isEmail:true,
    }
},
password:{
    type:DataTypes.STRING,
    allowNull:false,

},
})

module.exports=Users