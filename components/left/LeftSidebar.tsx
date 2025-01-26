"use client";
import React from "react";
import PersonalDetailsSection from "./sections/PersonalDetailsSection";
import EducationSection from "./sections/EducationSection";
import ProjectSection from "./sections/ProjectSection";
import SkillsSection from "./sections/SkillsSection";
import HobbiesSection from "./sections/HobbiesSection";
import LanguagesSection from "./sections/LanguagesSection";
import CertificatesSection from "./sections/CertificatesSection";

export default function LeftSidebar() {
  return (
    <div className="w-1/5 mx-2">
      <PersonalDetailsSection />
      <SkillsSection />
      <HobbiesSection />
      <LanguagesSection />
      <EducationSection />
      <ProjectSection />
      <CertificatesSection />
    </div>
  );
}
