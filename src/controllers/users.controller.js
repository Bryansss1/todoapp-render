const UserServices=require("../services/users.services")

const getAllUsers=async (req,res)=>{
    try {
        const result= await UserServices.getAll()
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getUserbyId=async (req,res)=>{
try {
    const {id}=req.params
    const result=await UserServices.getById(id)
    res.status(200).json(result)
    }catch(error){
        res.status(400).json(error.message)
    }
}

const UpdateUser=async (req,res)=>{
    try {
        const newUser=req.body
        const {id}=req.params
        const result=await UserServices.Putuser(id,newUser)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const DeleteUser=async (req,res)=>{
    try {
        const {id}=req.params
        const result=await UserServices.Deleteuser(id)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const PostUser=async (req,res)=>{
    try {
        const user=req.body
        const result=await UserServices.postUser(user)
        res.status(201).json(result)
        }catch(error){
            res.status(400).json(error.message)
        }
}

const getUserWhitTasks=async(req,res)=>{
try {
    const {id}=req.params
    const result=await UserServices.GetWithTasks(id)
    res.status(200).json(result)
} catch (error) {
    res.status(400).json(error.message)
}
}

const getCategorys=async(req,res)=>{
    try {
        const {id}=req.params
        const result=await UserServices.getCategorys(id)
        res.json(result)
    } catch (error) {
        res.status(404).json(error.message)
    }
}

module.exports={
    PostUser,
    UpdateUser,
    getAllUsers,
    getUserbyId,
    DeleteUser,
    getUserWhitTasks,
    getCategorys
}