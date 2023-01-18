const {Router}=require("express")
const authMiddleware=require("../middlwares/auth.middleware")
const {GetallTask, GetbyIdtask, CreateTask, Deletetask, UpdateTask, getTaskwithCategories}=require("../controllers/task.controllers")
const router=Router()
//entra a users/ve al auth y luego responde con el next es por orden de 1 2 3
router.get("/task",authMiddleware,GetallTask)
router.get("/task/:id",authMiddleware,GetbyIdtask)
router.post("/task",authMiddleware,CreateTask)
router.put("/task/:id",authMiddleware,UpdateTask)
router.delete("/task/:id",authMiddleware,Deletetask)
router.get("/task/:id/categories",authMiddleware,getTaskwithCategories)

module.exports=router