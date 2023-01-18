const db= require("../utils/database")
const Users=require("./users.model")
//Tipos de datos de sequelize
//varchar=> string

const {DataTypes}=require("sequelize")


const Task=db.define("task",{
id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    autoIncrement:true,
    primaryKey:true,
},
title:{
    type:DataTypes.STRING,
    allowNull:false,
},
description:{
    type:DataTypes.STRING,
},
is_complete:{
    type:DataTypes.BOOLEAN,
    defaultValue:false,
},
user_id:{
type:DataTypes.INTEGER,
allowNull:false,
/* 
references:{
    model:Users,
    key:"id",
},
*/
}
})

module.exports=Task;