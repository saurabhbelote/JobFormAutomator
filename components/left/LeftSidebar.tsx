// src/components/DataStyleSelection/DataStyleSelection.tsx

"use client";
import React, { ChangeEvent, useState } from "react";
import { usePersonalDataStore } from "@/app/store";
import { GoPerson } from "react-icons/go";
import { BsJournals } from "react-icons/bs";
import { MdWork } from "react-icons/md";
import { GiAchievement } from "react-icons/gi";
import { PiCertificateLight } from "react-icons/pi";
import EducationInput from "./sections/EducationInput";
import ProjectInput from "./sections/ProjectInput";
import ExperienceInput from "./sections/ExperienceInput";
import CertificationInput from "./sections/CertificationInput";
import AchievementInput from "./sections/AchievementInput";
import { GiGraduateCap } from "react-icons/gi";

export default function LeftSidebar() {
  const { personalData, updatePersonalData } = usePersonalDataStore();
  // To Add Personal Data to the State
  const handleChangePersonal = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updatePersonalData(name, value); // Update other fields in the store
  };
  const [education, setEducation] = useState<number[]>([]); // Array to track instances
  const handleAddEducation = () => {
    setEducation((prev) => [...prev, prev.length + 1]); // Add a new instance
  };
  const [project, setProject] = useState<number[]>([]); // Array to track instances
  const handleAddProject = () => {
    setProject((prev) => [...prev, prev.length + 1]); // Add a new instance
  };
  const [experience, setExperience] = useState<number[]>([]); // Array to track instances
  const handleAddExperience = () => {
    setExperience((prev) => [...prev, prev.length + 1]); // Add a new instance
  };
  const [certification, setCertification] = useState<number[]>([]); // Array to track instances
  const handleAddCertification = () => {
    setCertification((prev) => [...prev, prev.length + 1]); // Add a new instance
  };
  const [achievement, setAchievement] = useState<number[]>([]); // Array to track instances
  const handleAddAchievement = () => {
    setAchievement((prev) => [...prev, prev.length + 1]); // Add a new instance
  };

  return (
    <div className="w-full bg-black p-4">
      {/* Personal Details Area */}
      <div className="flex flex-row space-x-5">
        <span>
          <GoPerson color="grey" size={30} />
        </span>
        <span className="text-white text-2xl">Personal Details</span>
      </div>
      <div className="mb-2">
        <div className="my-2">
          <input
            name="name"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Name"
            value={personalData.name}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="summary"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Your Summary"
            value={personalData.summary}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="profile"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Work Profile"
            value={personalData.profile}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="address"
            onChange={handleChangePersonal}
            type="text"
            placeholder="Address"
            value={personalData.address}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="phone"
            onChange={handleChangePersonal}
            type="tel"
            placeholder="Phone number"
            value={personalData.phone}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div className="my-2">
          <input
            name="email"
            onChange={handleChangePersonal}
            type="email"
            placeholder="Email id"
            value={personalData.email}
            className="rounded-md w-72 h-8 bg-gray-700 text-white"
          />
        </div>
        <div>
          <div className="my-2">
            <input
              name="linkedin"
              onChange={handleChangePersonal}
              type="text"
              placeholder="Linkedin"
              value={personalData.linkedin}
              className="rounded-md w-72 h-8 bg-gray-700 text-white"
            />
          </div>
        </div>
        <div>
          <div className="my-2">
            <input
              name="github"
              onChange={handleChangePersonal}
              type="text"
              placeholder="Github"
              value={personalData.github}
              className="rounded-md w-72 h-8 bg-gray-700 text-white"
            />
          </div>
        </div>
      </div>

      {/* Education Area */}
      <div className="mb-2">
        <div className="flex flex-row space-x-5">
          <span>
            <GiGraduateCap color="grey" size={30} />
          </span>
          <span className="text-white text-2xl">Education</span>
        </div>
        <button
          onClick={handleAddEducation}
          className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
        >
          Add Input Component
        </button>

        <div>
          {education.map((id) => (
            <EducationInput key={id} /> // Render each InputComponent with a unique key and id
          ))}
        </div>
      </div>

      {/* Projects Area */}
      <div className="flex flex-row space-x-5">
        <span>
          <BsJournals color="grey" size={30} />
        </span>
        <span className="text-white text-2xl">Projects</span>
      </div>
      <button
        onClick={handleAddProject}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Input Component
      </button>

      <div>
        {project.map((id) => (
          <ProjectInput key={id} /> // Render each InputComponent with a unique key and id
        ))}
      </div>
      {/* Work Experience Area */}
      <div className="flex flex-row space-x-5">
        <span>
          <MdWork color="grey" size={30} />
        </span>
        <span className="text-white text-2xl">Work Experience</span>
      </div>
      <button
        onClick={handleAddExperience}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Input Component
      </button>

      <div>
        {experience.map((id) => (
          <ExperienceInput key={id} /> // Render each InputComponent with a unique key and id
        ))}
      </div>
      {/* Awards & Achievement */}
      <div className="flex flex-row space-x-5">
        <span>
          <GiAchievement color="grey" size={30} />
        </span>
        <span className="text-white text-2xl">Achievements</span>
      </div>
      <button
        onClick={handleAddAchievement}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Input Component
      </button>

      <div>
        {achievement.map((id) => (
          <AchievementInput key={id} /> // Render each InputComponent with a unique key and id
        ))}
      </div>
      {/* Certification */}
      <div className="flex flex-row space-x-5">
        <span>
          <PiCertificateLight color="grey" size={30} />
        </span>
        <span className="text-white text-2xl">Certificates</span>
      </div>
      <button
        onClick={handleAddCertification}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Input Componen
      </button>

      <div>
        {certification.map((id) => (
          <CertificationInput key={id} /> // Render each InputComponent with a unique key and id
        ))}
      </div>
      {/* Languages Area */}
    </div>
  );
}
