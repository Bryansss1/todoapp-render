const Task = require("../models/task.model")
const Users=require("../models/users.model")
const Categorys=require("../models/categorys.model")
const Taskcategories=require("../models/task-categories.model")
const { where } = require("sequelize")
//metodos estaticos
//orientada en objetos
class UserServices{
    static async getAll(){
        try {
            const result=await Users.findAll()
            return result
        } catch (error) {
            throw error
            //lanzar un error
        }
    }

    static async getById(id){
        try {
            const result=await Users.findByPk(id)
            return result;
        } catch (error) {
            throw error;
        }
    }

    static async postUser(user){
        try {   
            const result = await Users.create(user)
            return result
        } catch (error) {
            throw error
        }
    }

    static async Deleteuser(id){
        try {
            const result = await Users.destroy({where:{id}})
            return result
        } catch (error) {
            throw error
        }
    }

    static async Putuser(id,newUser){
        try {
            const result = await Users.update(newUser,{where:{id}})
            return result
        } catch (error) {
            throw error
        }
    }


    
    // tarea que nos den las tareas con su categorias usuario
    //uniendo tablas
    static async GetWithTasks(id){
        try {
            const result=await Users.findOne({where:{id},
                //attributes ["username para asi solo pedir una propiedad"] o excluir una de todos attributes:{excludes:["username"]}
                attributes:{
                    exclude:["password"]
                },
                include:{
                    model:Task,
                    as:"task",
                    attributes:["title"],
                    //se puede hacer otro include ect ect
                    include:{
                        model:Taskcategories,
                        as:"categorys",
                        attributes:["categoryId"],
                        include:{
                            model:Categorys,
                            as:"category",
                            attributes:["name"]
                        }
                    }
                }
            })
            return result
        } catch (error) {
            throw error
        }
    }
    
static async getCategorys(id){
    try {
        const result=await Users.findOne({where:{id},
        attributes:{
            exclude:["password"]
            
        },
        include:{
            model:Categorys,
            as:"category",
            attributes:{
                exclude:["user_id"]
            }  
        }
        })
        return result
    } catch (error) {
         throw error
    }
}

}


module.exports= UserServices;
