import {create} from 'zustand';
import React from 'react';
//change the personal data
type PersonalData = {
    name:string;
    headline:string;
    summary: string;
    profile: string;
    address: string;
    phone: string;
    email: string;
    skill: string;
    hobbie: string;
    language: string;
    twitter:string;
    linkedin: string;
    github: string;
};

type PersonalDataStore = {
    personalData: PersonalData;
    updatePersonalData: (name: string, value: string) => void;
};

export const usePersonalDataStore = create<PersonalDataStore>((set) => ({
    personalData: {
        name: "",
        headline:"",
        summary: "",
        profile: "",
        address: "",
        phone: "",
        email: "",
        skill: "",
        hobbie: "",
        language: "",
        twitter:"",
        linkedin: "",
        github: "",
    },
    updatePersonalData: (name, value) => {
        set((state) => ({
            personalData: {
                ...state.personalData,
                [name]: value,
            },
        }));
    },
}));

//change the project data
type Project = {
    id: string; 
    name: string;
    description: string;
    date:string;
    website:string;

};

type ProjectStore = {
    projects: Project[];
    addProject: (name: string, details: string, date:string, website:string) => void;
    updateProject: (id: string, name: string, details: string) => void;
    deleteProject: (id: string) => void;
};

export const useProjectStore = create<ProjectStore>((set) => ({
    projects: [],
    addProject: (name, description, website, date) => {
        const newProject: Project = {
            id: Date.now().toString(), // Use a timestamp as a unique ID
            name,
            description,
            website,
            date
        };
        set((state) => ({
            projects: [...state.projects, newProject],
        }));
    },
    updateProject: (id, name, details) => {
        set((state) => ({
            projects: state.projects.map((project) =>
                project.id === id ? { ...project, name, details } : project
            ),
        }));
    },
    deleteProject: (id) => {
        set((state) => ({
            projects: state.projects.filter((project) => project.id !== id),
        }));
    },
}));


type Education = {
    id: string; 
    institute: string; 
    areaofstudy: string; 
    typeofstudy: string; 
    dateRange: string; 
    score: string;
};

type EducationStore = {
    educations: Education[]; 
    addEducation: (institute: string, areaofstudy: string, typeofstudy: string, dateRange: string, score: string) => void; // Add education
    updateEducation: (id: string, institute: string, areaofstudy: string, typeofstudy: string, dateRange: string, score: string) => void; // Update education
    deleteEducation: (id: string) => void; 
};

export const useEducationStore = create<EducationStore>((set) => ({
    educations: [],

    // Add a new education entry
    addEducation: (institute, areaofstudy, typeofstudy, dateRange, score) => {
        const newEducation: Education = {
            id: Date.now().toString(), // Generate unique ID using timestamp
            institute,
            areaofstudy,
            typeofstudy,
            dateRange,
            score,
        };
        set((state) => ({
            educations: [...state.educations, newEducation],
        }));
    },

    // Update an existing education entry
    updateEducation: (id, institute, areaofstudy, typeofstudy, dateRange, score) => {
        set((state) => ({
            educations: state.educations.map((education) =>
                education.id === id
                    ? { ...education, institute, areaofstudy, typeofstudy, dateRange, score }
                    : education
            ),
        }));
    },

    // Delete an education entry
    deleteEducation: (id) => {
        set((state) => ({
            educations: state.educations.filter((education) => education.id !== id),
        }));
    },
}));

//change the certificate data
type Certificate = {
    id: string;
    title: string;
    awarder: string;
    date: string;
    link: string;
};

type CertificateStore = {
    certificates: Certificate[];
    addCertificate: (title: string, awarder: string, date: string, link: string) => void; // Add certificate
    updateCertificate: (id: string, title: string, awarder: string, date: string, link: string) => void; // Update certificate
    deleteCertificate: (id: string) => void;
};

export const useCertificateStore = create<CertificateStore>((set) => ({
    certificates: [],

    // Add a new certificate entry
    addCertificate: (title, awarder, date, link) => {
        const newCertificate: Certificate = {
            id: Date.now().toString(), // Generate unique ID using timestamp
            title,
            awarder,
            date,
            link,
        };
        set((state) => ({
            certificates: [...state.certificates, newCertificate],
        }));
    },

    // Update an existing certificate entry
    updateCertificate: (id, title, awarder, date, link) => {
        set((state) => ({
            certificates: state.certificates.map((certificate) =>
                certificate.id === id
                    ? { ...certificate, title, awarder, date, link }
                    : certificate
            ),
        }));
    },

    // Delete a certificate entry
    deleteCertificate: (id) => {
        set((state) => ({
            certificates: state.certificates.filter((certificate) => certificate.id !== id),
        }));
    },
}));

//change the work experience
type Experience = {
    id: string;
    company: string;
    position: string;
    dateRange: string;
    location: string;
    description: string;
};

type ExperienceStore = {
    experiences: Experience[];
    addExperience: (company: string, position: string, dateRange: string, location: string, description: string) => void; // Add experience
    updateExperience: (id: string, company: string, position: string, dateRange: string, location: string, description: string) => void; // Update experience
    deleteExperience: (id: string) => void;
};

export const useExperienceStore = create<ExperienceStore>((set) => ({
    experiences: [],

    // Add a new experience entry
    addExperience: (company, position, dateRange, location, description) => {
        const newExperience: Experience = {
            id: Date.now().toString(), // Generate unique ID
            company,
            position,
            dateRange,
            location,
            description,
        };
        set((state) => ({
            experiences: [...state.experiences, newExperience],
        }));
    },

    // Update an existing experience entry
    updateExperience: (id, company, position, dateRange, location, description) => {
        set((state) => ({
            experiences: state.experiences.map((experience) =>
                experience.id === id
                    ? { ...experience, company, position, dateRange, location, description }
                    : experience
            ),
        }));
    },

    // Delete an experience entry
    deleteExperience: (id) => {
        set((state) => ({
            experiences: state.experiences.filter((experience) => experience.id !== id),
        }));
    },
}));

type Skill = {
    id: string;
    heading: string;
    items: string[]; // Ensure it's an array of strings
  };
  
  type SkillStore = {
    skills: Skill[];
    addSkill: (heading: string, items: string[]) => void;
    updateSkill: (id: string, heading: string, items: string[]) => void;
    deleteSkill: (id: string) => void;
  };
  
  export const useSkillStore = create<SkillStore>((set) => ({
    skills: [],
  
    // Add a new skill entry
    addSkill: (heading, items) => {
      const newSkill: Skill = {
        id: Date.now().toString(), // Generate unique ID
        heading,
        items,
      };
      set((state) => ({
        skills: [...state.skills, newSkill], // Fix incorrect reference to 'experiences'
      }));
    },
  
    // Update an existing skill entry
    updateSkill: (id, heading, items) => {
      set((state) => ({
        skills: state.skills.map((skill) =>
          skill.id === id ? { ...skill, heading, items } : skill
        ),
      }));
    },
  
    // Delete a skill entry
    deleteSkill: (id) => {
      set((state) => ({
        skills: state.skills.filter((skill) => skill.id !== id),
      }));
    },
  }));

//change the achievements
type Achievement = {
    id:string;
    name:string;
    details:string;
}
type AchievementStore = {
    achievements: Achievement[];
    addAchievement:(name:string, details:string) => void;
    updateAchievement:(id:string, name:string, details:string) => void;
    deleteAchievement: (id:string) => void;
}
export const useAchievementStore = create<AchievementStore>((set) =>({
    achievements:[], 

    addAchievement: (name, details) => {
        const newAchievement: Achievement = {
            id: Date.now().toString(), // Generate unique ID
            name,
            details,
        };
        set((state) => ({
            achievements: [...state.achievements, newAchievement],
        }));
    },
    updateAchievement: (id, name, details) => {
        set((state) => ({
            achievements: state.achievements.map((achievement) =>
                achievement.id === id
                    ? { ...achievement, name, details}
                    : achievement
            ),
        }));
    },
    deleteAchievement: (id) => {
        set((state) => ({
            achievements: state.achievements.filter((achievement) => achievement.id !== id),
        }));
    },

}))

//font size
type fontSize = {
    sizeValue: number[];
    setsizeValue: (newValue: number[]) => void;
};
export const usefontSize = create<fontSize>((set) => ({
    sizeValue: [33], // Default value
    setsizeValue: (newValue) => set(() => ({ sizeValue: newValue })),
}));

//font weight
type fontWeight = {
    weightValue: number[];
    setweightValue: (newValue: number[]) => void;
};
export const usefontWeight = create<fontWeight>((set) => ({
    weightValue: [33], // Default value
    setweightValue: (newValue) => set(() => ({ weightValue: newValue })),
}));


//margin
type Margin = {
    marginValue: number[];
    setmarginValue: (newValue: number[]) => void;
};
export const useMargin = create<Margin>((set) => ({
    marginValue: [33], // Default value
    setmarginValue: (newValue) => set(() => ({ marginValue: newValue })),
}));

//font family
type fontFamily = {
    position: string;
    setPosition: (newPosition: string) => void;
};
export const usefontFamily = create<fontFamily>((set) => ({
    position: 'top', 
    setPosition: (newPosition) => set({ position: newPosition }),
}));

//template
// Define the type for the templates

type Template = {
    id: string;
    name: string;
    component: React.ReactNode;
};

type TemplateStore = {
    templates: Template[];
    activeTemplateId: string | null;
    setActiveTemplate: (id: string) => void;
};

export const useTemplateStore = create<TemplateStore>((set) => ({
    templates: [], // Initialize with no templates; add manually or dynamically
    activeTemplateId: null, // No active template initially

    setActiveTemplate: (id) => set({ activeTemplateId: id }),
}));
