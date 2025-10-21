const mongoose = require("mongoose")


const classDetailsSchema= new mongoose.Schema({

    duration:{
        type: String,
        required :true,
    },
    level:{
        type: String,
        required :true,
    },
    category :{
        type: String,
        required :true,
    }
    
},{
    versionKey : false,
})

module.exports=mongoose.model("classDetails",classDetailsSchema);