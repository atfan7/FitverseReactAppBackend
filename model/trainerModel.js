const mongoose = require("mongoose");


const trainerSchema = new mongoose.Schema({

     name:{
        type: String,
        required :true,
    },
    specialization:{
        type: String,
        required :true,
    },
    description:{
        type: String,
        required :true,
    },
    image:{
        type: String,
        required :false,
    }
},    {
        versionKey: false,
})

module.exports=mongoose.model("trainer",trainerSchema);
