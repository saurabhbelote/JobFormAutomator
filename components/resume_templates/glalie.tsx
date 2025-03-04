// pages/index.tsx
import Head from 'next/head';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Amruth Pillai | Resume</title>
        <meta name="description" content="Full Stack Web Developer Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`max-w-5xl mx-auto p-4 ${inter.className} text-black bg-[#f8f5ff]`}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Left sidebar */}
          <div className="md:col-span-1 flex flex-col items-center text-center bg-white p-6 rounded">
            <div className="mb-4">
              <img src="/profile.jpg" alt="Amruth Pillai" className="w-40 h-40 rounded-full" />
            </div>
            <h1 className="text-3xl font-bold mb-1">Amruth</h1>
            <h1 className="text-3xl font-bold mb-4">Pillai</h1>
            <p className="uppercase text-sm font-medium mb-6">Full Stack Web Developer</p>
            
            <div className="border border-purple-200 rounded p-4 w-full mb-4">
              <div className="mb-4 flex flex-col items-center">
                <div className="text-purple-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="font-bold mt-2">Address</h3>
              </div>
              <p className="text-sm">
                #5/A, Banashankari Nivas,<br />
                Brindavan Layout, Subramanyapura,<br />
                Bangalore, India - 560061
              </p>
            </div>
            
            <div className="w-full space-y-4">
              <div className="text-center">
                <p className="font-bold">Phone</p>
                <p className="text-sm">+91 98453 36113</p>
              </div>
              
              <div className="text-center">
                <p className="font-bold">Website</p>
                <p className="text-sm">amruthpillai.com</p>
              </div>
              
              <div className="text-center">
                <p className="font-bold">Email</p>
                <p className="text-sm">hello@amruthpillai.com</p>
              </div>
              
              <div className="text-center">
                <p className="font-bold">Instagram</p>
                <p className="text-sm">AmruthPillai</p>
              </div>
              
              <div className="text-center">
                <p className="font-bold">Twitter</p>
                <p className="text-sm">KingOKings</p>
              </div>
              
              <div className="text-center">
                <p className="font-bold">LinkedIn</p>
                <p className="text-sm">AmruthPillai</p>
              </div>
            </div>
          </div>
          
          {/* Main content */}
          <div className="md:col-span-3">
            {/* Objective section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                OBJECTIVE
              </h2>
              <p>
                To obtain a job within my chosen field that will challenge me and allow me to use my education, 
                skills and past experiences in a way that is mutually beneficial to both myself and my employer 
                and allow for future growth and advancement.
              </p>
            </div>
            
            {/* Work Experience section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                WORK EXPERIENCE
              </h2>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">On Point Electronics, NYC, NY</h3>
                    <p className="text-sm">Customer Service Representative</p>
                  </div>
                  <p className="text-sm">(January 2013 — July 2018)</p>
                </div>
                <ul className="list-disc ml-5 mt-2">
                  <li>Organized customer information and account data for business planning and customer service purposes.</li>
                  <li>Created excel spreadsheets to track customer data and perform intense reconciliation process.</li>
                  <li>Received 97% positive customer survey results.</li>
                  <li>Speed on calls was 10% above team average.</li>
                </ul>
                <p className="mt-2"><span className="font-bold">Key Achievement:</span> Designed and executed an automatized system for following up with customers, increasing customer retention by 22%.</p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Excelsior Communications, NYC, NY</h3>
                    <p className="text-sm">Customer Service Representative</p>
                  </div>
                  <p className="text-sm">(October 2009 — December 2012)</p>
                </div>
                <ul className="list-disc ml-5 mt-2">
                  <li>Worked as a full time customer service rep in a high volume call center.</li>
                  <li>Received "Associate of the Month" award six times.</li>
                  <li>Chosen as an example for other associates in trainings.</li>
                </ul>
                <p className="mt-2"><span className="font-bold">Key Achievement:</span> Received Customer Appreciation bonus in three of four years.</p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Pizza Hut, Newark, NJ</h3>
                    <p className="text-sm">Waiter</p>
                  </div>
                  <p className="text-sm">(August 2005 — September 2009)</p>
                </div>
                <ul className="list-disc ml-5 mt-2">
                  <li>Worked passionately in customer service in a high volume restaurant.</li>
                  <li>Completed the FAST customer service training class.</li>
                  <li>Maintained a high tip average thanks to consistent customer satisfaction.</li>
                </ul>
              </div>
            </div>
            
            {/* Education section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                EDUCATION
              </h2>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">The City College of New York, NYC, NY</h3>
                    <p className="text-sm">Masters Computer Science</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">(September 2001 — August 2002)</p>
                    <p className="font-bold">7.2 CGPA</p>
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">University of California, Berkeley, CA</h3>
                    <p className="text-sm">Bachelors Computer Science</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm">(September 1997 — August 2001)</p>
                    <p className="font-bold">8.4 CGPA</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Skills section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                SKILLS
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold">Customer Service Expertise</h3>
                  <p className="text-sm">Advanced</p>
                </div>
                <div>
                  <h3 className="font-bold">High-Volume Call Center</h3>
                  <p className="text-sm">Intermediate</p>
                </div>
                <div>
                  <h3 className="font-bold">Team Leader/Problem Solver</h3>
                  <p className="text-sm">Intermediate</p>
                </div>
                <div>
                  <h3 className="font-bold">Call Center Management</h3>
                  <p className="text-sm">Novice</p>
                </div>
                <div>
                  <h3 className="font-bold">Teambuilding & Training</h3>
                  <p className="text-sm">Novice</p>
                </div>
                <div>
                  <h3 className="font-bold">Continuous Improvement</h3>
                  <p className="text-sm">Fundamental Awareness</p>
                </div>
              </div>
            </div>
            
            {/* Projects section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                PROJECTS
              </h2>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Reactive Resume</h3>
                    <p className="text-sm">https://github.com/AmruthPillai/Reactive-Resume</p>
                  </div>
                  <p className="text-sm">July 2020</p>
                </div>
                <p className="mt-2">
                  Reactive Resume, a free and open-source resume builder that works for you. A few of the important features 
                  that make it awesome are minimalistic UI/UX, extensive customizability, portability, regularly updated templates, etc.
                  <br />For more information, check out rxresu.me
                </p>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold">Resume on the Web</h3>
                    <p className="text-sm">https://amruthpillai.com</p>
                  </div>
                  <p className="text-sm">April 2020</p>
                </div>
                <p className="mt-2">
                  Resume on the Web has been a project that I've been focused on since the early 2014s. I didn't want my information 
                  to be displayed on just a sheet of paper that only HRs or Talent Scouts had the privilege of reading, I wanted it 
                  to be accessible to everyone. And that's how this project was conceptualized.
                </p>
              </div>
            </div>
            
            {/* Languages section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                LANGUAGES
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-bold">English</h3>
                  <p className="text-sm">Very Fluent</p>
                </div>
                <div>
                  <h3 className="font-bold">Tamil</h3>
                  <p className="text-sm">Native Tongue</p>
                </div>
                <div>
                  <h3 className="font-bold">Kannada</h3>
                  <p className="text-sm">Native Tongue</p>
                </div>
                <div>
                  <h3 className="font-bold">German</h3>
                  <p className="text-sm">Learning on Duolingo</p>
                </div>
              </div>
            </div>
            
            {/* References section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                REFERENCES
              </h2>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="font-bold">Willy Wonka</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-bold">Elangrovan Musk</h3>
                </div>
                <div className="text-center">
                  <h3 className="font-bold">Lorraine Beasley</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
              AWARDS
            </h2>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">International Flutter Hackathon</h3>
                <p className="text-sm">Google</p>
              </div>
              <p className="text-sm">April 2019</p>
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Venturesity Banyan Hack</h3>
                <p className="text-sm">Venturesity</p>
              </div>
              <p className="text-sm">June 2016</p>
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">Smart India Hackathon</h3>
                <p className="text-sm">Govt. of India</p>
              </div>
              <p className="text-sm">April 2017</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
              CERTIFICATIONS
            </h2>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">CCNP</h3>
                <p className="text-sm">Cisco Systems</p>
              </div>
              <p className="text-sm">February 2018</p>
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">VCP6-DCV</h3>
                <p className="text-sm">VMWare</p>
              </div>
              <p className="text-sm">June 2019</p>
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-bold">DCUCI 642-999</h3>
                <p className="text-sm">Cisco Systems</p>
              </div>
              <p className="text-sm">April 2014</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
            HOBBIES
          </h2>
          
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="text-center">
              <p className="font-bold">Poetry</p>
            </div>
            <div className="text-center">
              <p className="font-bold">Travelling</p>
            </div>
            <div className="text-center">
              <p className="font-bold">Photography</p>
            </div>
            <div className="text-center">
              <p className="font-bold">Playing Badminton</p>
            </div>
            <div className="text-center">
              <p className="font-bold">Developing Reactive Resume</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}