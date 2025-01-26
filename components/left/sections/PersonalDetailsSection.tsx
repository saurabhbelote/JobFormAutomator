"use client";
import React, { ChangeEvent } from "react";
import { usePersonalDataStore } from "@/app/store";

export default function PersonalDetailsSection() {
  const { personalData, updatePersonalData } = usePersonalDataStore();

  const handleChangePersonal = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    updatePersonalData(name, value);
  };

  return (
    <div className="mb-2">
      <input
        name="name"
        onChange={handleChangePersonal}
        type="text"
        placeholder="Your Name"
        value={personalData.name}
      />
      <input
        name="summary"
        onChange={handleChangePersonal}
        type="text"
        placeholder="Your Summary"
        value={personalData.summary}
      />
      <input
        name="profile"
        onChange={handleChangePersonal}
        type="text"
        placeholder="work profile"
        value={personalData.profile}
      />
      <input
        name="address"
        onChange={handleChangePersonal}
        type="text"
        placeholder="Your address"
        value={personalData.address}
      />
      <input
        name="phone"
        onChange={handleChangePersonal}
        type="number"
        placeholder="Your Phone Number"
        value={personalData.phone}
      />
      <input
        name="email"
        onChange={handleChangePersonal}
        type="text"
        placeholder="Your email"
        value={personalData.email}
      />
      <input
        name="skills"
        onChange={handleChangePersonal}
        type="text"
        placeholder="skills, comma separated"
        value={personalData.skill}
      />
      <input
        name="hobbie"
        onChange={handleChangePersonal}
        type="text"
        placeholder="hobbies, comma separated"
        value={personalData.hobbie}
      />
      <input
        name="languages"
        onChange={handleChangePersonal}
        type="text"
        placeholder="languages, comma separated"
        value={personalData.language}
      />
      <input
        name="linkedin"
        onChange={handleChangePersonal}
        type="text"
        placeholder="LinkedIn url"
        value={personalData.linkedin}
      />
      <input
        name="github"
        onChange={handleChangePersonal}
        type="text"
        placeholder="Github url"
        value={personalData.github}
      />
    </div>
  );
}
