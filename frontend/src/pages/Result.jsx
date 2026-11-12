import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { useLocation } from "react-router-dom";

function Result() {
    const location = useLocation();
    const result  = location.state?.result;
    console.log("Result recieved", result);

    const atsmatch = result?.ats_match;
    const analysis = result?.analysis;
        console.log("Resume Skills:", analysis?.resume_skills);
        console.log("Strengths:", analysis?.strengths);


    const score = atsmatch?.matching_percent ?? 0;

    const matchcount = atsmatch?.matching_skills?.length ?? 0;

    const totalweight = atsmatch?.total_weight ?? 0;

    const matchedweight = atsmatch?.matched_weight ?? 0;

    const missingcount = analysis?.missing_skills_and_requirements?.length ?? 0;

    const strengths = analysis?.strengths ?? [];

    return(
       <div className="bg-[#080810] min-h-screen ">
            <Navbar/>
           
           <div className = "w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-8  mt-10">
            <div className = "text-center m-8">
<h1 className = "font-heading text-2xl sm:text-3xl font-bold text-white">
Your Resume Analysis Result
</h1>

            </div>

            <div className = "flex flex-col md:flex-row items-center gap-8">


<div 
className = "w-50 h-50 rounded-full flex items-center justify-center shrink-0"
style ={{background: `conic-gradient(#22c55e ${score}% , #ffffff ${score}% )`}}
>
    <div className = "w-45 h-45 rounded-full bg-[#10111D] flex flex-col items-center justify-center">
         <h2 className = "text-4xl font-bold text-white">{score}%</h2>
         <p className = "text-gray-400 text-sm mt-1">ATS Match Score</p>
    </div>
   
</div>

<div className = "flex-1 w-full">
    <h2 className = "text-xl font-bold text-white mb-3">{score >= 80 ? "Excellent Match!" : score >= 60 ? "Good Match!" : "Needs Improvement"}</h2>
<p className = "text-gray-400">{
    matchedweight}  of {totalweight} weighted points matched</p>

<div className = "grid grid-cols-2 gap-4 mt-4 ">
<div className = "bg-[#080810] rounded-xl p-4">

    <h3 className="text-2xl font-bold text-white">
            {matchcount}
          </h3>
          <p className="text-gray-400 text-sm">
            Matched Skills
          </p>
</div>

 <div className="bg-[#080810] rounded-xl p-4">
          <h3 className="text-2xl font-bold text-white">
            {missingcount}
          </h3>
          <p className="text-gray-400 text-sm">
            Missing Skills
          </p>
        </div>


</div>
</div>
            </div>

            

           </div>

           <div className = "w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7  mt-6">
            <h2 className ="text-xl sm:text-2xl font-bold text-white mb-5">Skills Overview</h2>
            <div className ="flex flex-wrap gap-1 ">{analysis?.resume_skills?.length > 0 ? (analysis.resume_skills.map((skill , index) =>(
              <span 
              key={index}
               className=" px-4 py-2 m-3 inline-flex items-center rounded-full border border-blue-300 text-blue-300 ">{skill}</span>)) ): (
               <p className="text-gray-400">No skills found in the resume</p>)}</div>
           </div>

           <div className = "w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7  mt-6">

            <h2 className = "text-xl sm:text-2l font-bold text-white mb-5">Your Strengths</h2>

            {strengths?.length > 0 ? (strengths.map((item,index) => (
              <div key={index} className = "mb-5">
              <h3 className = "text-white font-semibold">{item.strength}</h3>
              <p className = "text-gray-400 text-sm mt-2"><strong>Evidence:</strong>{item.evidence}</p>
               <p className="text-gray-400 text-sm mt-2">
                    <strong>Job Relevance:</strong> {item.job_relevance}
                </p>

              </div>
            ))) : ( <p className = "text-gray-400">No strengths found</p>)}
           </div>

  
            <Footer/>
        </div>
    )
}

export default Result;