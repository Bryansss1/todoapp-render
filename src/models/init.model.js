const Users=require("./users.model")
const Task=require("./task.model")
const Categorys=require("./categorys.model")
const Taskcategories = require("./task-categories.model")

const initModels=()=>{
//vamos a crear las relaciones
//hasOne indicar que tiene uno
//hasMany tiene muchos
//belongsTo pertenece a
Task.belongsTo(Users ,{as:"autor",foreignKey:"user_id"})
Users.hasMany(Task,{as:"task",foreignKey:"user_id"})

//relaciones de muchos a muchos categorias y tareas
Taskcategories.belongsTo(Task,{as:"task",foreignKey:"task_id"})
Task.hasMany(Taskcategories,{as:"categorys",foreignKey:"task_id"})

Taskcategories.belongsTo(Categorys,{as:"category",foreignKey:"category_id"})
Categorys.hasMany(Taskcategories,{as:"task",foreignKey:"category_id"})
Categorys.belongsTo(Users,{as:"autor",foreignKey:"user_id"})
Users.hasMany(Categorys,{as:"category",foreignKey:"user_id"})
}


module.exports=initModels;