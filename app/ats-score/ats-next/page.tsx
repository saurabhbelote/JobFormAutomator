import React from 'react';

const ResumeAnalyzerPage: React.FC = () => {
  return (
    <div className="bg-[#1a0e2e] min-h-screen text-black">
      <div className="container mx-auto p-4 flex flex-wrap">
        {/* Left Column - Score Card */}
        <div className="w-full md:w-1/4 p-4">
          <div className="bg-[#1a112e] rounded-lg p-6 text-white">
            <h2 className="text-center font-semibold mb-2">Your Score</h2>
            <div className="text-center font-bold text-2xl text-[#f59e0b]">70/100</div>
            <div className="text-center text-sm mb-6">23 Issues</div>
            
            <hr className="border-gray-700 my-4" />
            
            {/* Content Section */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm uppercase font-semibold">Content</span>
                <div className="bg-[#f59e0b] text-xs rounded-full px-2 py-0.5">PASS</div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center">
                  <span className="text-sm flex-grow">ATS Parse Rate</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                <div className="flex items-center">
                  <span className="text-sm flex-grow">Quantifying Impact</span>
                </div>
                <div className="flex items-center">
                  <span className="text-sm flex-grow">Repetition</span>
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="flex items-center">
                  <span className="text-sm flex-grow">Spelling & Grammar</span>
                </div>
              </div>
            </div>
            
            {/* Format Section */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm uppercase font-semibold">Format</span>
                <div className="bg-[#f59e0b] text-xs rounded-full px-2 py-0.5">PASS</div>
              </div>
            </div>
            
            {/* Sections */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm uppercase font-semibold">Sections</span>
                <div className="bg-[#f59e0b] text-xs rounded-full px-2 py-0.5">PASS</div>
              </div>
            </div>
            
            {/* Skills */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm uppercase font-semibold">Skills</span>
                <div className="bg-green-500 text-xs rounded-full px-2 py-0.5">PASS</div>
              </div>
            </div>
            
            {/* Style */}
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm uppercase font-semibold">Style</span>
                <div className="bg-[#f59e0b] text-xs rounded-full px-2 py-0.5">PASS</div>
              </div>
            </div>
            
            {/* Unlock Button */}
            <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md flex items-center justify-center mt-4">
              <span>Unlock Full Report</span>
              <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Column - Main Content */}
        <div className="w-full md:w-3/4 p-4">
          {/* ATS Parse Rate Section */}
          <div className="bg-[#1a112e] rounded-lg p-6 mb-6 text-white">
            <h2 className="text-xl font-semibold mb-4">CONTENT</h2>
            <div className="bg-white text-xs rounded-full px-2 py-0.5 float-right">10 ISSUES FOUND</div>
            <div className="clear-both"></div>
            
            <h3 className="text-xl font-semibold mt-6">ATS PARSE RATE</h3>
            <p className="mt-4 text-sm">
              An <strong>Applicant Tracking System</strong> commonly referred to as <strong>ATS</strong> is a system used by employers and recruiters to quickly scan a large number of job applications.
            </p>
            <p className="mt-4 text-sm">
              A high parse rate of your resume ensures that the ATS can read your resume, experience, and skills. This increases the chance of getting your resume seen by recruiters.
            </p>
            
            {/* Progress Bar */}
            <div className="mt-8 relative">
              <div className="h-2 bg-gray-700 rounded-full">
                <div className="h-2 bg-teal-500 rounded-full w-full"></div>
              </div>
              <div className="absolute right-0 -top-1">
                <div className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Success Message */}
            <div className="text-center mt-8">
              <h3 className="text-xl font-semibold">Great!</h3>
              <p className="mt-2">
                We parsed 100% of your resume successfully using our industry-leading ATS.
              </p>
            </div>
            
            {/* Call to Action */}
            <div className="mt-8 bg-teal-50 rounded-lg p-6">
              <h3 className="text-center text-teal-800 font-semibold">Job-Winning Resume In Minutes</h3>
              <div className="flex justify-center mt-4">
                <button className="bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2 px-4 rounded-md">
                  Create an Enhance Resume
                </button>
              </div>
            </div>
          </div>
          
          {/* FAQs */}
          <div className="bg-[#1a112e] rounded-lg p-6 text-white">
            <h2 className="text-xl font-semibold mb-6">FAQs</h2>
            
            <div className="mb-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">1</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-teal-400">What is an ATS-compliant resume?</h3>
                  <p className="mt-2 text-sm">
                    An ATS-compliant resume is one that can be easily scanned and interpreted by an applicant tracking system (ATS). This means that your resume should be formatted clearly, with relevant keywords included.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">2</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-teal-400">How do I make an ATS-compatible resume?</h3>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="flex">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">3</span>
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-teal-400">What if my resume is not parsed properly?</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAnalyzerPage;