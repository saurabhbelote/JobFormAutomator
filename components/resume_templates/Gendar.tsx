/** @format */
import React from "react";

const Resume = () => {
  const data = {
    name: "Amruth Pillai",
    title: "Full Stack Web Developer",
    contact: {
      phone: "+91 98453 36113",
      website: "amruthpillai.com",
      email: "hello@amruthpillai.com",
      social: {
        twitter: "KingOKings",
        linkedin: "AmruthPillai",
      },
    },
    objective:
      "To obtain a job within my chosen field that will challenge me and allow me to use my education, skills and past experiences in a way that is mutually beneficial to both myself and my employer and allow for future growth and advancement.",
    skills: [
      { name: "Customer Service Expertise", level: "Advanced" },
      { name: "High-Volume Call Center", level: "Intermediate" },
      { name: "Team Leader/Problem Solver", level: "Intermediate" },
      { name: "Call Center Management", level: "Novice" },
      { name: "Teambuilding & Training", level: "Novice" },
      { name: "Continuous Improvement", level: "Fundamental Awareness" },
    ],
    awards: [
      {
        title: "International Flutter Hackathon",
        organization: "Google",
        date: "April 2019",
      },
      {
        title: "Venturesity Banyan Hack",
        organization: "Venturesity",
        date: "June 2016",
      },
      {
        title: "Smart India Hackathon",
        organization: "Govt. of India",
        date: "April 2017",
      },
    ],
    certifications: [
      {
        title: "CCNP",
        organization: "Cisco Systems",
        date: "February 2018",
      },
      {
        title: "VCP6-DCV",
        organization: "VMWare",
        date: "June 2019",
      },
      {
        title: "DCUCI 642-999",
        organization: "Cisco Systems",
        date: "April 2014",
      },
    ],
    references: [
      {
        name: "Willy Wonka",
        position: "CEO at Chocolate Factory",
        phone: "+1 (802) 234-2398",
        email: "willywonka@goldenticket.com",
      },
      {
        name: "Elangovan Musk",
        position: "CEO at Newton Motors",
        phone: "+91 93893 34353",
        email: "elanmusknottesla.com",
      },
      {
        name: "Lorraine Beasley",
        position: "Head of HR, Carson Logistics",
        phone: "+1 661-808-4188",
        email: "l.beasley@carsonlogistics.com",
      },
    ],
    languages: [
      { name: "English", level: "Very Fluent" },
      { name: "Tamil", level: "Native Tongue" },
      { name: "Kannada", level: "Native Tongue" },
      { name: "German", level: "Learning on Duolingo" },
    ],
    experience: [
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
          'Received "Associate of the Month" award six times.',
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
        gpa: "7.2 CGPA",
      },
      {
        institution: "University of California, Berkeley, CA",
        degree: "Bachelors Computer Science",
        period: "September 1997 — August 2001",
        gpa: "8.4 CGPA",
      },
    ],
    projects: [
      {
        name: "Reactive Resume",
        link: "https://github.com/AmruthPillai/Reactive-Resume",
        date: "July 2020",
        description:
          "Reactive Resume, a free and open-source resume builder that works for you. A few of the important features that make it awesome are minimalistic UI/UX, extensive customizability, portability, regularly updated templates, etc.",
      },
      {
        name: "Resume on the Web",
        link: "https://amruthpillai.com",
        date: "April 2020",
        description:
          "Resume on the Web has been a project that I've been focused on since the early 2014's. I didn't want my information to be displayed on just a sheet of paper that only HRs or Talent Scouts had the privilege of reading, I wanted it to be accessible to everyone. And that's how this project was conceptualized.",
      },
    ],
    hobbies: [
      "Poetry",
      "Travelling",
      "Photography",
      "Playing Badminton",
      "Developing Reactive Resume",
    ],
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-md">
      {/* Left Column */}
      <div className="flex text-sm ">
        <div className="w-1/3  text-black ">
          <div className="bg-[#FF9800] p-6">
            <div className="mb-6 flex">
              <img
                src="/profile-image.jpg"
                alt={data.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <div>
                <h1 className="text-xl font-bold">{data.name}</h1>
                <h2 className="text-xs">{data.title}</h2>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <p>{data.contact.phone}</p>
              <p>{data.contact.website}</p>
              <p>{data.contact.email}</p>
              <p>@{data.contact.social.twitter}</p>
              <p>{data.contact.social.linkedin}</p>
            </div>
          </div>
          <div className=" bg-[#FFF5EA] mx-auto bg-cream  p-6 rounded-lg">
            <section className="">
              <h3 className="text-xl font-semibold">AWARDS</h3>
              {data.awards.map((award, index) => (
                <div key={index} className="mt-2 flex justify-between">
                  <div>
                    <h4 className=" font-medium">{award.title}</h4>
                    <p className="text-gray-500">{award.organization}</p>
                  </div>
                  <p className="text-gray-500">{award.date}</p>
                </div>
              ))}
            </section>

            <section className="mt-2">
              <h3 className="text-xl font-semibold">CERTIFICATIONS</h3>
              {data.certifications.map((cert, index) => (
                <div key={index} className="mt-2 flex justify-between">
                  <div>
                    <h4 className=" font-medium">{cert.title}</h4>
                    <p className="text-gray-500">{cert.organization}</p>
                  </div>
                  <p className="text-gray-500">{cert.date}</p>
                </div>
              ))}
            </section>

            <div className=" mt-2">
              <h3 className="text-xl font-semibold mb-2">Languages</h3>
              <div className="grid grid-cols-2 gap-2">
                {data.languages.map((lang, index) => (
                  <div key={index} className="mb-2 text-sm">
                    <p className="font-medium text-base">{lang.name}</p>
                    <p className="text-gray-500">{lang.level}</p>
                  </div>
                ))}
              </div>
            </div>
            <section className="mt-2">
              <h3 className="text-xl font-semibold">REFERENCES</h3>
              {data.references.map((ref, index) => (
                <div key={index} className="mt-2">
                  <h4 className="text-base font-medium">{ref.name}</h4>
                  <p className="text-gray-500">{ref.position}</p>
                  <p className="text-gray-500">{ref.phone}</p>
                  <p className="text-gray-500">{ref.email}</p>
                </div>
              ))}
            </section>

            <div className="mb-6 mt-2">
              <h3 className="text-xl font-semibold mb-2">Hobbies</h3>
              <ul className="list-disc ml-4">
                {data.hobbies.map((hobby, index) => (
                  <li key={index}>{hobby}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-2/3 text-black ">
          <div className=" bg-[#FFF5EA] p-3 ">
            <section className="mb-2">
              <h3 className="text-lg font-semibold mb-1">Objective</h3>
              <p className="text-sm">{data.objective}</p>
            </section>
            <section className="mb-2">
              <h3 className="text-lg font-semibold mb-1">Skills</h3>

              <div className="grid grid-cols-2 gap-4">
                {data.skills.map((skill, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-medium text-sm">{skill.name}</p>
                    <p className="text-sm text-gray-600">{skill.level}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <section className=" p-3">
            <h3 className="text-xl font-semibold mb-2">Work Experience</h3>
            {data.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">{exp.company}</h4>
                  <span className="text-sm text-gray-600">{exp.period}</span>
                </div>
                <p className="text-gray-700">{exp.role}</p>
                <ul className="list-disc ml-4 mt-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
                {exp.keyAchievement && (
                  <p className="mt-2 text-sm font-medium">
                    Key Achievement: {exp.keyAchievement}
                  </p>
                )}
              </div>
            ))}
          </section>

          <section className="mb-6 px-4">
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            {data.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">{edu.institution}</h4>
                  <span className="text-sm text-gray-600">{edu.period}</span>
                </div>
                <p className="text-gray-700">{edu.degree}</p>
                <p className="text-sm text-gray-600">{edu.gpa}</p>
              </div>
            ))}
          </section>

          <section className="px-4">
            <h3 className="text-xl font-semibold mb-2">Projects</h3>

            {data.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between">
                  <h4 className="font-medium">{project.name}</h4>
                  <span className="text-sm text-gray-600">{project.date}</span>
                </div>
                <a href={project.link} className="text-blue-500 text-sm">
                  {project.link}
                </a>
                <p className="text-sm mt-1">{project.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume;
