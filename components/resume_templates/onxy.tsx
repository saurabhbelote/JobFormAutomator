/** @format */

import React from "react";

const resumeData = {
  name: "Amruth Pillai",
  title: "Full Stack Web Developer",
  contact: {
    phone: "+91 98453 36113",
    email: "hello@amruthpillai.com",
    website: "amruthpillai.com",
    linkedin: "AmruthPillai",
    twitter: "KingOKings",
    github: "AmruthPillai",
  },
  address:
    "#5/A, Banashankari Nivas, Brindavan Layout, Subramanyapura, Bangalore, India - 560061",
  objective:
    "To obtain a job within my chosen field that will challenge me and allow me to use my education, skills and past experiences in a way that is mutually beneficial to both myself and my employer and allow for future growth and advancement.",
  workExperience: [
    {
      company: "On Point Electronics, NYC, NY",
      role: "Customer Service Representative",
      period: "January 2013 — July 2018",
      achievements: [
        "Organized customer information and account data for business planning and customer service purposes.",
        "Created excel spreadsheets to track customer data and perform intense reconciliation process.",
        "Received 97% positive customer survey results.",
        "Speed on calls was 10% above team average.",
      ],
      keyAchievement:
        "Designed and executed an automated system for following up with customers, increasing customer retention by 22%.",
    },
    {
      company: "Excelsior Communications, NYC, NY",
      role: "Customer Service Representative",
      period: "October 2009 — December 2012",
      achievements: [
        "Worked as a full time customer service rep in a high volume call center.",
        "Received 'Associate of the Month' award six times.",
        "Chosen as an example for other associates in trainings.",
      ],
      keyAchievement:
        "Received Customer Appreciation bonus in three of four years.",
    },
    {
      company: "Pizza Hut, Newark, NJ",
      role: "Waiter",
      period: "August 2005 — September 2009",
      achievements: [
        "Worked passionately in customer service in a high volume restaurant.",
        "Completed the FAST customer service training class.",
        "Maintained a high tip average thanks to consistent customer satisfaction.",
      ],
    },
  ],
  education: [
    {
      institution: "The City College of New York, NYC, NY",
      degree: "Masters Computer Science",
      period: "September 2001 — August 2002",
      cgpa: "7.2 CGPA",
    },
    {
      institution: "University of California, Berkeley, CA",
      degree: "Bachelors Computer Science",
      period: "September 1997 — August 2001",
      cgpa: "8.4 CGPA",
    },
  ],
  projects: [
    {
      name: "Reactive Resume",
      url: "https://github.com/AmruthPillai/Reactive-Resume",
      date: "July 2020",
      description:
        "Reactive Resume, a free and open-source resume builder that works for you. A few of the important features that make it awesome are minimalistic UI/UX, extensive customizability, portability, regularly updated templates, etc.",
    },
    {
      name: "Resume on the Web",
      url: "https://amruthpillai.com",
      date: "April 2020",
      description:
        "Resume on the Web has been a project that I've been focused on since the early 2014s. I didn't want my information to be displayed on just a sheet of paper that only HRs or Talent Scouts had the privilege of reading, I wanted it to be accessible to everyone. And that's how this project was conceptualized.",
    },
  ],
  hobbies: [
    "Poetry",
    "Travelling",
    "Photography",
    "Playing Badminton",
    "Developing Reactive Resume",
  ],
  languages: [
    { name: "English", level: "Very Fluent" },
    { name: "Kannada", level: "Native Tongue" },
    { name: "Tamil", level: "Native Tongue" },
    { name: "German", level: "Learning on Duolingo" },
  ],
  awards: [
    {
      name: "International Flutter Hackathon",
      organization: "Google",
      date: "April 2019",
    },
    {
      name: "Venturesity Banyan Hack",
      organization: "Venturesity",
      date: "June 2016",
    },
  ],
  certifications: [
    {
      name: "CCNP",
      issuer: "Cisco Systems",
      date: "February 2018",
    },
    {
      name: "VCP6-DCV",
      issuer: "VMware",
      date: "June 2019",
    },
  ],
};

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white text-black p-8">
      {/* Header */}
      <header className="flex gap-6 mb-8">
        <div className="flex gap-6">
            <img src="/profile-image.jpg" alt="profile" className="w-24 h-24 rounded-full mb-4" />
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-teal-600 mb-1">
              {resumeData.name}
            </h1>
            <h2 className="text-xl mb-3">{resumeData.title}</h2>
            <p className="text-sm text-gray-600">{resumeData.address}</p>
          </div>
        </div>

        <div className="text-right text-sm">
          <p>{resumeData.contact.phone}</p>
          <p>{resumeData.contact.website}</p>
          <p>{resumeData.contact.email}</p>
          <p>{resumeData.contact.twitter}</p>
          <p>{resumeData.contact.linkedin}</p>
        </div>
      </header>

      {/* Objective */}
      <section className="mb-6">
        <h2 className="text-teal-600 uppercase text-sm font-bold mb-2">
          Objective
        </h2>
        <p className="text-sm">{resumeData.objective}</p>
      </section>

      {/* Work Experience */}
      <section className="mb-6">
        <h2 className="text-teal-600 uppercase text-sm font-bold mb-2">
          Work Experience
        </h2>
        {resumeData.workExperience.map((job, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-baseline mb-1">
              <h3 className="font-bold">{job.company}</h3>
              <span className="text-sm text-gray-600">{job.period}</span>
            </div>
            <p className="text-sm text-gray-700 mb-2">{job.role}</p>
            <ul className="list-disc list-inside text-sm">
              {job.achievements.map((achievement, idx) => (
                <li key={idx}>{achievement}</li>
              ))}
            </ul>
            {job.keyAchievement && (
              <p className="text-sm mt-1">
                <span className="font-bold">Key Achievement:</span>{" "}
                {job.keyAchievement}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-teal-600 uppercase text-sm font-bold mb-2">
          Education
        </h2>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">{edu.institution}</h3>
              <span className="text-sm text-gray-600">{edu.period}</span>
            </div>
            <p className="text-sm">
              {edu.degree} - {edu.cgpa}
            </p>
          </div>
        ))}
      </section>

      {/* Projects */}
      <section className="mb-6">
        <h2 className="text-teal-600 uppercase text-sm font-bold mb-2">
          Projects
        </h2>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mb-3">
            <div className="flex justify-between items-baseline">
              <h3 className="font-bold">{project.name}</h3>
              <span className="text-sm text-gray-600">{project.date}</span>
            </div>
            <p className="text-sm mb-1">{project.url}</p>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </section>

      {/* Two Column Section */}
      <div className="grid grid-cols-2 gap-6">
        {/* Hobbies */}
        <section>
          <h2 className="text-teal-600 uppercase text-sm font-bold mb-2">
            Hobbies
          </h2>
          <ul className="text-sm">
            {resumeData.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-teal-600 uppercase text-sm font-bold mb-2">
            Languages
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {resumeData.languages.map((language, index) => (
              <div key={index}>
                <p className="font-bold text-sm">{language.name}</p>
                <p className="text-sm text-gray-600">{language.level}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Awards & Certifications */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <section>
          <h2 className="text-teal-600 uppercase text-sm font-bold mb-2">
            Awards
          </h2>
          {resumeData.awards.map((award, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm">{award.name}</h3>
                <span className="text-sm text-gray-600">{award.date}</span>
              </div>
              <p className="text-sm text-gray-600">{award.organization}</p>
            </div>
          ))}
        </section>

        <section>
          <h2 className="text-teal-600 uppercase text-sm font-bold mb-2">
            Certifications
          </h2>
          {resumeData.certifications.map((cert, index) => (
            <div key={index} className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-sm">{cert.name}</h3>
                <span className="text-sm text-gray-600">{cert.date}</span>
              </div>
              <p className="text-sm text-gray-600">{cert.issuer}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Resume;
