//importar express
const express=require("express")
const db= require("./utils/database")
const initModels =require("./models/init.model")
const Users = require("./models/users.model")
const { json } = require("sequelize")
const Task = require("./models/task.model")
const userRoutes=require("./routes/users.routes")
const taskRoutes=require("./routes/tasks.routes")
const authRoutes=require("../src/routes/auth.routes")
const cors=require("cors")
require("dotenv").config()
//crear una instancia de express

console.log(process.env.USERNAME)

const app =express()
const PORT=process.env.PORTT
app.use(express.json())
app.use(cors())
app.use("/api/v1",userRoutes)
app.use("/api/v1",taskRoutes)
app.use("/api/v1",authRoutes)

db.authenticate()
.then( ()=>console.log("autenticacion exitosa")) 
.catch((error)=>console.log(error));

initModels();
//vamos a usar el metodo sync de nuestra db
db.sync({force:true})
.then(()=>console.log("base de datos sincronizada"))
.catch((error)=>console.error(error))

app.get("/",(req,res)=>{
    res.status(200).json({message:"Bienvenido al servidor"})
})

app.listen(PORT,()=>{
    console.log(`Servidor conectando al puerto ${PORT}`)
})









//definir las rutas de nuestros endpoint(de ahora adelante ep)
//todas las consultas de usuarios seria //localhost:2000/users
//todas las tareas seria  //localhost:2000/tasks

// GET a /users





//vamos insertar informacion en nuestra base de datos
//desde nuestro proyecto de node


/*app.get("/users",async (req,res)=>{
try {
    //vamos a obtener el resultado de consultar a todos los usuarios de la base de datos
    const result=await Users.findAll(); //es igual a un select * from users;
    res.status(200).json(result)
} catch (error) {
    console.log(error)
}
})


//obtener usuario por id
app.get("/users/:id",async (req,res)=>{
try {
console.log(req.params)
const {id}=req.params
const result =await Users.findByPk(id);
res.status(200).json(result)
} catch (error) {
        console.log(error)
}
})
    
//obtener usuario por username

app.get("/users/username/:username",async(req,res)=>{
    try {
        const {username}=req.params
        const result =await Users.findOne({where:{username}})
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})

//crear usuario 
app.post("/users",async(req,res)=>{
    try {
        const user=req.body
        const result=Users.create(user)
        res.status(201).json(result)
    }catch (error){ res.status(400).json(error.message); console.log(error)}
})


//actualizar usuarios
app.put("/users/:id",async(req,res)=>{
try {
    const {id}=req.params
    const field=req.body
    const result=await Users.update(field,{where:{id}})
    res.status(200).json(result)
} catch (error) {
    console.log(error)
    res.status(400).json(error.message)
}
})

//delete seria de esta manera

app.delete("/users/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const result=await Users.destroy({where:{id}})
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})


//task tarea get tener todas las tareas
app.get("/task",async(req,res)=>{
    try {
        const result=await Task.findAll()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
})

//task tarea por id obtenerla
app.get("/task/:id",async(req,res)=>{
try {
const {id}=req.params
const result=await Task.findByPk(id)
res.status(200).json(result)
}catch (error) {
    console.log(error)
}
})

//task crear tarea
app.post("/task",async(req,res)=>{
try {
const task=req.body
const result=await Task.create(task)
res.status(201).json(result)       
} catch (error) {
console.log(error)  
}
})

//actualizar tarea
app.put("/task/:id",async(req,res)=>{
try {
const {id}=req.params
const updateTask=req.body
const result =await Task.update(updateTask,{where:{id}})
res.status(200).json(result)       
}catch (error) {
    console.log(error)
}
})

//eliminar tarea
app.delete("/task/:id",async(req,res)=>{
    try {
        const {id}=req.params
        const result=await Task.destroy({where:{id}})
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}) */