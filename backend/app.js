const express = require("express");
const resumeRoutes = require("./routes/resume_routes");

const app = express();

app.use(express.json())
app.use("/", resumeRoutes);




module.exports = app;