import React from 'react';
import { hexToRgb } from './util/index';
import AwardsA from './blocks/Achievements/Achievements';
import CertificationsA from './blocks/Certifications/CertificationsA';
import ContactC from './blocks/PersonalDetail/ContactC';
import EducationA from './blocks/Education/EducationA';
import HeadingE from './blocks/Heading/HeadingE';
import HobbiesA from './blocks/Hobbies/HobbiesA';
import LanguagesB from './blocks/Languages/LanguagesB';
import ObjectiveA from './blocks/Objective/ObjectiveA';
import ProjectsA from './blocks/Projects/ProjectsA';
import ReferencesA from './blocks/References/ReferencesA';
import SkillsA from './blocks/Skills/SkillsA';
import WorkA from './blocks/Work/WorkA';

type BlocksType = {
  [key: string]: React.ComponentType<any>; // Blocks type with React components
};

const Blocks: BlocksType = {
  objective: ObjectiveA,
  work: WorkA,
  education: EducationA,
  projects: ProjectsA,
  awards: AwardsA,
  certifications: CertificationsA,
  skills: SkillsA,
  hobbies: HobbiesA,
  languages: LanguagesB,
  references: ReferencesA,
};

type Layout = (keyof typeof Blocks)[]; // Layout array type

interface CelebiProps {
  data: {
    profile: {
      photograph: string;
      firstName: string;
      lastName: string;
      subtitle: string;
      heading: string;
    };
    metadata: {
      layout: {
        celebi: [Layout, Layout];
      };
      colors: {
        background: string;
        text: string;
        primary: string;
      };
      font: string;
    };
  };
}

export default function Celebi ()  {
  return (
      <div id="page"className="relative rounded" >
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4 ml-8">
            <div className="text-center grid gap-4 mt-4 mb-8 mx-6">
              <div>
                <HeadingE>{t('builder.sections.profile')}</HeadingE>
                <div className="relative w-full grid gap-4 text-xs">
                  <ContactC />
                </div>
              </div>

              {layout[0]?.map((x, index) => {
                const Component = Blocks[x];
                if (!Component) {
                  console.error(`No component found for key: "${x}" in layout[0].`);
                  return null; // Skip rendering missing components
                }
                return <Component key={index} />;
              })}
            </div>
          </div>
          <div className="col-span-8">
            <Profile />

            <div className="relative" style={styles.rightSection}>
              <div className="grid gap-4 mt-4 mb-8 mr-8">
                {layout[1]?.map((x, index) => {
                  const Component = Blocks[x];
                  if (!Component) {
                    console.error(`No component found for key: "${x}" in layout[1].`);
                    return null; // Skip rendering missing components
                  }
                  return <Component key={index} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};
