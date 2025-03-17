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
  useSkillStore,
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
        <title>Nosepass Styled Resume</title>
        <meta name="description" content="Full Stack Web Developer Resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 
        1) .p-custom applies the custom padding from your global CSS
        2) .space-y-6 is standard Tailwind for vertical spacing
        3) .bg-white or .bg-primary/10 can be used for overall background
      */}
      <main className={`p-custom space-y-6 bg-white text-black ${inter.className}`}>
        {/* 
          We’ll keep the same 2-column logic as your old approach,
          but adopt the “Nosepass” look (grid, gap-x-6, etc.)
        */}
        <div className="grid grid-cols-4 gap-x-6">
          {/* Left Sidebar: col-span-1 */}
          <div className="col-span-4 md:col-span-1 flex flex-col items-center text-center space-y-4">
            {/* Profile Picture */}
            <div className="mt-1">
              <Image
                src="/images/avatar.png"
                alt="Profile"
                height={128}
                width={128}
                className="rounded object-cover"
              />
            </div>

            {/* Name & Headline */}
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">{personalData.name}</h1>
              <p className="text-base">{personalData.headline}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              {personalData.address && (
                <div className="flex items-center justify-center gap-x-1.5">
                  <i className="ph ph-bold ph-map-pin text-primary" />
                  <div>{personalData.address}</div>
                </div>
              )}
              {personalData.phone && (
                <div className="flex items-center justify-center gap-x-1.5">
                  <i className="ph ph-bold ph-phone text-primary" />
                  <a href={`tel:${personalData.phone}`}>{personalData.phone}</a>
                </div>
              )}
              {personalData.email && (
                <div className="flex items-center justify-center gap-x-1.5">
                  <i className="ph ph-bold ph-at text-primary" />
                  <a href={`mailto:${personalData.email}`}>{personalData.email}</a>
                </div>
              )}
              {personalData.github && (
                <div className="flex items-center justify-center gap-x-1.5">
                  <i className="ph ph-bold ph-globe text-primary" />
                  <a href={personalData.github} target="_blank" rel="noreferrer">
                    {personalData.github}
                  </a>
                </div>
              )}
              {personalData.twitter && (
                <div className="flex items-center justify-center gap-x-1.5">
                  <i className="ph ph-bold ph-twitter-logo text-primary" />
                  <a href={personalData.twitter} target="_blank" rel="noreferrer">
                    {personalData.twitter}
                  </a>
                </div>
              )}
              {personalData.linkedin && (
                <div className="flex items-center justify-center gap-x-1.5">
                  <i className="ph ph-bold ph-linkedin-logo text-primary" />
                  <a href={personalData.linkedin} target="_blank" rel="noreferrer">
                    {personalData.linkedin}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Main Content: col-span-3 */}
          <div className="col-span-4 md:col-span-3 space-y-6">
            {/* Objective Section */}
            <section>
              <div className="grid grid-cols-4 gap-x-6">
                <div className="text-right">
                  <h4 className="font-medium text-primary">Objective</h4>
                </div>
                <div className="col-span-3">
                  {/* HR + Dot (Nosepass styling) */}
                  <div className="relative">
                    <hr className="mt-3 border-primary" />
                    <div className="absolute bottom-0 right-0 size-3 bg-primary" />
                  </div>
                  <p className="mt-3">
                    To obtain a job within my chosen field that will challenge me
                    and allow me to use my education, skills, and past experiences
                    in a way that is mutually beneficial to both myself and my
                    employer, allowing future growth and advancement.
                  </p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <div className="grid grid-cols-4 gap-x-6">
                <div className="text-right">
                  <h4 className="font-medium text-primary">Work Experience</h4>
                </div>
                <div className="col-span-3">
                  <div className="relative">
                    <hr className="mt-3 border-primary" />
                    <div className="absolute bottom-0 right-0 size-3 bg-primary" />
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {experiences.map((experience, index) => (
                  <div key={index} className="grid grid-cols-4 gap-x-6">
                    <div className="text-right font-medium text-primary">{experience.dateRange}</div>
                    <div className="col-span-3 space-y-1">
                      <h3 className="font-bold">
                        {experience.company}, {experience.location}
                      </h3>
                      <p className="text-sm">{experience.position}</p>
                      {experience.description && (
                        <ul className="list-disc ml-5 text-sm">
                          {experience.description.split(",").map((detail, i) => (
                            <li key={i}>{detail.trim()}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <div className="grid grid-cols-4 gap-x-6">
                <div className="text-right">
                  <h4 className="font-medium text-primary">Education</h4>
                </div>
                <div className="col-span-3">
                  <div className="relative">
                    <hr className="mt-3 border-primary" />
                    <div className="absolute bottom-0 right-0 size-3 bg-primary" />
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {educations.map((education, index) => (
                  <div key={index} className="grid grid-cols-4 gap-x-6">
                    <div className="text-right font-medium text-primary">
                      {education.dateRange}
                    </div>
                    <div className="col-span-3 space-y-1">
                      <h4 className="font-bold">{education.institute}</h4>
                      <p className="text-sm">
                        {education.typeofstudy} in {education.areaofstudy}
                      </p>
                      {education.score && <p className="text-sm">{education.score}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <div className="grid grid-cols-4 gap-x-6">
                <div className="text-right">
                  <h4 className="font-medium text-primary">Skills</h4>
                </div>
                <div className="col-span-3">
                  <div className="relative">
                    <hr className="mt-3 border-primary" />
                    <div className="absolute bottom-0 right-0 size-3 bg-primary" />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <h4 className="font-bold">{skill.heading}</h4>
                    {skill.items &&
                      skill.items.split(",").map((detail, i) => (
                        <p key={i} className="text-sm">
                          {detail.trim()}
                        </p>
                      ))}
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <div className="grid grid-cols-4 gap-x-6">
                <div className="text-right">
                  <h4 className="font-medium text-primary">Projects</h4>
                </div>
                <div className="col-span-3">
                  <div className="relative">
                    <hr className="mt-3 border-primary" />
                    <div className="absolute bottom-0 right-0 size-3 bg-primary" />
                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                {projects.map((project, index) => (
                  <div key={index} className="grid grid-cols-4 gap-x-6">
                    <div className="text-right font-medium text-primary">{project.date}</div>
                    <div className="col-span-3 space-y-1">
                      <h3 className="font-bold">{project.name}</h3>
                      <p className="text-sm">{project.website}</p>
                      <p className="mt-1 text-sm">{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <div className="grid grid-cols-4 gap-x-6">
                <div className="text-right">
                  <h4 className="font-medium text-primary">Languages</h4>
                </div>
                <div className="col-span-3">
                  <div className="relative">
                    <hr className="mt-3 border-primary" />
                    <div className="absolute bottom-0 right-0 size-3 bg-primary" />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                {languages.map((language, index) => (
                  <div key={index} className="space-y-1">
                    <h3 className="font-bold">{language.heading}</h3>
                    <p className="text-sm">{language.option}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* References */}
            <section>
              <div className="grid grid-cols-4 gap-x-6">
                <div className="text-right">
                  <h4 className="font-medium text-primary">References</h4>
                </div>
                <div className="col-span-3">
                  <div className="relative">
                    <hr className="mt-3 border-primary" />
                    <div className="absolute bottom-0 right-0 size-3 bg-primary" />
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-4">
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
            </section>
          </div>
        </div>

        {/* Awards & Certifications */}
        
          {/* Awards */}
          <section>
            <div className="grid grid-cols-4 gap-x-6">
              <div className="text-right">
                <h4 className="font-medium text-primary">Awards</h4>
              </div>
              <div className="col-span-3">
                <div className="relative">
                  <hr className="mt-3 border-primary" />
                  <div className="absolute bottom-0 right-0 size-3 bg-primary" />
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
            {achievements.map((achievement, index) => (
              <div className="grid grid-cols-4 gap-x-6">
                <div className="text-right font-medium text-primary">{achievement.name}</div>
                <div className="col-span-3 space-y-1">
                  <h3 className="font-bold">{achievement.details}</h3>
                </div>
              </div>))}

            </div>
          </section>

          {/* Certifications */}
          <section>
            <div className="grid grid-cols-4 gap-x-6">
              <div className="text-right">
                <h4 className="font-medium text-primary">Certifications</h4>
              </div>
              <div className="col-span-3">
                <div className="relative">
                  <hr className="mt-3 border-primary" />
                  <div className="absolute bottom-0 right-0 size-3 bg-primary" />
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {certificates.map((certificate, index) => (
                <div key={index} className="grid grid-cols-4 gap-x-6">
                  <div className="text-right font-medium text-primary">{certificate.date}</div>
                  <div className="col-span-3 space-y-1">
                    <h3 className="font-bold">{certificate.title}</h3>
                    <p className="text-sm">{certificate.awarder}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        

        {/* Hobbies */}
        <section>
          <div className="grid grid-cols-4 gap-x-6">
            <div className="text-right">
              <h4 className="font-medium text-primary">Hobbies</h4>
            </div>
            <div className="col-span-3">
              <div className="relative">
                <hr className="mt-3 border-primary" />
                <div className="absolute bottom-0 right-0 size-3 bg-primary" />
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-6">
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
        </section>
      </main>
    </>
  );
}
