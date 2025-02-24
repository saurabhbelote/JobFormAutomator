"use client";
import React, { ChangeEvent } from "react";
import { usePersonalDataStore } from "@/app/store";
import { GoPerson } from "react-icons/go";
import {  BiWorld } from "react-icons/bi";
import { AiOutlineLink, AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import EducationInput from "./sections/EducationInput";
import ExperienceInput from "./sections/ExperienceInput";
import AchievementInput from "./sections/AchievementInput";
import CertificationInput from "./sections/CertificationInput";
import ProjectInput from "./sections/ProjectInput";
import SkillsInput from "./sections/SkillsInput";
import LanguageInput from "./sections/LanguageInput";

export default function LeftSidebar() {
  const { personalData, updatePersonalData } = usePersonalDataStore();
  const handleChangePersonal = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updatePersonalData(name, value);
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

      <ExperienceInput />

      <EducationInput /> 

      <SkillsInput/>

      <AchievementInput />

      <CertificationInput />

      <ProjectInput/>

      <LanguageInput/>

    </div>
  );
}
