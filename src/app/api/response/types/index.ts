
import { IconType } from "react-icons";

export type Project = {
    id: number;
    name: string;
    description: string;
    hostedlink: string;
    githubrepository: string;
    skill: string[];
    projectType: "Personal" | "Professional" | "Open Source"; // You can extend this if needed
    challengesFaced: string[];
    companyPrefix:string;
};

export type Content = {
    id: number;
    title: string;
    content: string;
};

export type Menu = {
    id: number;
    name: string;
    active: boolean;
    description: string;
    path: string;
    icon: IconType; // For react-icons components
};

export type Education = {
    id: number;
    educationLevel: string;
    course: string;
    specification: string;
    institute: string;
    percentage: number | null;
    duration: {
        start: string;
        end: string;
    };
};

export type Skill = {
    id: number;
    skill: string;
    experience: string;
    tag: string[];
};

export type Experience = {
    id: number;
    company: string;
    companyPrefix:string;
    role: string;
    experience: {
        dateStart: string; // Consider using Date type if parsing is needed
        dateEnd: string;   // Same as above
    };
    description: string;
    projects: {
        id: number;
        name: string;
    }[];
    skills: {
        id: number;
        skill: string;
    }[];
};

export type Contact = {
    id: number;
    name: string;
    type: string;
    link: string;
    description: string;
};

export type Challenge = {
    id: number;
    content: string;
    skills: string[];
    projects: string[];
};

export type ProjectState = {
    projects: Project[];
    loading: boolean;
};

export type ContentState = {
    contents: Content[];
    loading: boolean;
};

export type MenuState = {
    menus: Menu[];
    loading: boolean;
};

export type EducationState = {
    educations: Education[];
    loading: boolean;
};

export type SkillState = {
    skills: Skill[];
    loading: boolean;
};

export type ExperienceState = {
    experiences: Experience[];
    loading: boolean;
};

export type ContactState = {
    contacts: Contact[];
    loading: boolean;
};

export type ChallengeState = {
    challenges: Challenge[];
    loading: boolean;
};

export type State = {
    project: ProjectState;
    content: ContentState;
    menu: MenuState;
    skill: SkillState;
    education: EducationState;
    experience: ExperienceState;
};
