import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true
});

export const analyzeResume = async (resume , jobdescription) => {
const formData = new FormData();
formData.append("resume", resume);
formData.append("jobdescription", jobdescription);

const response = await API.post("/analyze", formData);
return response.data;
}


export default API;