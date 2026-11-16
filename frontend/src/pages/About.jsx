
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const features = [
  {
    number: "01",
    title: "Smart Resume Analysis",
    description:
      "Get an AI-powered breakdown of your resume, including skills, strengths, weaknesses and areas that need improvement."
  },
  {
    number: "02",
    title: "ATS Match Score",
    description:
      "Understand how closely your resume aligns with a particular job description through weighted skill matching."
  },
  {
    number: "03",
    title: "Personalized Suggestions",
    description:
      "Get actionable recommendations to improve your resume and make it more relevant to your target role."
  },
  {
    number: "04",
    title: "Project & Skill Insights",
    description:
      "Discover how your technical skills and project experience relate to the requirements of a job."
  }
];

function About() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <Navbar />

      <main className="pt-28 sm:pt-32">

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16 sm:py-24 text-center">

          <p className="text-blue-400 text-sm font-semibold tracking-[0.25em] uppercase mb-5">
            About ResuMate
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Your Resume's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Smartest Mate.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base leading-8 mt-7">
            ResuMate helps you understand how your resume performs against
            a job description. Get meaningful insights, identify skill gaps
            and discover ways to present your experience more effectively.
          </p>

          <Link
            to="/home"
            className="inline-flex mt-9 px-7 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition text-white font-semibold"
          >
            Analyze Your Resume
          </Link>

        </section>

        {/* Mission */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 pb-16">

          <div className="bg-[#10111D] border border-gray-800 rounded-3xl p-7 sm:p-12">

            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-4">
              Our Mission
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl mb-6">
              Your experience deserves to be noticed.
            </h2>

            <p className="text-gray-400 leading-8 text-sm sm:text-base max-w-3xl">
              A good resume is more than a list of skills and qualifications.
              It is a way to communicate your potential. ResuMate aims to make
              resume analysis easier by connecting your experience with the
              expectations of the roles you want to pursue.
            </p>

          </div>

        </section>

        {/* Features */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">

          <div className="mb-10">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              What We Offer
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl">
              More than just a match score.
            </h2>

            <p className="text-gray-400 text-sm mt-4 max-w-xl leading-7">
              Understand your resume from multiple perspectives and get
              insights that help you improve it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            {features.map((feature) => (
              <div
                key={feature.number}
                className="bg-[#10111D] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-blue-400/40 transition"
              >
                <span className="text-blue-400 text-sm font-semibold">
                  {feature.number}
                </span>

                <h3 className="text-white text-xl font-semibold mt-5 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7">
                  {feature.description}
                </p>
              </div>
            ))}

          </div>

        </section>

        {/* Closing CTA */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-16">

          <div className="text-center bg-gradient-to-br from-[#11182A] to-[#151124] border border-gray-800 rounded-3xl p-8 sm:p-14">

            <h2 className="font-heading text-3xl sm:text-4xl">
              Ready to make your resume stand out?
            </h2>

            <p className="text-gray-400 text-sm mt-4 mb-8">
              Take the next step towards a more targeted resume.
            </p>

            <Link
              to="/home"
              className="inline-flex px-7 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
            >
              Get Started
            </Link>

          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default About;
