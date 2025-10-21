const mongoose = require("mongoose")


const enquirySchema= new mongoose.Schema({

    name:{
        type: String,
        required :true,
    },
    mobile :{
        type: String,
        required :true,
    },
    email:{
        type: String,
        required :true,
    },
    message:{
        type: String,
        required :true,
    },
},{
    versionKey : false,
})

module.exports=mongoose.model("enquiry",enquirySchema);