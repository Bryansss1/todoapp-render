const jwt =require("jsonwebtoken");
require("dotenv").config()


const authMiddleware=(req,res,next)=>{
    let token=req.headers.authorization
    token=token?.replace("Bearer ","")
    if(token){
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
    }else{
        res.status(400).json({
            error:"no enviaste un token",
            message:"no se esta enviando un token de autenticacion"
        })
    }
   
}
module.exports=authMiddleware
//vamos a validar el token, si el token es valido?

//si es valido lo dejamos pasar,si es invalido respondeme, anda opasha bobo

