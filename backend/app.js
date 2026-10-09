const express = require("express");

const app = express();

app.use(express.json())

app.get("/api/health", (req, res) => {
    res.json({ message: "Resume Analyzer Backend is running!" });
});


module.exports = app;