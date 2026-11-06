import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
    return(
       <div className="bg-[#080810] min-h-screen ">
            <Navbar />

            <main className="min-h-screen flex  flex-col gap-5 items-center justify-center bg-[#080810] pt-30 px-4 sm:px-8 md:px-12 ">

<div className = " text-center">

<h1 className = "font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-green-400">Make your resume stand out.</h1>
</div>

{/* 3d model */}
<div></div>

<div className = "w-full p-4 ">


<form className =" w-full flex flex-col items-center justify-between gap-3">
   
    <div className = "w-full flex flex-col md:flex-row items-center justify-between gap-6">
         {/* upload resume */}
    <div className = "w-full md:w-1/2 bg-[#10111D] border border-gray-900 rounded-2xl p-5 sm:p-7 flex-col items-center gap-">
<h2 className = "font-heading font-bold text-xl sm:text-2xl md:text-3xl text-blue-300 text-center mb-8">
    Upload Your Resume
</h2>

<div className = "w-full min-h-48  border-2 border-dashed border-gray-800 rounded-xl flex flex-col items-center justify-center gap-3 cursor-pointer p-5 transition-all duration-200">
    <p className="text-gray-500 text-sm">Drag and drop your resume here</p>
    <p className="text-gray-500 text-xs">or</p>

    <label htmlFor="resume" className="px-5 py-2 rounded-lg bg-green-500 text-white text-sm cursor-pointer hover:bg-green-600 transition-all duration-200">
        Browse Files
    </label>

    <input type="file" id="resume"
    accept=".pdf,.png,.jpg,.jpeg"
    className="hidden" />

    <p className="text-gray-500 text-sm">
        Supported formats: PDF, PNG, JPG, JPEG
    </p>
</div>

    </div>
  

    {/* job description */}
    <div className = "w-full md:w-1/2 bg-[#10111D] border border-gray-900 rounded-2xl p-5 sm:p-7 flex-col items-center gap-">
<h2 className = "font-heading font-bold text-xl sm:text-2xl md:text-3xl text-blue-300 text-center mb-5">
    Paste Your Job Description
</h2>

    </div>
    </div>

    <button type="submit"
    >Analyze</button>

      </form>
</div>


            </main>

            <Footer />
        </div>

    )
}

export default Home;