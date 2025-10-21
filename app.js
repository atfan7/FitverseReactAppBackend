
const express = require("express");
const classRouting = require("./router/classRouting");
require("./dbconfig/dbconfig")
const app=express();
const cors= require("cors");
const trainerRouting = require("./router/trainerRouting");
const scheduleRouting = require('./router/scheduleRouting');
const enquiryRouting = require("./router/enquiryRouting");
const classDetailsRouting = require("./router/classDetailsRouting");
const registerRouter = require("./router/registerRouting");
const contactRouting = require("./router/contactRouting");


app.use(cors({
  origin: 'https://fitverse-project-by-atfan.vercel.app', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

const port=4000;
app.use(express.json());


app.use("/",classRouting);
app.use("/",trainerRouting);
app.use("/",scheduleRouting);
app.use("/", enquiryRouting);
app.use("/", classDetailsRouting);
app.use("/",registerRouter);
app.use("/",contactRouting);


app.listen(port,()=>{

    console.log(`Server started at ${port}`)
})
