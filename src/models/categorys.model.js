
const db= require("../utils/database")
const Users=require("../models/users.model")
//Tipos de datos de sequelize
//varchar=> string

const {DataTypes}=require("sequelize")



const Categorys=db.define("categorys",{

    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        unique:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    user_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        //no es necesario el references ya con el init model y sus relaciones
    }
},{
    timestamps:false,
})

module.exports=Categorys;