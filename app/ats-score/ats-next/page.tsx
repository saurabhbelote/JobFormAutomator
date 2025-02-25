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
            <div className="bg-white text-xs rounded-full px-2 py-0.5 float-right text-black">10 ISSUES FOUND</div>
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
      <div className="bg-[#1a0e2e] min-h-screen text-black">
      <div className="container mx-auto p-4">
        {/* Quantify Impact Header */}
        <div className="p-4">
          <div className="flex items-center mb-2">
            <div className="flex-grow">
              <h2 className="text-white text-lg font-semibold flex items-center">
                <span className="mr-2"></span> QUANTIFY IMPACT
              </h2>
            </div>
            <div className="bg-[#f59e0b] text-xs rounded-full px-2 py-0.5">
              Premium
            </div>
            <div className="ml-2">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <p className="text-white text-sm mb-2">
            Any good resume will show the impact you've had in previous positions you've held.
          </p>
          <p className="text-white text-sm">
            Quantifying your impact on your resume is the key to building a strong application that will get recruiters to pick up the phone and invite you to an interview.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#1e1137] rounded-lg p-6 text-white">
          {/* Icon and Title */}
          <div className="flex flex-col items-center text-center mb-6">
            <div className="bg-[#ff7979] rounded-lg p-3 mb-4 relative">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
              </svg>
              <div className="absolute -top-1 -right-1 bg-white text-red-500 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                ✕
              </div>
            </div>
            <h3 className="font-bold">Oh, no!</h3>
            <p className="font-medium">Your experience section lacks quantifiable achievements</p>
            <p className="text-sm">from</p>
            <p className="font-medium">previous positions you've held.</p>
          </div>

          {/* Bullet Points */}
          <div className="space-y-2 mb-8">
            <div className="bg-white rounded p-3 text-black text-sm flex">
              <div className="text-red-500 mr-2">✕</div>
              <p>Led the development of computer vision solutions for precise body measurement in fashion e-commerce, enhancing user experience and enabling virtual try-on for both men and women.</p>
            </div>

            <div className="bg-white rounded p-3 text-black text-sm flex">
              <div className="text-red-500 mr-2">✕</div>
              <p>Implemented cutting-edge machine learning algorithms to improve prediction accuracy, contributing to the company's goal of providing advanced technology solutions.</p>
            </div>

            <div className="bg-white rounded p-3 text-black text-sm flex">
              <div className="text-red-500 mr-2">✕</div>
              <p>Collaborated with cross-functional teams to integrate computer vision technologies into the company's platform, increasing seamless functionality and user interaction.</p>
            </div>

            <div className="bg-white rounded p-3 text-black text-sm flex">
              <div className="text-red-500 mr-2">✕</div>
              <p>Played a key role in driving innovation within the organization, exploring new technologies and approaches to enhance product offerings and stay ahead of market trends.</p>
            </div>

            <div className="bg-white rounded p-3 text-black text-sm flex">
              <div className="text-red-500 mr-2">✕</div>
              <p>Developed a Chrome Extension to simplify job application processes, enabling users to autoapply to hundreds of jobs daily.</p>
            </div>

            <div className="bg-white rounded p-3 text-black text-sm flex">
              <div className="text-red-500 mr-2">✕</div>
              <p>Enhanced user experience by streamlining repetitive form-filling tasks.</p>
            </div>

            <div className="bg-white rounded p-3 text-black text-sm flex">
              <div className="text-red-500 mr-2">✕</div>
              <p>Implemented a Generative AI to automate responses, saving users time.</p>
            </div>

            <div className="bg-white rounded p-3 text-black text-sm flex">
              <div className="text-red-500 mr-2">✕</div>
              <p>Continuously improved the Chrome Extension to meet user needs and preferences.</p>
            </div>

            <div className="bg-white rounded p-3 text-black text-sm flex">
              <div className="text-red-500 mr-2">✕</div>
              <p>Successfully increased user efficiency and job application rates by enabling the Chrome Extension to autoapply to hundreds of jobs daily, significantly reducing the time spent on job searching.</p>
            </div>
          </div>

          {/* Suggestions Section */}
          <div className="mb-6">
            <p className="text-white mb-4">Here are some suggestions for rewriting your bullets:</p>
            
            <div className="space-y-2">
              <div className="bg-[#1a0e2e] rounded p-3 flex items-center">
                <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="h-3 bg-gray-500 rounded-full w-full"></div>
              </div>

              <div className="bg-teal-50 rounded-lg p-6 text-center">
                <h3 className="text-teal-800 font-medium mb-4">Automatically rewrite my bullets with Enhancv Pro</h3>
                <button className="bg-teal-500 hover:bg-teal-600 text-white text-sm py-2 px-4 rounded">
                  For Bullets Only
                </button>
              </div>

              <div className="bg-[#1a0e2e] rounded p-3 flex items-center">
                <div className="bg-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="h-3 bg-gray-500 rounded-full w-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Pro Features Banner */}
        <div className="bg-[#ffefd5] rounded-lg p-6 mt-6 flex">
          <div className="flex-grow">
            <div className="flex items-center mb-2">
              <div className="bg-yellow-500 text-white rounded-lg p-1 mr-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="font-semibold">With Enhancv's PRO report, you get:</p>
            </div>
            <ul className="list-none space-y-1 ml-4">
              <li className="flex items-start">
                <span className="text-yellow-700 mr-2">•</span>
                <span className="text-sm">A complete professional-grade resume checker report</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-700 mr-2">•</span>
                <span className="text-sm">Ready to use suggestions for improving your resume</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-700 mr-2">•</span>
                <span className="text-sm">Over 1000 industry-leading resume templates and samples</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-700 mr-2">•</span>
                <span className="text-sm">Enhancv's resume and cover letter builder</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-700 mr-2">•</span>
                <span className="text-sm">Resume tailoring based on a job ad you provide</span>
              </li>
            </ul>
          </div>
          <div className="w-1/4 flex items-center justify-center">
            <div className="w-24 h-24 relative">
              <div className="absolute inset-0 bg-yellow-200 rounded-full"></div>
              <div className="absolute inset-2 bg-yellow-100 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 19l9-5-9-5-9 5 9 5z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#1a0e2e] min-h-screen p-6 text-black">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-white text-xl font-semibold mb-6">Examples that quantify impact</h2>
        
        {/* Good Examples Section */}
        <div className="mb-8">
          <h3 className="text-green-400 text-sm font-semibold uppercase mb-4">GOOD EXAMPLE</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 mr-3 text-green-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white">
                Achieved 40% product revenue growth in three months by planning and launching four new key features.
              </p>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-3 text-green-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-white">
                Improved state test pass rates from 78% to 87% in two years.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bad Examples Section */}
        <div className="mb-8">
          <h3 className="text-red-400 text-sm font-semibold uppercase mb-4">BAD EXAMPLES</h3>
          
          <div className="space-y-4">
            <div className="flex">
              <div className="flex-shrink-0 mr-3 text-red-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-white">
                Created a conducive learning environment.
              </p>
            </div>
            
            <div className="flex">
              <div className="flex-shrink-0 mr-3 text-red-400">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <p className="text-white">
                Responsible for preparing financial reports including budget performance.
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQs Section */}
        <div className="bg-[#1e1137] rounded-lg p-6">
          <h3 className="text-white text-lg font-semibold mb-6">FAQs</h3>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div>
              <div className="flex items-start mb-2">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-teal-400 font-semibold">What if I'm not in a number-focused role?</h4>
                </div>
              </div>
              
              <div className="ml-9 text-white text-sm space-y-3">
                <p>
                  It's common to think that only people in finance and sales can have a quantifier in their bullets. Although that's not true as every role has something to quantify.
                </p>
                <p>
                  If you think outside of the financial impact of your work, you can find numbers in almost every activity. For example, if you "worked in an international team", you can write "worked in an international team of 50+ people". Using numbers in your resume gives recruiters the ability to grasp the scale you've worked at.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div>
              <div className="flex items-start mb-2">
                <div className="flex-shrink-0 mt-1">
                  <div className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-3">
                  <h4 className="text-teal-400 font-semibold">How do I add numbers in my bullets?</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#1a0e2e] min-h-screen p-6 text-black">
      <div className="container mx-auto max-w-3xl">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-xl font-semibold">REPETITION</h2>
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </div>

        {/* Explanation Text */}
        <div className="mb-6">
          <p className="text-white text-sm mb-2">
            Using the same words over and over again in your resume can be perceived as a sign of poor language understanding.
          </p>
          <p className="text-white text-sm">
            Instead, use synonyms and active verbs that increase the impact of your achievements.
          </p>
        </div>

        {/* Main Content Box */}
        <div className="bg-[#1e1137] rounded-lg p-6 mb-6 text-white">
          {/* Success Icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="w-12 h-12 bg-[#1e1137] border border-teal-500 transform rotate-45"></div>
              <div className="absolute inset-0 w-10 h-10 m-auto bg-teal-500 rounded-md flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-6">
            <h3 className="font-semibold text-xl mb-2">Good job!</h3>
            <p className="text-lg">No frequently repeated words found in your resume.</p>
          </div>

          {/* Call to Action */}
          <div className="bg-teal-50 rounded-lg p-6 text-center">
            <h3 className="text-teal-800 font-medium mb-4">Job-Winning Resume In Minutes</h3>
            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md">
              Create an Enhancv Resume
            </button>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="bg-[#1e1137] rounded-lg p-6">
          <h3 className="text-white text-lg font-semibold mb-6">FAQs</h3>
          
          <div>
            <div className="flex items-start mb-2">
              <div className="flex-shrink-0 mt-1">
                <div className="bg-teal-500 w-6 h-6 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <h4 className="text-teal-400 font-semibold">Is repetition necessarily a bad thing</h4>
              </div>
            </div>
            
            <div className="ml-9 text-white text-sm">
              <p>
                It's normal to repeat yourself throughout your resume, but over-repeating is something you want to avoid. It makes a resume less compelling and it creates an impression of a low vocabulary level. Try using synonyms when you repeat words frequently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ResumeAnalyzerPage;