const db =require("../utils/database")
const Users=require("../models/users.model")
const Task=require("../models/task.model")
const Categorys=require("../models/categorys.model")
const Taskcategories=require("../models/task-categories.model")

const users=[
    {username:"bryan",email:"bryan@gmail.com",password:"1234",},//id 1
    {username:"lucero",email:"lucero@gmail.com",password:"1234",},//id 2
    {username:"jhorman",email:"jhorman@gmail.com",password:"1234",},//id 3
];
const tasks=[
{title:"Estudiar node",description:"Descripcion tarea 1",user_id:1,},
{title:"Pasear al perro",description:"Descripcion tarea 2",user_id:1,},
{title:"lavar",user_id:2,},
{title:"ir al chequeo mensual",description:"Dshalala1",user_id:3},
];
const categories=[
{name:"personal",user_id:1},//1
{name:"salud",user_id:1},//2
{name:"deporte",user_id:1},//3
{name:"financiero",user_id:2},//4
{name:"ocio",user_id:2},//5
{name:"hogar",user_id:2},//6
{name:"entretenimiento",user_id:1},//7
{name:"cocina",user_id:2},//8
{name:"trabajo",user_id:1},//9
{name:"educacion",user_id:1},//10
];

const taskCategories=[
{category_id:1,task_id:1},
{category_id:2,task_id:1},
{category_id:4,task_id:1},
{category_id:3,task_id:2},
{category_id:1,task_id:2},
{category_id:7,task_id:2},
{category_id:2,task_id:2},
{category_id:8,task_id:3},
{category_id:6,task_id:3},
{category_id:1,task_id:4},
{category_id:2,task_id:4},
];


db.sync({force:false})
.then(()=>{
    console.log("Iniciando con el sembradio malisioso")
    users.forEach((user)=>Users.create(user));//insertando 1 por 1
    //
    setTimeout(()=>{
        tasks.forEach((task)=>Task.create(task))
    },100)
    setTimeout(()=>{
        categories.forEach((cate)=>Categorys.create(cate))
    },400)
    setTimeout(()=>{
        taskCategories.forEach((cate)=>Taskcategories.create(cate))
    },600)
})
.catch((error)=>console.log(error))

//create insertar info en la tabla    tabla.create(info al insertar ejemplo un objeto {user})
//FindOne,findAll igual al select * from tabla name,  findByPk
//update
//destroy