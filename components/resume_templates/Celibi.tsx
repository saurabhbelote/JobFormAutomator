"use client";
import React from "react";
import Image from "next/image";
import {
  usePersonalDataStore,
  useCertificateStore,
  useAchievementStore,
  useExperienceStore,
  useEducationStore,
  useProjectStore,
  useLanguageStore,
  useSkillStore,
} from "@/app/store";
export default function Celibi() {
  const { personalData } = usePersonalDataStore();
  const { certificates } = useCertificateStore();
  const { achievements } = useAchievementStore();
  const { experiences } = useExperienceStore();
  const { educations } = useEducationStore();
  const { projects } = useProjectStore();
  const { languages } = useLanguageStore();
  const { skills } = useSkillStore();

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white text-gray-800">
      {/* Header Section */}
      <header className="flex items-start gap-8 mb-8">
        <div className="w-32 h-32">
          <Image
            src="/images/avatar.png"
            alt="Profile"
            height={128}
            width={128}
            className="w-full h-full object-cover rounded"
          />
        </div>
        <div className={`flex-1 bg-gray-800 text-white p-6`}>
          <h1 className="text-3xl font-bold mb-2">{personalData.name}</h1>
          <h2 className="text-xl">{personalData.headline}</h2>
        </div>
      </header>

      <div className="flex gap-8">
        {/* Left Sidebar */}
        <aside className="w-64 space-y-8">
          <section>
            <h3
              className={`text-lg font-bold border-b-2 border-gray-800 mb-4 ${
                personalData.address ? "visible" : "hidden"
              }`}
            >
              PROFILE
            </h3>
            <div className="space-y-4">
              <div>
                <h4
                  className={`font-semibold ${
                    personalData.address ? "visible" : "hidden"
                  }`}
                >
                  Address
                </h4>
                <p className="text-sm">{personalData.address}</p>
              </div>
              <div>
                <h4
                  className={`font-semibold ${
                    personalData.phone ? "visible" : "hidden"
                  }`}
                >
                  Phone
                </h4>
                <p className="text-sm">{"+91 " + personalData.phone}</p>
              </div>
              <div>
                <h4
                  className={`font-semibold ${
                    personalData.github ? "visible" : "hidden"
                  }`}
                >
                  Github
                </h4>
                <p className="text-sm">{personalData.github}</p>
              </div>
              <div>
                <h4
                  className={`font-semibold ${
                    personalData.email ? "visible" : "hidden"
                  }`}
                >
                  Email
                </h4>
                <p className="text-sm">{personalData.email}</p>
              </div>
              <div>
                <h4
                  className={`font-semibold ${
                    personalData.twitter ? "visible" : "hidden"
                  }`}
                >
                  Twitter
                </h4>
                <p className="text-sm">{personalData.twitter}</p>
              </div>
              <div>
                <h4
                  className={`font-semibold ${
                    personalData.linkedin ? "visible" : "hidden"
                  }`}
                >
                  LinkedIn
                </h4>
                <p className="text-sm">{personalData.linkedin}</p>
              </div>
            </div>
          </section>

          <section>
            <h3
              className={`text-lg font-bold border-b-2 border-gray-800 mb-4 ${
                achievements.length ? "visible" : "hidden"
              }`}
            >
              AWARDS
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <span className="font-semibold">{achievement.name}</span>
                  </div>
                  <p className="text-sm">{achievement.details}</p>
                </div>
              ))}
            </div>
          </section>
          <section>
            <h3
              className={`text-lg font-bold border-b-2 border-gray-800 mb-4 ${
                certificates.length ? "visible" : "hidden"
              }`}
            >
              CERTIFICATIONS
            </h3>
            <div className="space-y-4">
              {certificates.map((certificate, index) => (
                <div key={index}>
                  <div className="flex justify-between">
                    <span className="font-semibold">{certificate.title}</span>
                    <span className="text-sm">{certificate.date}</span>
                  </div>
                  <p className="text-sm">{certificate.awarder}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3 className={`text-lg font-bold border-b-2 border-gray-800 mb-4 ${
                languages.length ? "visible" : "hidden"
              }`}>
              LANGUAGES
            </h3>
            <div className="space-y-2">
              {languages.map((language, index) => (
                <div key={index}>
                  <h3 className="font-semibold">{language.heading}</h3>
                  <p className="text-sm">{language.option}</p>
                </div>
              ))}
            </div>
          </section>
        </aside>

        {/* Main Content */}
        <main className="flex-1">
          <section className="mb-8">
            <h3
              className={`text-lg font-bold border-b-2 border-gray-800 mb-4 ${
                experiences.length ? "visible" : "hidden"
              }`}
            >
              WORK EXPERIENCE
            </h3>
            <div className="space-y-6">
              {experiences.map((experience, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-semibold">
                      {experience.company}, {experience.location}
                    </h4>
                    <span className="text-sm">{experience.dateRange}</span>
                  </div>
                  <p className="text-sm italic mb-2">{experience.position}</p>

                  {experience.description && (
                    <ul className="list-disc list-inside text-sm space-y-1 mb-2">
                      {experience.description.split(",").map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3
              className={`text-lg font-bold border-b-2 border-gray-800 mb-4 ${
                educations.length ? "visible" : "hidden"
              }`}
            >
              EDUCATION
            </h3>
            <div className="space-y-4">
              {educations.map((education, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <div>
                      <h4 className="font-semibold">{education.institute}</h4>
                      <p className="text-sm">
                        {education.typeofstudy} in {education.areaofstudy}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm">{education.dateRange}</span>
                      {education.score && (
                        <p className="text-sm">{education.score}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-8">
            <h3 className={`text-lg font-bold border-b-2 border-gray-800 mb-4 ${
                skills.length ? "visible" : "hidden"
              }`}>
              SKILLS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <h4 className="font-semibold">{skill.heading}</h4>
                  {skill.items &&
                    skill.items.split(",").map((detail, i) => (
                      <p key={i} className="text-sm">
                        {detail}
                      </p>
                    ))}
                </div>
              ))}
            </div>
          </section>

          <section>
            <h3
              className={`text-lg font-bold border-b-2 border-gray-800 mb-4 ${
                projects.length ? "visible" : "hidden"
              }`}
            >
              PROJECTS
            </h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <h4 className="font-semibold">
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        {project.name}
                      </a>
                    </h4>
                    <span className="text-sm">{project.date}</span>
                  </div>
                  <p className="text-sm">{project.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
