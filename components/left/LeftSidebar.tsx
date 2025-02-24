"use client";
import React, { ChangeEvent, useState } from "react";
import { usePersonalDataStore } from "@/app/store";
import { GoPerson } from "react-icons/go";
import { BsJournals,BsFillPersonLinesFill } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateLight } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa";
import { BiBook,BiWorld } from "react-icons/bi";
import { MdInterests, MdVolunteerActivism } from "react-icons/md";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import EducationInput from "./sections/EducationInput";

export default function LeftSidebar() {
  const { personalData, updatePersonalData } = usePersonalDataStore();
  const [experience, setExperience] = useState<number[]>([]);
  const [projects, setProjects] = useState<number[]>([]);
  const [skills, setSkills] = useState<number[]>([]);
  const [languages, setLanguages] = useState<number[]>([]);
  const [awards, setAwards] = useState<number[]>([]);
  const [certifications, setCertifications] = useState<number[]>([]);
  const [interests, setInterests] = useState<number[]>([]);
  const [publications, setPublications] = useState<number[]>([]);
  const [volunteering, setVolunteering] = useState<number[]>([]);
  const [references, setReferences] = useState<number[]>([]);

  const handleChangePersonal = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updatePersonalData(name, value);
  };

  const addItem = (setter: React.Dispatch<React.SetStateAction<number[]>>) => {
    setter((prev) => [...prev, prev.length + 1]);
  };

  return (
    <div className="w-full h-[1000px] overflow-scroll scrollbar-hidden bg-white text-black">
      {/* Basics Section */}
      <section className="p-6 border-b">
        <div className="flex items-center gap-2 mb-6">
          <GoPerson className="text-xl" />
          <h2 className="text-xl font-bold">Basics</h2>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Picture</label>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-emerald-700 rounded-full flex items-center justify-center text-white text-xl">
              {personalData.name?.[0] || "M"}
            </div>
            {/* <input
              type="text"
              placeholder="Profile picture URL"
              className="flex-1 p-2 border rounded-md"
              name="pictureUrl"
              value={personalData.pictureUrl || ''}
              onChange={handleChangePersonal}
            /> */}
            <button className="p-2 border rounded-md hover:bg-gray-50">
              <AiOutlineLink className="text-gray-500" />
            </button>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Full Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            name="name"
            value={personalData.name}
            onChange={handleChangePersonal}
            placeholder="Your full name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Headline</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            name="headline"
            value={personalData.headline}
            onChange={handleChangePersonal}
            placeholder="Your professional headline"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <div className="relative">
              <input
                type="email"
                className="w-full p-2 pl-8 border rounded-md"
                name="email"
                value={personalData.email || ""}
                onChange={handleChangePersonal}
                placeholder="Your email"
              />
              <AiOutlineMail className="absolute left-2 top-3 text-gray-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Website</label>
            <div className="relative">
              <input
                type="url"
                className="w-full p-2 pl-8 border rounded-md"
                name="github"
                value={personalData.github || ""}
                onChange={handleChangePersonal}
                placeholder="Your website"
              />
              <BiWorld className="absolute left-2 top-3 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Twitter</label>
            <div className="relative">
              <input
                type="url"
                className="w-full p-2 pl-8 border rounded-md"
                name="twitter"
                value={personalData.twitter || ""}
                onChange={handleChangePersonal}
                placeholder="Your email"
              />
              <AiOutlineMail className="absolute left-2 top-3 text-gray-500" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">LinkedIn</label>
            <div className="relative">
              <input
                type="url"
                className="w-full p-2 pl-8 border rounded-md"
                name="linkedin"
                value={personalData.linkedin || ""}
                onChange={handleChangePersonal}
                placeholder="Your website"
              />
              <BiWorld className="absolute left-2 top-3 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div>
            <label className="block text-sm font-medium mb-2">Phone</label>
            <div className="relative">
              <input
                type="number"
                className="w-full p-2 pl-8 border rounded-md"
                name="phone"
                value={personalData.phone || ""}
                onChange={handleChangePersonal}
                placeholder="+1 (123) 456-7890"
              />
              <FiPhone className="absolute left-2 top-3 text-gray-500" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Location </label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              name="location"
              value={personalData.address || ""}
              onChange={handleChangePersonal}
              placeholder="Your location"
            />
          </div>
        </div>
      </section>

      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BsJournals className="text-xl" />
            <h2 className="text-xl font-bold">Summary</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>

        {/* Rich Text Editor Toolbar */}
        <div className="flex flex-wrap gap-2 mb-4 p-2 border rounded-md">
          <button className="p-2 hover:bg-gray-100 rounded">B</button>
          <button className="p-2 hover:bg-gray-100 rounded italic">I</button>
          <button className="p-2 hover:bg-gray-100 rounded line-through">
            S
          </button>
          <button className="p-2 hover:bg-gray-100 rounded">A</button>
          <button className="p-2 hover:bg-gray-100 rounded">@</button>
          <button className="p-2 hover:bg-gray-100 rounded">🔗</button>
          <button className="p-2 hover:bg-gray-100 rounded">&lt;/&gt;</button>
        </div>

        <textarea
          className="w-full p-3 border rounded-md min-h-[150px]"
          name="summary"
          value={personalData.summary}
          onChange={handleChangePersonal}
          placeholder="Write your professional summary..."
        />
      </section>
      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MdWork className="text-xl" />
            <h2 className="text-xl font-bold">Experience</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setExperience)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {experience.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>

      <EducationInput/>

      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GiAchievement className="text-xl" />
            <h2 className="text-xl font-bold">Skills</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setSkills)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {skills.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>

      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaLanguage className="text-xl" />
            <h2 className="text-xl font-bold">Languages</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setLanguages)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {languages.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>

      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <GiAchievement className="text-xl" />
            <h2 className="text-xl font-bold">Awards</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setAwards)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {awards.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>

      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <PiCertificateLight className="text-xl" />
            <h2 className="text-xl font-bold">Certifications</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setCertifications)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {certifications.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>

      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MdInterests className="text-xl" />
            <h2 className="text-xl font-bold">Interests</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setInterests)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {interests.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>

      {/* Projects section  */}
      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BiBook className="text-xl" />
            <h2 className="text-xl font-bold">Projects</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setProjects)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {projects.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>
      {/* end  */}
      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BsJournals className="text-xl" />
            <h2 className="text-xl font-bold">Publications</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setPublications)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {publications.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>

      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MdVolunteerActivism className="text-xl" />
            <h2 className="text-xl font-bold">Volunteering</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setVolunteering)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {volunteering.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>

      <section className="p-6 border-b">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <BsFillPersonLinesFill className="text-xl" />
            <h2 className="text-xl font-bold">References</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-md">
            <span className="sr-only">Toggle</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
        <button
          onClick={() => addItem(setReferences)}
          className="w-full p-3 border-2 border-dashed rounded-md text-gray-500 hover:bg-gray-50 transition-colors"
        >
          + Add a new item
        </button>
        {references.map((id) => (
          <div key={id} className="mt-4 p-4 border rounded-md"></div>
        ))}
      </section>
    </div>
  );
}
