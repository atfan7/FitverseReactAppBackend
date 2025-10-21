const express = require("express")

const trainerRouting =express.Router();

const trainers = require("../model/trainerModel")

trainerRouting.post("/trainers",async (req,res)=>{
    try {
         const trainerData = new trainers(req.body);
         const result =await trainerData.save();
         res.send(result)
    }
    catch(err)
    {
        res.send(err)
    }

   
});

trainerRouting.get("/trainers",async (req,res)=>{
    try {
        const result =await trainers.find();
        res.send(result);
    }

    catch(err) {
        res.send(err)

    }

    
    
});

trainerRouting.delete("/trainers/:tid",async (req,res)=>{
    try {
        const tid =req.params.tid;
        const result=await trainers.deleteOne({_id :tid});
        res.send(result);

        
    }

    catch(err) {
        res.send(err)

    }

});

trainerRouting.get("/trainers/:tid",async (req,res)=>{
    try {
        const tid =req.params.tid;
        const result =await trainers.findOne({_id :tid});
        res.send(result);
    }

    catch(err) {
        res.send(err)

    }

});

trainerRouting.put("/trainers/:tid",async (req,res)=>{
    try {
        const tid =req.params.tid;
        const result= await trainers.updateOne({_id :tid},{$set: req.body})
        
        res.send(result);
    }

    catch(err) {
        res.send(err)

    }

});







module.exports =trainerRouting;