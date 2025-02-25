import React from 'react';
import Image from 'next/image';


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
    <div className="min-h-screen bg-[#1A0B2E] text-white p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <span className="mr-2">📝</span>
            <h1 className="text-lg font-medium">SPELLING & GRAMMAR</h1>
          </div>
          <div className="bg-orange-400 text-white rounded-full px-3 py-1 flex items-center text-sm">
            <span className="mr-1">✨</span>
            <span>PREMIUM</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm mb-3">
          Having an error-free resume is key to making a good first impression on the hiring manager. Ensure that your resume is free from spelling and grammatical errors by reading it aloud a few times.
        </p>
        <p className="text-sm mb-6">
          For an extra layer of security, use the Enhancv resume builder and let the content checker do the heavy lifting for you.
        </p>

        {/* Error card */}
        <div className="bg-[#2D1B48] rounded-lg p-6 mb-6">
          <div className="flex flex-col items-center mb-6">
            <div className="bg-[#E55B77] h-16 w-16 rounded-lg flex items-center justify-center mb-4">
              <div className="relative">
                <div className="text-xl font-bold">abc</div>
                <div className="absolute -top-1 -right-2 bg-white text-[#E55B77] rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold">?</div>
              </div>
            </div>
            <p className="text-center font-medium">Oh, no!</p>
            <p className="text-center">We found the following spelling mistakes in your resume:</p>
          </div>

          {/* Resume preview with errors */}
          <div className="relative mb-6">
            <div className="bg-white rounded p-4 relative">
              {/* Error markers */}
              <div className="absolute -left-4 top-6 bg-red-400 text-white rounded-full h-6 w-6 flex items-center justify-center">✕</div>
              <div className="absolute -left-4 top-20 bg-red-400 text-white rounded-full h-6 w-6 flex items-center justify-center">✕</div>
              <div className="absolute -left-4 top-36 bg-red-400 text-white rounded-full h-6 w-6 flex items-center justify-center">✕</div>
              
              {/* PRO overlay */}
              <div className="bg-[#b8f3ed] text-[#077665] p-4 text-center rounded">
                <p className="font-medium mb-2">Fix my spelling & grammar mistakes with Enhancv PRO</p>
                <button className="bg-[#0DBF9B] text-white px-4 py-2 rounded">Fix Mistakes</button>
              </div>
            </div>
          </div>

          {/* PRO features */}
          <div className="bg-[#F8E3C5] text-black rounded-lg p-4 flex">
            <div className="flex-1">
              <div className="flex items-center mb-2">
                <span className="bg-black text-white p-1 rounded mr-2 text-xs">🔥</span>
                <p className="font-medium">With Enhancv's PRO report, you get:</p>
              </div>
              <ul className="text-sm space-y-1 mb-2">
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>A complete professional-grade resume checker report</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Ready to use suggestions for improving your resume</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Over 1000 industry-leading resume templates and samples</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Enhancv's resume and cover letter builder</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-orange-500">•</span>
                  <span>Resume tailoring based on a job ad you provide</span>
                </li>
              </ul>
            </div>
            <div className="w-24 flex items-end">
              <Image 
                src="/illustration.png" 
                alt="Person illustration"
                width={100}
                height={100}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-[#2D1B48] rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">FAQs</h2>
          
          <div className="mb-4">
            <div className="flex mb-2">
              <div className="bg-teal-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">1</div>
              <p className="font-medium text-teal-400">Is incorrect spelling unprofessional?</p>
            </div>
            <p className="text-sm pl-8">
              With modern technology and all the spellcheckers out there, having a spelling mistake on your resume can be interpreted as an unprofessional and sometimes disrespectful thing. Make sure you use a real-time content analyzer to prevent making mistakes on your resume. Enhancv's resume builder analyses and shows your mistakes at the moment of their appearance to avoid you sending an unprofessional resume.
            </p>
          </div>
          
          <div>
            <div className="flex mb-2">
              <div className="bg-teal-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">2</div>
              <p className="font-medium text-teal-400">How many spelling errors are acceptable on a resume?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="min-h-screen bg-[#1A0B2E] text-white p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="bg-blue-500 rounded-full h-6 w-6 flex items-center justify-center mr-2">
              <span className="text-xs">📄</span>
            </div>
            <h1 className="text-lg font-medium">FORMAT & BREVITY</h1>
          </div>
          <div className="bg-white text-black rounded-full px-4 py-1 text-sm">
            1 ISSUE FOUND
          </div>
        </div>

        {/* File Format & Size Section */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-medium">📃FILE FORMAT & SIZE</h2>
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9l-7 7-7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          
          <p className="text-sm mb-3">
            When you're uploading your resume in platforms like Indeed, you're likely to meet a file size limit. Ideally, your resume should be less than 2MB in size. Anything larger will most likely not be accepted on majority of platforms.
          </p>
          <p className="text-sm mb-6">
            Your file type also plays an important role in ATS screening. PDF files are preferred as the text can be easily read by the applicant tracking system. Avoid DOCX, PNG or JPG files.
          </p>
        </div>

        {/* Success Card */}
        <div className="bg-[#2D1B48] rounded-lg p-6 mb-6">
          <div className="flex flex-col items-center mb-6">
            <div className="mb-4">
              <div className="relative">
                <div className="w-16 h-16">
                  <div className="absolute inset-0">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="10" y="8" width="40" height="50" rx="2" fill="#FFFFFF" />
                      <rect x="16" y="16" width="28" height="2" rx="1" fill="#E0E0E0" />
                      <rect x="16" y="22" width="28" height="2" rx="1" fill="#E0E0E0" />
                      <rect x="16" y="28" width="20" height="2" rx="1" fill="#E0E0E0" />
                    </svg>
                  </div>
                  <div className="absolute -right-2 -bottom-2 bg-green-400 rounded-full w-8 h-8 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 8L7 12L13 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center font-medium">Good job!</p>
            <p className="text-center">Your resume file is 52 KB and your file type is PDF.</p>
          </div>

          {/* Create Resume CTA */}
          <div className="bg-[#b8f3ed] text-black p-4 text-center rounded">
            <p className="font-medium mb-4">Job-Winning Resume In Minutes</p>
            <button className="bg-[#0DBF9B] text-white px-6 py-2 rounded w-56">
              Create an Enhancv Resume
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-[#2D1B48] rounded-lg p-6">
          <h2 className="text-lg font-medium mb-4">FAQs</h2>
          
          <div className="mb-6">
            <div className="flex mb-2">
              <div className="bg-teal-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">●</div>
              <p className="font-medium text-teal-400">What's the maximum size I can use for my resume file?</p>
            </div>
            <p className="text-sm pl-8">
              The common file size limit for website uploads is under 2MB. If your resume is too large, we recommend using a platform like Enhancv that will compress the visual elements and produce a low-size, high-quality result.
            </p>
          </div>
          
          <div>
            <div className="flex mb-2">
              <div className="bg-teal-500 text-white rounded-full h-6 w-6 flex items-center justify-center mr-2">●</div>
              <p className="font-medium text-teal-400">Why is PDF the preferred format?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>//
  );
};

export default ResumeAnalyzerPage;