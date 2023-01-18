const {Router}=require("express")
const authMiddleware=require("../middlwares/auth.middleware")
const {getAllUsers,getUserbyId,PostUser,UpdateUser,DeleteUser,getUserWhitTasks, getCategorys}=require("../controllers/users.controller")
const router=Router();
//      entra a users/ve al auth y luego responde con el next es por orden de 1 2 3
router.get("/users",authMiddleware,getAllUsers)
router.get("/users/:id",authMiddleware,getUserbyId)
router.get("/users/:id/task",authMiddleware,getUserWhitTasks)
router.get("/users/:id/categorys",authMiddleware,getCategorys)
router.post("/users",PostUser)
router.put("/users/:id",authMiddleware,UpdateUser)
router.delete("/users/:id",authMiddleware,DeleteUser)

module.exports=router;