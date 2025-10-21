const mongoose = require("mongoose")


const classSchema= new mongoose.Schema({

    name:{
        type: String,
        required :true,
    },
    description:{
        type: String,
        required :true,
    },
    duration :{
        type: String,
        required :true,
    },
    level:{
        type: String,
        required :true,
    },
    category:{
        type: String,
        required :true,
    },
},{
    versionKey : false,
})

module.exports=mongoose.model("class",classSchema);