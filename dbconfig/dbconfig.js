const mongoose = require("mongoose");

const conUrl ="mongodb+srv://atfanbhat17_db_user:K1Xx8OuvtvEVNIOK@projects.lprliqj.mongodb.net/?retryWrites=true&w=majority&appName=Projects";


mongoose.connect(conUrl)
.then(con=>{
    console.log("connected")
})
.catch(err=>{
    console.log(err)


})