const mongoose = require("mongoose")


const scheduleSchema= new mongoose.Schema({

    classTitle:{
        type: String,
        required :true,
    },
    time:{
        type: String,
        required :true,
    },

    day :{
        type:String,
        required:true,

    },
    trainer :{
        type: String,
        required :true,
    },
    status:{
        type: String,
        required :true,
    },
  
},{
    versionKey : false,
})

module.exports=mongoose.model("schedule",scheduleSchema);