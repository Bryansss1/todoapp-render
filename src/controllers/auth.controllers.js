const jwt=require("jsonwebtoken");
const AuthService=require("../services/auth.services")
require("dotenv").config()

const userLogin=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const response=await AuthService.login(email,password)
        if(response.isValid){
            const data={
                email:response.result.email,
                username:response.result.username,
                id:response.result.id,
            }
          const token= jwt.sign(data,process.env.JWT_SECRET,{algorithm:"HS512",expiresIn:"1m"})
        console.log(token)
        res.json({...data,token})
        }else{res.status(401).json({message:"Credenciales invalidas"})}
        
        //res.json(response)
    } catch (error) {
        res.status(404).json(error.message)
    }
}



module.exports={
    userLogin
}