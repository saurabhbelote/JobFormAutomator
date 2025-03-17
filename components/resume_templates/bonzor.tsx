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
    <div className="max-w-5xl mx-auto p-8 space-y-4 bg-white text-black">
      {/* Header Section */}
      <header className="flex flex-col items-center space-y-2 text-center">

        <div>
          <h1 className="text-2xl font-bold">{personalData.name}</h1>
          <h2 className="text-base">{personalData.headline}</h2>
        </div>
      </header>

      <div className="flex gap-8">
        {/* Left Sidebar */}
        <aside className="w-25 space-y-4">
          {/* Profile Section */}
          <section className="border-t pt-2.5">
            <h3
              className={`text-base font-bold ${
                personalData.address ? "" : "hidden"
              }`}
            >
              PROFILE
            </h3>
            <div className="mt-2 space-y-3">
              {/* Address */}
              {personalData.address && (
                <div>
                  <h4 className="font-semibold">Address</h4>
                  <p className="text-sm">{personalData.address}</p>
                </div>
              )}

              {/* Phone */}
              {personalData.phone && (
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-sm">{personalData.phone}</p>
                </div>
              )}

              {/* Github */}
              {personalData.github && (
                <div>
                  <h4 className="font-semibold">Github</h4>
                  <p className="text-sm">{personalData.github}</p>
                </div>
              )}

              {/* Email */}
              {personalData.email && (
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-sm">{personalData.email}</p>
                </div>
              )}

              {/* Twitter */}
              {personalData.twitter && (
                <div>
                  <h4 className="font-semibold">Twitter</h4>
                  <p className="text-sm">{personalData.twitter}</p>
                </div>
              )}

              {/* LinkedIn */}
              {personalData.linkedin && (
                <div>
                  <h4 className="font-semibold">LinkedIn</h4>
                  <p className="text-sm">{personalData.linkedin}</p>
                </div>
              )}
            </div>
          </section>

          {/* Awards */}
          {!!achievements.length && (
            <section className="border-t pt-2.5">
              <h3 className="text-base font-bold">AWARDS</h3>
              <div className="mt-2 space-y-3">
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
          )}

          {/* Certifications */}
          {!!certificates.length && (
            <section className="border-t pt-2.5">
              <h3 className="text-base font-bold">CERTIFICATIONS</h3>
              <div className="mt-2 space-y-3">
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
          )}

          {/* Languages */}
          {!!languages.length && (
            <section className="border-t pt-2.5">
              <h3 className="text-base font-bold">LANGUAGES</h3>
              <div className="mt-2 space-y-2">
                {languages.map((language, index) => (
                  <div key={index}>
                    <h4 className="font-semibold">{language.heading}</h4>
                    <p className="text-sm">{language.option}</p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-4">
          {/* Work Experience */}
          {!!experiences.length && (
            <section className="border-t pt-2.5">
              <h3 className="text-base font-bold">WORK EXPERIENCE</h3>
              <div className="mt-2 space-y-4">
                {experiences.map((experience, index) => (
                  <div key={index}>
                    <div className="flex justify-between">
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
          )}

          {/* Education */}
          {!!educations.length && (
            <section className="border-t pt-2.5">
              <h3 className="text-base font-bold">EDUCATION</h3>
              <div className="mt-2 space-y-4">
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
          )}

          {/* Skills */}
          {!!skills.length && (
            <section className="border-t pt-2.5">
              <h3 className="text-base font-bold">SKILLS</h3>
              <div className="mt-2 grid grid-cols-2 gap-4">
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
          )}

          {/* Projects */}
          {!!projects.length && (
            <section className="border-t pt-2.5">
              <h3 className="text-base font-bold">PROJECTS</h3>
              <div className="mt-2 space-y-4">
                {projects.map((project, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <h4 className="font-semibold">
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
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
          )}
        </main>
      </div>
    </div>
  );
}