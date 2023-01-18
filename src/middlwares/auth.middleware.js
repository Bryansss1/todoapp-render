const jwt =require("jsonwebtoken");
require("dotenv").config()


const authMiddleware=(req,res,next)=>{
    let token=req.headers.authorization
    token=token.replace("Bearer ","")
    console.log(token)
    //verificar el token
   const decodedd= jwt.verify(token,process.env.JWT_SECRET,{algorithm:"HS512"},(err,decoded)=>{
    if(err){
        res.status(401).json({error:"invalid token",message:"el token no es valido,envia uno correcto"})
    }else{
        console.log(decoded)
        next()
    }
   })
   console.log(decodedd)
}
module.exports=authMiddleware
//vamos a validar el token, si el token es valido?

//si es valido lo dejamos pasar,si es invalido respondeme, anda opasha bobo

