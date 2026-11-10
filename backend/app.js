const express = require("express");
const resumeRoutes = require("./routes/resume_routes");
const cors = require("cors");


const app = express();
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));


app.use(express.json())
app.use("/", resumeRoutes);




module.exports = app;