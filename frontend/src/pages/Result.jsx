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
    console.log("COMPLETE ANALYSIS:", analysis);
    console.log("Quality Review:", analysis?.overall_resume_quality_review);
console.log("Weaknesses:", analysis?.weaknesses_and_gaps);
console.log("Suggestions:", analysis?.job_specific_suggestions);
console.log("ALL ANALYSIS KEYS:", Object.keys(analysis || {}));

console.log("FULL ANALYSIS JSON:", JSON.stringify(analysis, null, 2));

    const score = atsmatch?.matching_percent ?? 0;

    const matchcount = atsmatch?.matching_skills?.length ?? 0;

    const totalweight = atsmatch?.total_weight ?? 0;

    const matchedweight = atsmatch?.matched_weight ?? 0;

    const missingcount = analysis?.missing_skills_and_requirements?.length ?? 0;

    const strengths = analysis?.strengths ?? [];

    const missingSkills = analysis?.missing_skills_and_requirements ?? [];

const weaknesses = analysis?.weaknesses_and_gaps ?? [];
const qualityReview = analysis?.overall_resume_quality_review ?? [];
const suggestions = analysis?.job_specific_suggestions ?? [];
const overallAssessment = analysis?.overall_assessment ?? {};

const bulletImprovements =
  analysis?.bullet_point_and_content_improvements ?? [];

const formattingReview =
  analysis?.formatting_and_design_review ?? "";

const improvementPlan =
  analysis?.prioritized_improvement_plan ?? [];

const projectEvidence =
  analysis?.project_evidence ?? {};

const projects = projectEvidence?.projects ?? [];

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
            <div className ="flex flex-wrap gap-1 ">
              {analysis?.resume_skills?.length > 0 ? (analysis.resume_skills.map((skill , index) =>(
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

           <div className = "w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7  mt-6">

            <h2 className = "text-xl sm:text-2l font-bold text-white mb-5">Areas to Improve</h2>
             <div className ="flex flex-wrap gap-1 ">

            {missingSkills?.length > 0 ? (missingSkills.map((item,index) => (
              <span 
              key={index}
               className=" px-4 py-2 m-3 inline-flex items-center rounded-full border border-orange-800 text-orange-300 ">{item.skill}</span>
            ))) : ( <p className = "text-gray-400">No missing skills found</p>)}
           </div>
</div>



  <div className = "w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7  mt-6">

            <h2 className = "text-xl sm:text-2l font-bold text-white mb-5">Weaknesses and Gaps</h2>

            {weaknesses?.length > 0 ? (weaknesses.map((item,index) => (
              <div key={index} className = "mb-5">
              <h3 className = "text-white font-semibold">{item.issue}</h3>
              <p className = "text-gray-400 text-sm mt-2">{item.explaination}</p>
               </div>))) : ( <p className = "text-gray-400">No weaknesses found</p>)}

</div>


  <div className = "w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7  mt-6">

            <h2 className = "text-xl sm:text-2l font-bold text-white mb-5">Overall Resume Quality Review</h2>

            {qualityReview?.length > 0 ? (qualityReview.map((item,index) => (
              <div key={index} className = "mb-5">
              <h3 className = "text-white font-semibold">{item.area}</h3>
              <p className = "text-gray-400 text-sm mt-2">{item.feedback}</p>
              <p className = "text-gray-400 text-sm mt-2">
                    <strong>Improvement:</strong> {item.improvement}
                </p>
               </div>))) : ( <p className = "text-gray-400">No quality improvements found</p>)}

</div>



  <div className = "w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7  mt-6">

            <h2 className = "text-xl sm:text-2l font-bold text-white mb-5">Job-Specific Suggestions</h2>

            {suggestions?.length > 0 ? (suggestions.map((suggestion,index) => (
              <div key={index} className = "flex item-start gap-3 mb-5">
                 <span className="text-blue-400 font-bold">
                    {index + 1}.
                </span>

                <p className="text-gray-300 text-sm">
                    {suggestion}
                </p>
               </div>))) : ( <p className = "text-gray-400">No suggestions available.</p>)}

</div>

<div className="w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7 mt-6">

  <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
    Bullet Point Improvements
  </h2>

  {bulletImprovements.length > 0 ? (
    bulletImprovements.map((item, index) => (

      <div key={index} className="bg-[#080810] rounded-xl p-4 mb-5">

        <h3 className="text-gray-400 text-sm font-semibold mb-2">
          Original Bullet
        </h3>

        <p className="text-gray-400 text-sm leading-6 mb-4">
          {item.original_bullet}
        </p>

        <h3 className="text-green-400 text-sm font-semibold mb-2">
          Improved Bullet
        </h3>

        <p className="text-gray-200 text-sm leading-6 mb-4">
          {item.improved_bullet}
        </p>

        <h3 className="text-blue-400 text-sm font-semibold mb-2">
          Why this improvement?
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          {item.reason}
        </p>

      </div>

    ))
  ) : (
    <p className="text-gray-400">No bullet improvements available.</p>
  )}

</div>


<div className="w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7 mt-6">

  <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
    Formatting & Design Review
  </h2>

  {formattingReview ? (
    <p className="text-gray-300 text-sm leading-7">
      {formattingReview}
    </p>
  ) : (
    <p className="text-gray-400">
      No formatting review available.
    </p>
  )}

</div>

<div className="w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7 mt-6">

  <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
    Project Evidence
  </h2>

  {projectEvidence.has_projects && projects.length > 0 ? (

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      {projects.map((project, index) => (

        <div key={index} className="bg-[#080810] rounded-xl p-4">

          <h3 className="text-white font-semibold mb-3">
            {project.name}
          </h3>

          <p className="text-gray-400 text-sm leading-6 mb-4">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">

            {project.technologies?.map((tech, techIndex) => (

              <span
                key={techIndex}
                className="px-3 py-1 rounded-full text-xs border border-blue-400/30 text-blue-300"
              >
                {tech}
              </span>

            ))}

          </div>

        </div>

      ))}

    </div>

  ) : (
    <p className="text-gray-400">
      No projects identified in the resume.
    </p>
  )}

</div>

<div className="w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7 mt-6">

  <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
    Your Improvement Roadmap
  </h2>

  {improvementPlan.length > 0 ? (
    improvementPlan.map((item, index) => (

      <div key={index} className="flex gap-4 mb-6">

        <div className="shrink-0 w-9 h-9 rounded-full bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400 font-bold">
          {item.priority}
        </div>

        <div className="flex-1">

          <h3 className="text-white font-semibold">
            {item.action}
          </h3>

          <p className="text-gray-400 text-sm mt-2 leading-6">
            {item.reason}
          </p>

        </div>

      </div>

    ))
  ) : (
    <p className="text-gray-400">
      No improvement plan available.
    </p>
  )}

</div>

<div className="w-full bg-[#10111D] border border-gray-700 rounded-2xl p-5 sm:p-7 mt-6">

  <h2 className="text-xl sm:text-2xl font-bold text-white mb-5">
    Overall Assessment
  </h2>

  {overallAssessment.summary ? (
    <div className="space-y-5">

      <p className="text-gray-300 text-sm leading-7">
        {overallAssessment.summary}
      </p>

      <div className="bg-[#080810] rounded-xl p-4">
        <h3 className="text-green-400 font-semibold mb-2">
          Key Strength
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          {overallAssessment.key_strength}
        </p>
      </div>

      <div className="bg-[#080810] rounded-xl p-4">
        <h3 className="text-orange-400 font-semibold mb-2">
          Main Gap
        </h3>

        <p className="text-gray-400 text-sm leading-6">
          {overallAssessment.main_gap}
        </p>
      </div>

    </div>
  ) : (
    <p className="text-gray-400">No assessment available.</p>
  )}

</div>

            <Footer/>
        </div>
    )
}

export default Result;