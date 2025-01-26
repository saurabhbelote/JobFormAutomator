"use client";
import React, { ChangeEvent } from "react";
import { usePersonalDataStore } from "@/app/store";

export default function SkillsSection() {
  const { personalData, updatePersonalData } = usePersonalDataStore();

  const handleSkillChange = (e: ChangeEvent<HTMLInputElement>) => {
    updatePersonalData("skill", e.target.value);
  };

  return (
    <div className="mb-2">
      <div className="text-lg font-medium my-2">Technical Skills</div>
      <input
        name="skill"
        onChange={handleSkillChange}
        type="text"
        placeholder="Separate skills by comma"
        value={personalData.skill || ""}
      />
    </div>
  );
}
