const express = require("express");

const cors = require("cors");
const app = express();


app.use(cors({
  origin: "https://fitverse-project-by-atfan.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],              
  credentials: true
}));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

const classRouting = require("./router/classRouting");
const trainerRouting = require("./router/trainerRouting");
const scheduleRouting = require('./router/scheduleRouting');
const enquiryRouting = require("./router/enquiryRouting");
const classDetailsRouting = require("./router/classDetailsRouting");
const registerRouter = require("./router/registerRouting");
const contactRouting = require("./router/contactRouting");

app.use("/", classRouting);
app.use("/", trainerRouting);
app.use("/", scheduleRouting);
app.use("/", enquiryRouting);
app.use("/", classDetailsRouting);
app.use("/", registerRouter);
app.use("/", contactRouting);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
