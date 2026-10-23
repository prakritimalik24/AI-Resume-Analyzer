const axios = require("axios")
const FormData = require("form-data")


const analyzeResume = async (req , res) => {
    try{
        const formdata = new FormData();

        formdata.append("resume" , req.file.buffer , req.file.originalname);

        formdata.append("job_description" , req.body.job_description);

        const response = await axios.post(
            `${process.env.PYTHON_API_KEY}/analyze`,
            formdata , {headers : formdata.getHeaders()}
        );
        res.json(response.data);
    } catch (error) {
        console.error("Error analyzing resume:", error);
        res.status(500).json({ error: "Failed to analyze resume" });
    }
};

module.exports = { analyzeResume };