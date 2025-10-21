const express = require("express")

const classDetailsRouting =express.Router();

const classDetails = require("../model/classDetailsModel");
const Classes = require("../model/classModel")




classDetailsRouting.get("/classDetails/:cid",async (req,res)=>{
    try {
        const cid =req.params.cid;
        const result =await Classes.findOne({_id :cid});
        console.log(result)
        res.send(result);
        console.log(result)
    }

    catch(err) {
        res.send(err)

    }

});








module.exports =classDetailsRouting;