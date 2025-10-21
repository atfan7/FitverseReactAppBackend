const jwt =require("jsonwebtoken")

const loginMiddleware= (req,res,next)=>{
    const token =req.header("x-token");

    if(!token){
        return res.send({status: "failed",message :"No Token, authorization denied"})
    }

    const decode= jwt.verify(token,"JSONSTRINGWEB")

    if(!decode){
        return res.send({status :"failed",message :"Token is not valid"})
    }

    req.user=decode.user;
    next();




}

module.exports=loginMiddleware;