const Task=require("../models/task.model")
const Taskcategories=require("../models/task-categories.model")
const Categorys = require("../models/categorys.model")


class Taskservices{
    static async getAlltask(){
        try {
            const result=await Task.findAll()
            return result
        } catch (error) {
            throw error
        }
    }

    static async getById(id){
        try {
            const result=await Task.findByPk(id)
            return result
        } catch (error) {
            throw error
        }
    }

    static async PostTask(task){
        try {
            const result =await Task.create(task)
            return result
        } catch (error) {
            throw error
        }
    }

    static async DeleteTask(id){
        try {
            const result= await Task.destroy({where:{id}})
            return result
        } catch (error) {
            throw error
        }
    }

    static async updateTask(newTask,id){
        try {
            const result= await Task.update(newTask,{where:{id}})
            return result
        } catch (error) {
            throw error
        }
    }

    static async getWithCategories(id){
        try {
            const result =await Task.findOne({
                where:{id},
                include:{
                    model:Taskcategories,
                    as:"categorys",
                    attributes:["id"],
                    include:{
                        model:Categorys,
                        as:"category",
                        attributes:["name"]
                    }
                },
            })
            return result
        } catch (error) {
            throw error
        }
    }
}




module.exports=Taskservices;