// pages/index.tsx
import Head from "next/head";
import { Inter } from "next/font/google";
import Image from "next/image";
import {
  usePersonalDataStore,
  useCertificateStore,
  useAchievementStore,
  useExperienceStore,
  useEducationStore,
  useProjectStore,
  useLanguageStore,
  useSkillStore
} from "@/app/store";

const inter = Inter({ subsets: ["latin"] });

export default function Glallie() {
  const { personalData } = usePersonalDataStore();
  const { certificates } = useCertificateStore();
  const { achievements } = useAchievementStore();
  const { experiences } = useExperienceStore();
  const { educations } = useEducationStore();
  const { projects } = useProjectStore();
  const { languages } = useLanguageStore();
  const { skills } = useSkillStore();
  return (
    <>
      <Head>
        <title>Amruth Pillai | Resume</title>
        <meta name="description" content="Full Stack Web Developer Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className={`max-w-5xl mx-auto p-8 ${inter.className} text-black bg-[#f8f5ff]`}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Left sidebar */}
          <div className="md:col-span-1 flex flex-col items-center text-center bg-white p-6 rounded">
            <div className="mb-4">
              <Image
                src="/images/avatar.png"
                alt="Profile"
                height={128}
                width={128}
                className="w-full h-full object-cover rounded"
              />
            </div>
            <h1 className="text-3xl font-bold mb-1">{personalData.name}</h1>
            <p className="uppercase text-sm font-medium mb-6">
              {personalData.headline}
            </p>

            <div className="border border-purple-200 rounded p-4 w-full mb-4">
              <div className="mb-4 flex flex-col items-center">
                <div className="text-purple-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    />
                  </svg>
                </div>
                <h3 className="font-bold mt-2">Address</h3>
              </div>
              <p className="text-sm">{personalData.address}</p>
            </div>

            <div className="w-full space-y-4">
              <div className="text-center">
                <p className="font-bold">Phone</p>
                <p className="text-sm">{personalData.phone}</p>
              </div>

              <div className="text-center">
                <p className="font-bold">Website</p>
                <p className="text-sm">{personalData.github}</p>
              </div>

              <div className="text-center">
                <p className="font-bold">Email</p>
                <p className="text-sm">{personalData.email}</p>
              </div>

              <div className="text-center">
                <p className="font-bold">Twitter</p>
                <p className="text-sm">{personalData.twitter}</p>
              </div>

              <div className="text-center">
                <p className="font-bold">LinkedIn</p>
                <p className="text-sm">{personalData.linkedin}</p>
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
                To obtain a job within my chosen field that will challenge me
                and allow me to use my education, skills and past experiences in
                a way that is mutually beneficial to both myself and my employer
                and allow for future growth and advancement.
              </p>
            </div>

            {/* Work Experience section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                WORK EXPERIENCE
              </h2>
              {experiences.map((experience, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">
                        {experience.company}, {experience.location}
                      </h3>
                      <p className="text-sm">{experience.position}</p>
                    </div>
                    <p className="text-sm">{experience.dateRange}</p>
                  </div>
                  {experience.description && (
                    <ul className="list-disc ml-5 mt-2">
                      {experience.description.split(",").map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Education section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                EDUCATION
              </h2>
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

            {/* Skills section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                SKILLS
              </h2>

              <div className="grid grid-cols-2 gap-4">
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
            </div>

            {/* Projects section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                PROJECTS
              </h2>
              {projects.map((project, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{project.name}</h3>
                      <p className="text-sm">{project.website}</p>
                    </div>
                    <p className="text-sm">{project.date}</p>
                  </div>
                  <p className="mt-2">{project.description}</p>
                </div>
              ))}
            </div>

            {/* Languages section */}
            <div className="mb-6">
              <h2 className="text-xl font-bold text-purple-700 uppercase border-b-2 border-purple-700 pb-1 mb-4">
                LANGUAGES
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {languages.map((language, index) => (
                  <div key={index}>
                    <h3 className="font-bold">{language.heading}</h3>
                    <p className="text-sm">{language.option}</p>
                  </div>
                ))}
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
            {certificates.map((certificate, index) => (
              <div key={index}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-bold">{certificate.title}</h3>
                    <p className="text-sm">{certificate.awarder}</p>
                  </div>
                  <p className="text-sm">{certificate.date}</p>
                </div>
              </div>
            ))}
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
