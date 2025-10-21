const express = require("express")

const classRouting =express.Router();

const Classes = require("../model/classModel")

classRouting.post("/classes",async (req,res)=>{
    try {
         const classData = new Classes(req.body);
         const result =await classData.save();
         res.send(result)
    }
    catch(err)
    {
        res.send(err)
    }

   
});

classRouting.get("/classes",async (req,res)=>{
    try {
        const result =await Classes.find();
        res.send(result);
    }

    catch(err) {
        res.send(err)

    }

    
    
});

classRouting.delete("/classes/:cid",async (req,res)=>{
    try {
        const cid =req.params.cid;
        const result=await Classes.deleteOne({_id :cid});
        res.send(result);

        
    }

    catch(err) {
        res.send(err)

    }

});

classRouting.get("/classes/:cid",async (req,res)=>{
    try {
        const cid =req.params.cid;
        const result =await Classes.findOne({_id :cid});
        res.send(result);
    }

    catch(err) {
        res.send(err)

    }

});

classRouting.put("/classes/:cid",async (req,res)=>{
    try {
        const cid =req.params.cid;
        const result= await Classes.updateOne({_id :cid},{$set: req.body})
        
        res.send(result);
    }

    catch(err) {
        res.send(err)

    }

});







module.exports =classRouting;