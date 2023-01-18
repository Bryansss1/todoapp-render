const db= require("../utils/database")
const Categorys=require("./categorys.model")
const Task=require("./task.model")
//Tipos de datos de sequelize
//varchar=> string

const {DataTypes}=require("sequelize")

const Taskcategories=db.define("task_categories",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        unique:true,
    },
    category_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        /* 
        references:{
            model:Categorys,
            key:"id",
        }
        */
    },
    task_id:{
        allowNull:false,
        type:DataTypes.INTEGER,
        /*references:{
            model:Task,
            key:"id",
        }*/
    }
},
{
    timestamps:false,
})

module.exports=Taskcategories;