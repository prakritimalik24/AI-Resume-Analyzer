
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Upload Your Resume",
    description:
      "Upload your resume in PDF, JPG or PNG format. ResuMate extracts the text and information from your document.",
    tag: "PDF / JPG / PNG"
  },
  {
    number: "02",
    title: "Add a Job Description",
    description:
      "Paste the job description of the role you are targeting. This helps ResuMate understand the skills and qualifications expected by the employer.",
    tag: "Job Requirements"
  },
  {
    number: "03",
    title: "AI-Powered Analysis",
    description:
      "Your resume is analyzed against the job description to identify relevant skills, strengths, missing requirements and improvement opportunities.",
    tag: "AI Analysis"
  },
  {
    number: "04",
    title: "Explore Your Results",
    description:
      "Review your ATS-style match score, skill gaps, resume quality feedback, project evidence and personalized recommendations.",
    tag: "Detailed Insights"
  },
  {
    number: "05",
    title: "Improve & Apply",
    description:
      "Use the insights and suggested improvements to make your resume more relevant to the position before applying.",
    tag: "Take Action"
  }
];

function Working() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <Navbar />

      <main className="pt-28 sm:pt-32">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">

          <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            The Process
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">
            How ResuMate
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Works
            </span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mt-6 leading-8">
            From uploading your resume to understanding your job fit,
            get meaningful insights in just a few simple steps.
          </p>

        </section>

        {/* Steps */}
        <section className="max-w-4xl mx-auto px-5 sm:px-8 py-12">

          <div className="relative">

            <div className="absolute left-[21px] sm:left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />

            <div className="space-y-7">

              {steps.map((step) => (
                <div key={step.number} className="relative flex gap-5 sm:gap-8">

                  <div className="relative z-10 shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-[#11182A] border border-blue-400/40 flex items-center justify-center text-blue-400 font-bold text-sm">
                    {step.number}
                  </div>

                  <div className="flex-1 bg-[#10111D] border border-gray-800 rounded-2xl p-5 sm:p-7 hover:border-blue-400/40 transition">

                    <span className="inline-block text-xs text-blue-300 bg-blue-400/10 border border-blue-400/20 rounded-full px-3 py-1 mb-4">
                      {step.tag}
                    </span>

                    <h2 className="text-white text-lg sm:text-xl font-semibold mb-3">
                      {step.title}
                    </h2>

                    <p className="text-gray-400 text-sm leading-7">
                      {step.description}
                    </p>

                  </div>

                </div>
              ))}

            </div>
          </div>

        </section>

        {/* What you get */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">

          <div className="bg-[#10111D] border border-gray-800 rounded-3xl p-7 sm:p-10">

            <h2 className="font-heading text-3xl sm:text-4xl mb-8">
              What you'll get
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              {[
                "ATS-style match score",
                "Resume skills and job requirements",
                "Strengths and missing skills",
                "Resume quality review",
                "Bullet point improvements",
                "Job-specific suggestions",
                "Project evidence",
                "Prioritized improvement roadmap"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-blue-400 mt-0.5">✦</span>
                  <p className="text-gray-300 text-sm leading-6">{item}</p>
                </div>
              ))}

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 text-center">

          <h2 className="font-heading text-3xl sm:text-4xl">
            Your next application starts here.
          </h2>

          <p className="text-gray-400 text-sm mt-4 mb-8">
            Upload your resume and discover where you stand.
          </p>

          <Link
            to = "/home"
            className="inline-flex px-7 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
          >
            Analyze My Resume
          </Link>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Working;
