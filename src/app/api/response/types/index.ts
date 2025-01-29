
import { IconType } from "react-icons";

export type Project = {
    id: number;
    name: string;
    description: string;
    hostedlink: string;
    githubrepository: string;
    technology: string[];
    projectType: "Personal" | "Professional" | "Open Source"; // You can extend this if needed
    challengesFaced: string[];
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

export type Skill = {
    id: number;
    skill: string;
    experience: string; // Consider using a more structured type like `number` for years
};

export type Experience = {
    id: number;
    company: string;
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

export type State = {
    project: ProjectState;
    content: ContentState;
    menu: MenuState;
};
