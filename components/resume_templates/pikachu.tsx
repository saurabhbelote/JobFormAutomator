"use client";

import Head from "next/head";
import {
  FaPhone,
  FaEnvelope,
  FaTwitter,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  usePersonalDataStore,
  useCertificateStore,
  // useAchievementStore,
  useSkillStore,
  useLanguageStore,
  useExperienceStore,
  useEducationStore,
  useProjectStore,
} from "@/app/store";
import { useState } from "react";
import Image from "next/image";
export default function Resume() {
  const [imageError] = useState(false);
  const { personalData } = usePersonalDataStore();
  const { certificates } = useCertificateStore();
  // const { achievements } = useAchievementStore();
  const { experiences } = useExperienceStore();
  const { educations } = useEducationStore();
  const { projects } = useProjectStore();
  const { skills } = useSkillStore();
  const { languages } = useLanguageStore();
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
                <Image
                  src="/images/avatar.png"
                  alt="Profile"
                  height={128}
                  width={128}
                  className="w-full h-full object-cover rounded"
                />
              )}
            </div>
          </div>

          {/* Header Info */}
          <div className="w-full md:w-3/4 bg-pink-600 text-white p-6">
            <h1 className="text-4xl font-bold">{personalData.name}</h1>
            <h2 className="text-xl mb-6"> {personalData.headline}</h2>
            <p className="mb-4">{personalData.summary}</p>
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
                <span>{personalData.phone}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaEnvelope className="text-pink-600 mr-2" />
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaGithub className="text-pink-600 mr-2" />
                <span>{personalData.github}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaTwitter className="text-pink-600 mr-2" />
                <span>{personalData.twitter}</span>
              </div>
              <div className="flex items-center mb-2">
                <FaLinkedin className="text-pink-600 mr-2" />
                <span>{personalData.linkedin}</span>
              </div>
            </div>

            {/* Skills Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">
                SKILLS
              </h3>
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-bold">{skill.heading}</h4>
                  {skill.items &&
                    skill.items.split(",").map((detail, i) => (
                      <p key={i} className="text-sm">
                        {detail}
                      </p>
                    ))}
                </div>
              ))}
            </div>

            {/* Languages Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">
                LANGUAGES
              </h3>
              {languages.map((language, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-bold">{language.heading}</h4>
                  <span className="text-sm">{language.option}</span>
                </div>
              ))}
            </div>

            {/* Awards Section */}
            <div className="mb-6">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">
                AWARDS
              </h3>
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
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">
                CERTIFICATIONS
              </h3>
              {certificates.map((certificate, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between">
                    <h4 className="font-bold">{certificate.title}</h4>
                    <span className="text-sm">{certificate.date}</span>
                  </div>
                  <p className="text-sm">{certificate.awarder}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full md:w-3/4 p-6 text-black">
            {/* Work Experience */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">
                WORK EXPERIENCE
              </h3>
              {experiences.map((experience, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between flex-wrap">
                    <h4 className="text-xl font-bold">
                      {experience.company}, {experience.location}
                    </h4>
                    <span className="text-sm md:text-base">
                      {experience.dateRange}
                    </span>
                  </div>
                  <p className="italic mb-2">{experience.position}</p>
                  {experience.description && (
                    <ul className="list-disc ml-5 mb-2">
                      {experience.description.split(",").map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">
                EDUCATION
              </h3>
              {educations.map((education, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between flex-wrap">
                    <h4 className="text-xl font-bold">{education.institute}</h4>
                    <span className="text-sm md:text-base">
                      {education.dateRange}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="italic">
                      {" "}
                      {education.typeofstudy} in {education.areaofstudy}
                    </p>
                    <span>{education.score}</span>
                  </div>
                </div>
              ))}

              {/* Projects */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">
                  PROJECTS
                </h3>
                {projects.map((project, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between flex-wrap">
                      <h4 className="text-xl font-bold">{project.name}</h4>
                      <span className="text-sm md:text-base">
                        {project.date}
                      </span>
                    </div>
                    <p className="text-sm mb-2">{project.website}</p>
                    <p className="mb-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* References */}
            <div>
              <h3 className="text-lg font-bold text-pink-600 border-b-2 border-pink-600 mb-4">
                REFERENCES
              </h3>
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
