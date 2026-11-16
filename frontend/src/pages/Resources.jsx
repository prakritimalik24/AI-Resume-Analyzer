
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const resourceSections = [
  {
    number: "01",
    category: "Resume Basics",
    title: "Build an ATS-friendly resume",
    description:
      "Keep your resume structured, readable and easy for applicant tracking systems to parse.",
    tips: [
      "Use clear section headings like Education, Skills and Projects.",
      "Prefer simple layouts over complex tables and graphics.",
      "Use consistent formatting and readable fonts.",
      "Include relevant keywords from the job description."
    ]
  },
  {
    number: "02",
    category: "Project Presentation",
    title: "Make your projects stand out",
    description:
      "Your projects demonstrate how you apply technical knowledge to solve real problems.",
    tips: [
      "Start with a strong action verb.",
      "Mention the technologies and tools you used.",
      "Explain what problem your project solves.",
      "Highlight measurable results wherever possible."
    ]
  },
  {
    number: "03",
    category: "Skill Optimization",
    title: "Showcase relevant skills",
    description:
      "A targeted skills section helps recruiters quickly understand your technical capabilities.",
    tips: [
      "Group related skills into meaningful categories.",
      "Prioritize skills relevant to the target role.",
      "Mention tools and frameworks you have actually used.",
      "Avoid listing technologies you cannot explain."
    ]
  },
  {
    number: "04",
    category: "Job Applications",
    title: "Tailor your resume for every role",
    description:
      "A generic resume may not communicate why you are a strong match for a particular opportunity.",
    tips: [
      "Read the job description carefully.",
      "Identify required and preferred qualifications.",
      "Highlight relevant projects and experience.",
      "Use accurate keywords that reflect your actual skills."
    ]
  }
];

const actionVerbs = [
  "Developed",
  "Designed",
  "Implemented",
  "Optimized",
  "Built",
  "Automated",
  "Integrated",
  "Engineered",
  "Analyzed",
  "Collaborated",
  "Deployed",
  "Improved"
];

function Resources() {
  return (
    <div className="min-h-screen bg-[#080810] text-white">
      <Navbar />

      <main className="pt-28 sm:pt-32">

        {/* Hero */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 sm:py-20 text-center">

          <p className="text-blue-400 text-xs font-semibold tracking-[0.25em] uppercase mb-5">
            Resource Center
          </p>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl leading-tight">
            Everything you need
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              to build a better resume.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-gray-400 text-sm sm:text-base mt-6 leading-8">
            Explore practical tips, resume-writing strategies and useful
            insights to make your next application stronger.
          </p>

        </section>

        {/* Resource Cards */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12">

          <div className="mb-9">
            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Learn & Improve
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl">
              Resume improvement guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

            {resourceSections.map((resource) => (
              <article
                key={resource.number}
                className="bg-[#10111D] border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-blue-400/40 transition"
              >

                <div className="flex items-center justify-between mb-6">

                  <span className="text-blue-400 text-sm font-semibold">
                    {resource.number}
                  </span>

                  <span className="text-xs text-gray-400 border border-gray-700 rounded-full px-3 py-1">
                    {resource.category}
                  </span>

                </div>

                <h3 className="text-white text-xl font-semibold mb-3">
                  {resource.title}
                </h3>

                <p className="text-gray-400 text-sm leading-7 mb-6">
                  {resource.description}
                </p>

                <div className="border-t border-gray-800 pt-5">

                  <p className="text-gray-300 text-xs font-semibold uppercase tracking-wider mb-4">
                    Quick Tips
                  </p>

                  <ul className="space-y-3">

                    {resource.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">

                        <span className="text-blue-400 mt-0.5">✦</span>

                        <span className="text-gray-400 text-sm leading-6">
                          {tip}
                        </span>

                      </li>
                    ))}

                  </ul>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* Action Verbs */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12">

          <div className="bg-[#10111D] border border-gray-800 rounded-3xl p-7 sm:p-10">

            <p className="text-blue-400 text-xs font-semibold tracking-widest uppercase mb-3">
              Writing Better Bullet Points
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl mb-4">
              Use stronger action verbs.
            </h2>

            <p className="text-gray-400 text-sm leading-7 max-w-2xl mb-8">
              Start your resume bullet points with clear action verbs to
              communicate your contributions and responsibilities.
            </p>

            <div className="flex flex-wrap gap-3">

              {actionVerbs.map((verb) => (
                <span
                  key={verb}
                  className="px-4 py-2 rounded-full bg-[#080810] border border-blue-400/20 text-blue-300 text-sm"
                >
                  {verb}
                </span>
              ))}

            </div>

          </div>

        </section>

        {/* Bullet Formula */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 py-12">

          <div className="bg-gradient-to-br from-[#11182A] to-[#151124] border border-gray-800 rounded-3xl p-7 sm:p-10">

            <p className="text-violet-400 text-xs font-semibold tracking-widest uppercase mb-3">
              A Simple Formula
            </p>

            <h2 className="font-heading text-3xl sm:text-4xl mb-6">
              Write better project descriptions.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="bg-[#080810]/70 rounded-xl p-5">
                <p className="text-blue-400 text-xs font-semibold mb-3">
                  ACTION
                </p>
                <p className="text-white font-semibold">
                  What did you build?
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Start with a strong action verb.
                </p>
              </div>

              <div className="bg-[#080810]/70 rounded-xl p-5">
                <p className="text-violet-400 text-xs font-semibold mb-3">
                  TECHNOLOGY
                </p>
                <p className="text-white font-semibold">
                  How did you build it?
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Mention relevant tools and technologies.
                </p>
              </div>

              <div className="bg-[#080810]/70 rounded-xl p-5">
                <p className="text-green-400 text-xs font-semibold mb-3">
                  IMPACT
                </p>
                <p className="text-white font-semibold">
                  What did it achieve?
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Highlight outcomes and measurable results.
                </p>
              </div>

            </div>

            <div className="mt-6 border border-gray-700 rounded-xl p-5">

              <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">
                Example
              </p>

              <p className="text-gray-200 text-sm leading-7">
                Developed a responsive movie discovery application using
                React and Tailwind CSS, integrating a movie API to display
                searchable movie information.
              </p>

            </div>

          </div>

        </section>

        {/* CTA */}
        <section className="max-w-5xl mx-auto px-5 sm:px-8 py-16 text-center">

          <h2 className="font-heading text-3xl sm:text-4xl">
            Put these tips into practice.
          </h2>

          <p className="text-gray-400 text-sm mt-4 mb-8">
            Get a personalized analysis of your resume with ResuMate.
          </p>

          <Link
            to="/home"
            className="inline-flex px-7 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 transition font-semibold"
          >
            Analyze Your Resume
          </Link>

        </section>

      </main>

      <Footer />
    </div>
  );
}

export default Resources;
