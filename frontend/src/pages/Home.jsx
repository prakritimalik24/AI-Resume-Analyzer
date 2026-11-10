import React , {useState} from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { analyzeResume } from "../services/api";

function Home() {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!resume) {
            setError("Please upload a resume.");
            return;
        }
        if (!jobDescription) {
            setError("Please enter a job description.");
            return;
        }

    try{
         setError("");
         setLoading(true);

         const result = await analyzeResume(resume , jobDescription);
         console.log("Analysis Result:", result);
        
    } catch (err) {
   setError(
err.response?.data?.detail || "An error occurred while analyzing the resume."
   );
    } finally {
        setLoading(false);
    }
       

        
    };

    return(
       <div className="bg-[#080810] min-h-screen ">
            <Navbar />

            <main className="min-h-screen flex  flex-col gap-5 items-center justify-center bg-[#080810] pt-30 px-4 sm:px-8 md:px-12 ">

<div className = " text-center">

<h1 className = "font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-green-600">Make your resume stand out.</h1>
</div>

{/* 3d model */}
<div></div>

<div className = "w-full p-4 ">


<form 
onSubmit = {handleSubmit}
className =" w-full flex flex-col items-center justify-between gap-3">
   
    <div className = "w-full  flex flex-col md:flex-row items-stretch gap-6">
         {/* upload resume */}
    <div className = "w-full md:w-1/2 h-full md:flex-1 self-stretch bg-[#10111D] border border-gray-900 rounded-2xl p-5 sm:p-7 flex flex-col items-center gap-">
<h2 className = "font-heading font-bold text-xl sm:text-2xl md:text-3xl text-blue-300 text-center mb-8">
    Upload Your Resume
</h2>

<div className = {`w-full min-h-48  border-2 border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer p-5 transition-all duration-200 
${isDragging ? "bg-gray-800" : 
    "bg-[#10111D]"

}`}
onDragOver={(e) => {
    e.preventDefault();
    setIsDragging(true);
}}
onDragLeave={() =>{ setIsDragging(false);

}}
onDrop={(e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if(file){
        setResume(file);
    }
}}
>
    <p className="text-gray-500 text-sm">Drag and drop your resume here</p>
    <p className="text-gray-500 text-xs">or</p>

    <label htmlFor="resume" className="px-5 py-2 rounded-lg bg-slate-600 text-white text-sm cursor-pointer hover:bg-green-600 transition-all duration-200">
        Browse Files
    </label>

    {
resume && (
    <p className="text-green-500 text-sm mt-2">Selected file: {resume.name}</p>
)
    }

    

    <input type="file" 
    id="resume"
    accept=".pdf,.png,.jpg,.jpeg"
    className="hidden" 
    onChange={(e) => {setResume(e.target.files[0]);
        console.log(e.target.files[0])
    }}
    />

    <p className="text-gray-500 text-sm">
        Supported formats: PDF, PNG, JPG, JPEG
    </p>
</div>

    </div>
  

    {/* job description */}
    <div className = "w-full md:w-1/2 h-full md:flex-1 self-stretch bg-[#10111D] border border-gray-900 rounded-2xl p-5 sm:p-7 flex flex-col items-center gap-4">
<h2 className = "font-heading font-bold text-xl sm:text-2xl md:text-3xl text-blue-300 text-center mb-8">
    Job Description
</h2>

     <textarea
     value={jobDescription}
    onChange={(e) => setJobDescription(e.target.value)}
    className="w-full min-h-44 bg-[#080810]  border border-gray-800 rounded-xl p-3 text-gray-300 text-sm   transition-all duration-200 "
    placeholder="Paste job description here..."
    ></textarea>
    </div>
    </div>
    {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
    )}

    <button
    disabled={loading}
    className = " mt-4 bg-gradient-to-r from-green-900 via-green-600 to-green-900 font-bold text-lg hover:scale-110 hover:text-white transition-all duration-200 w-1/2 cursor-pointer p-3 rounded-full "
     type="submit"
    > {loading ? "Analyzing..." : "Analyze"}</button>

      </form>
</div>


            </main>

            <Footer />
        </div>

    )
}

export default Home;