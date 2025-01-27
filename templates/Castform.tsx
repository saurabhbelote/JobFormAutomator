import React from "react";

export default function Castform() {
  return (
    <div className="bg-black p-8 min-h-screen">
      {/* left side */}
      <div className="w-1/4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Amruth Pillai</h1>
          <p className="text-purple-600">Full Stack Web Developer</p>
        </div>
        <div>
          <div>Profile</div>
          <span>Address</span>
          <span>Website</span>
          <span>Email</span>
          <span>LinkedIn</span>
        </div>
      </div>
      <div className="w-3/4 mx-auto bg-white shadow-md rounded-lg p-8">
        {/* Header */}
        <div className="flex justify-between items-center border-b pb-4">
          <div className="text-right text-gray-600">
            <p>#5/A, Banashankari Nivas</p>
            <p>Bangalore, India - 560061</p>
            <p>Email: amruthpillai@gmail.com</p>
            <p>Phone: +91 98453 36113</p>
          </div>
        </div>

        {/* Objective */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Objective</h2>
          <p className="mt-2 text-gray-600">
            To obtain a job within my chosen field that will challenge me and
            allow me to use my education, skills, and past experiences in a way
            that is mutually beneficial to both myself and my employer and allow
            for future growth and advancement.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">
            Work Experience
          </h2>
          <div className="mt-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                On Point Electronics, NYC, NY
              </h3>
              <p className="text-sm text-gray-600">
                Customer Service Representative
              </p>
              <p className="text-sm text-gray-500">
                (January 2013 – July 2018)
              </p>
              <ul className="list-disc ml-6 mt-2 text-gray-600">
                <li>
                  Organized customer information and account data for business
                  planning and customer service purposes.
                </li>
                <li>Created Excel spreadsheets to track customer data.</li>
                <li>Received 97% positive customer survey results.</li>
                <li>
                  <strong>Key Achievement:</strong> Designed and executed an
                  automated system for customer follow-ups.
                </li>
              </ul>
            </div>
            {/* Add more jobs similarly */}
          </div>
        </div>

        {/* Education */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Education</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              The City College of New York, NYC, NY
            </h3>
            <p className="text-sm text-gray-600">Masters Computer Science</p>
            <p className="text-sm text-gray-500">
              (September 2001 – August 2002)
            </p>
            <p className="text-sm text-gray-500">GPA: 7.2</p>
          </div>
          {/* Add more education entries similarly */}
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Skills</h2>
          <div className="grid grid-cols-2 gap-4 mt-4 text-gray-600">
            <p>Customer Service Expertise: Advanced</p>
            <p>High-Volume Call Center: Intermediate</p>
            <p>Team Leader/Problem Solver: Intermediate</p>
            <p>Call Center Management: Novice</p>
            {/* Add more skills here */}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">Projects</h2>
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Reactive Resume
            </h3>
            <p className="text-sm text-gray-600">
              A free and open-source resume builder that focuses on minimalistic
              UI/UX and portability.
            </p>
            <a
              href="https://github.com/AmruthPillai/Reactive-Resume"
              className="text-purple-600 underline"
            >
              GitHub Repository
            </a>
          </div>
          {/* Add more projects here */}
        </div>

        {/* References */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-700">References</h2>
          <div className="mt-4">
            <p className="text-sm text-gray-600">
              Willy Wonka - CEO at Chocolate Factory
            </p>
            <p className="text-sm text-gray-600">
              Email: willywonka@goldenticket.com
            </p>
            <p className="text-sm text-gray-600">Phone: +1 (802) 234-2398</p>
          </div>
          {/* Add more references similarly */}
        </div>
      </div>
    </div>
  );
}
