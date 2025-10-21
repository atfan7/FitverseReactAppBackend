const express =require ('express');

const Register = require("../model/registerModel");
const jwt = require('jsonwebtoken');
const loginMiddleware = require('../middleware/loginMiddleware');
const registerRouter =express.Router();
const bcrypt =require("bcrypt")

registerRouter.post("/register", async (req,res)=>{

    try {
    
    const registerData = new Register({
        name:req.body.name,
        email :req.body.email,
        password : bcrypt.hashSync(req.body.password,10)
    });
    const result = await registerData.save();
    if(result) {
        res.send({status :"success",message :"Registered Successfully"});


    }
    else {
        res.send({status :"failed",message :"Registered Failed"});

    }
   }

   catch (err){
    res.send(err);
   }
});


registerRouter.post('/login',async (req,res)=>{
    try {
        const {email,password} =req.body;

        const exists = await Register.findOne({email :email})

        if(!exists) {
            res.send({status: "failed" ,message: "User Not Found"});
        }
        else if (!bcrypt.compareSync(password,exists.password)){
            res.send({status: "failed" ,message: "Incorrect Password"});        
        }

        else {
            // res.send({status:"exists", message : exists})
            const payload ={
                user:{
                    id: exists._id

                }
            }

            jwt.sign(payload,"JSONSTRINGWEB",{expiresIn: '200h'},(err,token)=>{
                if(err) throw err;
                res.send({
                    status: "success",
                    message:"Login Successful",
                    token :token,
                })


            })

        }

    }

    catch(err) {
        res.send(err)

    }


})

registerRouter.get("/dashboard",loginMiddleware,(req,res)=>{
    try {
        res.send ({status: "success", message :"Admin"})

    }

    catch(err) {
        res.send(err)

    }
})


module.exports =registerRouter;