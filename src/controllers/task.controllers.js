const Taskservices=require("../services/task.services")




const GetallTask=async(req,res)=>{
    try {
        const result=await Taskservices.getAlltask()
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}
const GetbyIdtask=async (req,res)=>{
    try {
        const {id}=req.params
        const result=await Taskservices.getById(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}

const CreateTask=async (req,res)=>{
try {
    const newTask=req.body
    const result=await Taskservices.PostTask(newTask)
    res.status(200).json(result)
} catch (error) {
    console.log(error)
}
}
const Deletetask = async (req,res)=>{
    try {
        const {id}=req.params
        const result=await Taskservices.DeleteTask(id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}
const UpdateTask=async(req,res)=>{
    try {
        const newUp=req.body
        const {id}=req.params
        const result=await Taskservices.updateTask(newUp,id)
        res.status(200).json(result)
    } catch (error) {
        console.log(error)
    }
}
const getTaskwithCategories=async(req,res)=>{
try {
    const {id}=req.params;
    const result=await Taskservices.getWithCategories(id)
    //res.json({message:"enviando con cate",data:result})
    res.status(200).json(result)
} catch (error) {
    console.log(error)
}
}


module.exports={
    GetallTask,
    GetbyIdtask,
    CreateTask,
    Deletetask,
    UpdateTask,
    getTaskwithCategories,
}