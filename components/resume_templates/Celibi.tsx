"use client";
import React from 'react';
import Image from 'next/image'
import {usePersonalDataStore,} from '@/app/store'
export default function Celibi () {
  const {personalData} = usePersonalDataStore();
  
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-gray-800">
      {/* Header Section */}
      <header className="flex items-start gap-8 mb-8">
        <div className="w-32 h-32">
          <Image
            src="/api/placeholder/128/128"
            alt="Profile"
            height={128}
            width={128}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className="flex-1 bg-gray-800 text-white p-6">
          <h1 className="text-3xl font-bold mb-2">{personalData.name}</h1>
          <h2 className="text-xl">{personalData.headline}</h2>
        </div>
      </header>

      <div className="flex gap-8">
        {/* Left Sidebar */}
        <aside className="w-64 space-y-8">
          <section>
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">PROFILE</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold">Address</h4>
                <p className="text-sm">{personalData.address}</p>
              </div>
              <div>
                <h4 className="font-semibold">Phone</h4>
                <p className="text-sm">+91 {personalData.phone}</p>
              </div>
              <div>
                <h4 className="font-semibold">Github</h4>
                <p className="text-sm">{personalData.github}</p>
              </div>
              <div>
                <h4 className="font-semibold">Email</h4>
                <p className="text-sm">{personalData.email}</p>
              </div>
              <div>
                <h4 className="font-semibold">Twitter</h4>
                <p className="text-sm">{personalData.twitter}</p>
              </div>
              <div>
                <h4 className="font-semibold">LinkedIn</h4>
                <p className="text-sm">{personalData.linkedin}</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">AWARDS</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">International Flutter Hackathon</span>
                  <span className="text-sm">April 2019</span>
                </div>
                <p className="text-sm">Google</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">Venturesity Banyan Hack</span>
                  <span className="text-sm">June 2016</span>
                </div>
                <p className="text-sm">Venturesity</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">Smart India Hackathon</span>
                  <span className="text-sm">April 2017</span>
                </div>
                <p className="text-sm">Govt. of India</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">CERTIFICATIONS</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">CCNP</span>
                  <span className="text-sm">February 2018</span>
                </div>
                <p className="text-sm">Cisco Systems</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">VCP6-DCV</span>
                  <span className="text-sm">June 2019</span>
                </div>
                <p className="text-sm">VMWare</p>
              </div>
              <div>
                <div className="flex justify-between">
                  <span className="font-semibold">DCUCI 642-999</span>
                  <span className="text-sm">April 2014</span>
                </div>
                <p className="text-sm">Cisco Systems</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">LANGUAGES</h3>
            <div className="space-y-2">
              <div>
                <p className="font-semibold">English</p>
                <p className="text-sm">Very Fluent</p>
              </div>
              <div>
                <p className="font-semibold">Tamil</p>
                <p className="text-sm">Native Tongue</p>
              </div>
              <div>
                <p className="font-semibold">Kannada</p>
                <p className="text-sm">Native Tongue</p>
              </div>
              <div>
                <p className="font-semibold">German</p>
                <p className="text-sm">Learning on Duolingo</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">HOBBIES</h3>
            <ul className="space-y-1 text-sm">
              <li>Poetry</li>
              <li>Travelling</li>
              <li>Photography</li>
              <li>Playing Badminton</li>
            </ul>
          </section>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <section className="mb-8">
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">OBJECTIVE</h3>
            <p className="text-sm">
              {personalData.summary}
            </p>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">WORK EXPERIENCE</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold">On Point Electronics, NYC, NY</h4>
                  <span className="text-sm">(January 2013 — July 2018)</span>
                </div>
                <p className="text-sm italic mb-2">Customer Service Representative</p>
                <ul className="list-disc list-inside text-sm space-y-1 mb-2">
                  <li>Organized customer information and account data for business planning and customer service purposes.</li>
                  <li>Created excel spreadsheets to track customer data and perform intense reconciliation process.</li>
                  <li>Received 97% positive customer survey results.</li>
                  <li>Speed on calls was 10% above team average.</li>
                </ul>
                <p className="text-sm">
                  <span className="font-semibold">Key Achievement:</span> Designed and executed an automated system for following up with customers,
                  increasing customer retention by 22%.
                </p>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold">Excelsior Communications, NYC, NY</h4>
                  <span className="text-sm">(October 2009 — December 2012)</span>
                </div>
                <p className="text-sm italic mb-2">Customer Service Representative</p>
                <ul className="list-disc list-inside text-sm space-y-1 mb-2">
                  <li>Worked as a full time customer service rep in a high volume call center.</li>
                  <li>Received Associate of the Month award six times.</li>
                  <li>Chosen as an example for other associates in trainings.</li>
                </ul>
                <p className="text-sm">
                  <span className="font-semibold">Key Achievement:</span> Received Customer Appreciation bonus in three of four years.
                </p>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold">Pizza Hut, Newark, NJ</h4>
                  <span className="text-sm">(August 2005 — September 2009)</span>
                </div>
                <p className="text-sm italic mb-2">Waiter</p>
                <ul className="list-disc list-inside text-sm space-y-1">
                  <li>Worked passionately in customer service in a high volume restaurant.</li>
                  <li>Completed the FAST customer service training class.</li>
                  <li>Maintained a high tip average thanks to consistent customer satisfaction.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">EDUCATION</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <div>
                    <h4 className="font-semibold">The City College of New York, NYC, NY</h4>
                    <p className="text-sm">Masters Computer Science</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm">(September 2001 — August 2002)</span>
                    <p className="text-sm">7.2 CGPA</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <div>
                    <h4 className="font-semibold">University of California, Berkeley, CA</h4>
                    <p className="text-sm">Bachelors Computer Science</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm">(September 1997 — August 2001)</span>
                    <p className="text-sm">8.4 CGPA</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">SKILLS</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold">Customer Service Expertise</h4>
                <p className="text-sm">Advanced</p>
              </div>
              <div>
                <h4 className="font-semibold">High-Volume Call Center</h4>
                <p className="text-sm">Intermediate</p>
              </div>
              <div>
                <h4 className="font-semibold">Team Leader/Problem Solver</h4>
                <p className="text-sm">Intermediate</p>
              </div>
              <div>
                <h4 className="font-semibold">Call Center Management</h4>
                <p className="text-sm">Novice</p>
              </div>
              <div>
                <h4 className="font-semibold">Teambuilding & Training</h4>
                <p className="text-sm">Novice</p>
              </div>
              <div>
                <h4 className="font-semibold">Continuous Improvement</h4>
                <p className="text-sm">Fundamental Awareness</p>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-lg font-bold border-b-2 border-gray-800 mb-4">PROJECTS</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold">Reactive Resume</h4>
                  <span className="text-sm">July 2020</span>
                </div>
                <a href="https://github.com/AmruthPillai/Reactive-Resume" 
                   className="text-sm text-blue-600 hover:underline block mb-2">
                  https://github.com/AmruthPillai/Reactive-Resume
                </a>
                <p className="text-sm">
                  Reactive Resume, a free and open-source resume builder that works for you. A few of the important
                  features that make it awesome are minimalistic UI/UX, extensive customizability, portability, regularly
                  updated templates, etc.
                </p>
                <p className="text-sm mt-2">For more information, check out rxresu.me</p>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <h4 className="font-semibold">Resume on the Web</h4>
                  <span className="text-sm">April 2020</span>
                </div>
                <a href="https://amruthpillai.com" 
                   className="text-sm text-blue-600 hover:underline block mb-2">
                  https://amruthpillai.com
                </a>
                <p className="text-sm">
                  Resume on the Web has been a project that I have been focused on since the early 2014s. I didnot want
                  my information to be displayed on just a sheet of paper that only HRs or Stack Source could read
                  through. I wanted it to be accessible through the most basic application that runs on almost all
                  devices, the browser.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

