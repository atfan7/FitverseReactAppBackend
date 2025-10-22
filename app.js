const express = require("express");
const cors = require("cors");
require("dotenv").config(); // Load environment variables
require("./dbconfig/dbconfig");

const classRouting = require("./router/classRouting");
const trainerRouting = require("./router/trainerRouting");
const scheduleRouting = require('./router/scheduleRouting');
const enquiryRouting = require("./router/enquiryRouting");
const classDetailsRouting = require("./router/classDetailsRouting");
const registerRouter = require("./router/registerRouting");
const contactRouting = require("./router/contactRouting");

const app = express();


app.use(cors({
  origin: 'https://fitverse-project-by-atfan.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

app.use("/", classRouting);
app.use("/", trainerRouting);
app.use("/", scheduleRouting);
app.use("/", enquiryRouting);
app.use("/", classDetailsRouting);
app.use("/", registerRouter);
app.use("/", contactRouting);


app.get("/", (req, res) => {
  res.send("FitVerse Backend is running");
});


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
