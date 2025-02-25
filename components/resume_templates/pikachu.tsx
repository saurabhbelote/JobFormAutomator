"use client";

// pages/index.tsx
import Head from 'next/head';
import { FaPhone, FaGlobe, FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useEffect, useState } from 'react';

export default function Resume() {
  const [imageError, setImageError] = useState(false);
  
  return (
    <div className="bg-gray-100 min-h-screen p-4 flex justify-center">
      <Head>
        <title>Amruth Pillai - Resume</title>
        <meta name="description" content="Full Stack Web Developer Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="bg-white shadow-lg max-w-5xl w-full text-black">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row">
          {/* Profile Picture */}
          <div className="w-full md:w-1/4 bg-white p-6 flex justify-center">
            <div className="w-48 h-48 rounded-full overflow-hidden bg-gray-200">
              {imageError ? (
                <svg
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <circle cx="100" cy="70" r="40" fill="#CBD5E0" />
                  <circle cx="100" cy="220" r="100" fill="#CBD5E0" />
                </svg>
              ) : (
                <img 
                  src="/profile.jpg" 
                  alt="Amruth Pillai" 
                  className="w-full h-full object-cover"
                  onError={() => setImageError(true)}
                />
              )}
            </div>
          </div>
          
          {/* Header Info */}
          <div className="w-full md:w-3/4 bg-pink-600 text-white p-6">
            <h1 className="text-4xl font-bold">Amruth Pillai</h1>
            <h2 className="text-xl mb-6">Full Stack Web Developer</h2>
            <p className="mb-4">
              To obtain a job within my chosen field that will challenge me and allow me to use my 
              education, skills and past experiences in a way that is mutually beneficial to both myself 
              and my employer and allow for future growth and advancement.
            </p>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex flex-col md:flex-row">
          {/* Left Column */}
          <div className="w-full md:w-1/4 p-6 text-black">
            {/* Contact Info */}
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <FaPhone className="text-pink-600 mr-2" />
                <span>+91 98453 36113</span>
              </div>
              <div className="flex items-center mb-2">
                <FaGlobe className="text-pink-600 mr-2" />
                <span>amruthpillai.com</span>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-pink-600 mr-2" />
                <span>hello@amruthpillai.com</span>
              </div>
              <div className="flex items-center mb-2">
                <FaGithub className="text-pink-600 mr-2" />
                <span>AmruthPillai</span>
              </div>
              <div className="flex items-center mb-2">
                <FaTwitter className="text-pink-600 mr-2" />
                <span>KingOKings</span>
              </div>
              <div className="flex items-center mb-2">
                <FaLinkedin className="text-pink-600 mr-2" />
                <span>AmruthPillai</span>
              </div>
            </div>
            
            {/* Skills Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">SKILLS</h3>
              <div className="mb-4">
                <h4 className="font-bold">Customer Service</h4>
                <p className="text-sm">Advanced</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Team Leader/Problem Solver</h4>
                <p className="text-sm">Intermediate</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Teambuilding & Training</h4>
                <p className="text-sm">Novice</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">High-Volume Call Center</h4>
                <p className="text-sm">Intermediate</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Call Center Management</h4>
                <p className="text-sm">Novice</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Continuous Improvement</h4>
                <p className="text-sm">Fundamental Awareness</p>
              </div>
            </div>
            
            {/* Languages Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">LANGUAGES</h3>
              <div className="mb-4">
                <h4 className="font-bold">English</h4>
                <p className="text-sm">Very Fluent</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Kannada</h4>
                <p className="text-sm">Native Tongue</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Tamil</h4>
                <p className="text-sm">Native Tongue</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">German</h4>
                <p className="text-sm">Learning on Duolingo</p>
              </div>
            </div>
            
            {/* Hobbies Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">HOBBIES</h3>
              <ul>
                <li className="mb-1">Poetry</li>
                <li className="mb-1">Travelling</li>
                <li className="mb-1">Photography</li>
                <li className="mb-1">Playing Badminton</li>
                <li className="mb-1">Developing Reactive Resume</li>
              </ul>
            </div>
            
            {/* Awards Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">AWARDS</h3>
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-bold">International Flutter Hackathon</h4>
                  <span className="text-sm">April 2019</span>
                </div>
                <p className="text-sm">Google</p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-bold">Venturesity Banyan Hack</h4>
                  <span className="text-sm">June 2016</span>
                </div>
                <p className="text-sm">Venturesity</p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-bold">Smart India Hackathon</h4>
                  <span className="text-sm">April 2017</span>
                </div>
                <p className="text-sm">Govt. of India</p>
              </div>
            </div>
            
            {/* Certifications Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">CERTIFICATIONS</h3>
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-bold">CCNP</h4>
                  <span className="text-sm">February 2018</span>
                </div>
                <p className="text-sm">Cisco Systems</p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-bold">VCP6-DCV</h4>
                  <span className="text-sm">June 2019</span>
                </div>
                <p className="text-sm">VMWare</p>
              </div>
              <div className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-bold">DCUCI 642-999</h4>
                  <span className="text-sm">April 2014</span>
                </div>
                <p className="text-sm">Cisco Systems</p>
              </div>
            </div>
          </div>
          
          {/* Right Column */}
          <div className="w-full md:w-3/4 p-6 text-black">
            {/* Work Experience */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">WORK EXPERIENCE</h3>
              
              {/* Job 1 */}
              <div className="mb-6">
                <div className="flex justify-between flex-wrap">
                  <h4 className="text-xl font-bold">On Point Electronics, NYC, NY</h4>
                  <span className="text-sm md:text-base">(January 2013 — July 2018)</span>
                </div>
                <p className="italic mb-2">Customer Service Representative</p>
                <ul className="list-disc ml-5 mb-2">
                  <li>Organized customer information and account data for business planning and customer service purposes.</li>
                  <li>Created excel spreadsheets to track customer data and perform intense reconciliation process.</li>
                  <li>Received 97% positive customer survey results.</li>
                  <li>Speed on calls was 10% above team average.</li>
                </ul>
                <p><span className="font-bold">Key Achievement:</span> Designed and executed an automatized system for following up with customers, increasing customer retention by 22%.</p>
              </div>
              
              {/* Job 2 */}
              <div className="mb-6">
                <div className="flex justify-between flex-wrap">
                  <h4 className="text-xl font-bold">Excelsior Communications, NYC, NY</h4>
                  <span className="text-sm md:text-base">(October 2009 — December 2012)</span>
                </div>
                <p className="italic mb-2">Customer Service Representative</p>
                <ul className="list-disc ml-5 mb-2">
                  <li>Worked as a full time customer service rep in a high volume call center.</li>
                  <li>Received "Associate of the Month" award six times.</li>
                  <li>Chosen as an example for other associates in trainings.</li>
                </ul>
                <p><span className="font-bold">Key Achievement:</span> Received Customer Appreciation bonus in three of four years.</p>
              </div>
              
              {/* Job 3 */}
              <div className="mb-6">
                <div className="flex justify-between flex-wrap">
                  <h4 className="text-xl font-bold">Pizza Hut, Newark, NJ</h4>
                  <span className="text-sm md:text-base">(August 2005 — September 2009)</span>
                </div>
                <p className="italic mb-2">Waiter</p>
                <ul className="list-disc ml-5 mb-2">
                  <li>Worked passionately in customer service in a high volume restaurant.</li>
                  <li>Completed the FAST customer service training class.</li>
                  <li>Maintained a high tip average thanks to consistent customer satisfaction.</li>
                </ul>
              </div>
            </div>
            
            {/* Education */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">EDUCATION</h3>
              
              {/* Education 1 */}
              <div className="mb-6">
                <div className="flex justify-between flex-wrap">
                  <h4 className="text-xl font-bold">The City College of New York, NYC, NY</h4>
                  <span className="text-sm md:text-base">(September 2001 — August 2002)</span>
                </div>
                <div className="flex justify-between">
                  <p className="italic">Masters Computer Science</p>
                  <span>7.2 CGPA</span>
                </div>
              </div>
              
              {/* Education 2 */}
              <div className="mb-6">
                <div className="flex justify-between flex-wrap">
                  <h4 className="text-xl font-bold">University of California, Berkeley, CA</h4>
                  <span className="text-sm md:text-base">(September 1997 — August 2001)</span>
                </div>
                <div className="flex justify-between">
                  <p className="italic">Bachelors Computer Science</p>
                  <span>8.4 CGPA</span>
                </div>
              </div>
            </div>
            
            {/* Projects */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">PROJECTS</h3>
              
              {/* Project 1 */}
              <div className="mb-6">
                <div className="flex justify-between flex-wrap">
                  <h4 className="text-xl font-bold">Reactive Resume</h4>
                  <span className="text-sm md:text-base">July 2020</span>
                </div>
                <p className="text-sm mb-2">https://github.com/AmruthPillai/Reactive-Resume</p>
                <p className="mb-2">
                  Reactive Resume, a free and open-source resume builder that works for you. A few of the important
                  features that make it awesome are minimalistic UI/UX, extensive customizability, portability,
                  regularly updated templates, etc.
                </p>
                <p>For more information, check out rxresu.me</p>
              </div>
              
              {/* Project 2 */}
              <div className="mb-6">
                <div className="flex justify-between flex-wrap">
                  <h4 className="text-xl font-bold">Resume on the Web</h4>
                  <span className="text-sm md:text-base">April 2020</span>
                </div>
                <p className="text-sm mb-2">https://amruthpillai.com</p>
                <p>
                  Resume on the Web has been a project that I've been focused on since the early 2014s. I didn't want
                  my information to be displayed on just a sheet of paper that only HRs or Talent Scouts had the
                  privilege of reading, I wanted it to be accessible to everyone. And that's how this project was
                  conceptualized.
                </p>
              </div>
            </div>
            
            {/* References */}
            <div>
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">REFERENCES</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <h4 className="font-bold">Willy Wonka</h4>
                  <p>CEO at Chocolate Factory</p>
                  <p>+1 (802) 234-2398</p>
                  <p className="break-words">willywonka@goldenticket.com</p>
                </div>
                <div>
                  <h4 className="font-bold">Elangovan Musk</h4>
                  <p>CEO at Newton Motors</p>
                  <p>+91 98893 34353</p>
                  <p className="break-words">elanmusk@nottesla.com</p>
                </div>
                <div>
                  <h4 className="font-bold">Lorraine Beasley</h4>
                  <p>Head of HR, Carson Logistics</p>
                  <p>+1 661-808-4188</p>
                  <p className="break-words">l.beasley@carsonlogistics.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}