const express = require("express")
const multer = require("multer")
const { analyzeResume } = require("../controller/resume_controller")

const router = express.Router()
const upload = multer({storage: multer.memoryStorage() })

router.post("/analyze" , upload.single("resume") , analyzeResume)

module.exports = router