export interface Profile {
  network: string;
  username: string;
  url: string;
}

export interface Basics {
  name: string;
  picture: string;
  label: string;
  headline: string;
  summary: string;
  website: string;
  address: string;
  projects_url: string;
  username: string;
  email: string;
  profiles: Profile[];
}

export interface Skill {
  name: string;
  keywords: string[];
}

export interface Work {
  company: string;
  position: string;
  website: string;
  startDate: string;
  endDate?: string;
  isCurrentRole?: boolean;
  location: string;
  summary?: string;
  highlights?: string[];
}

export interface Project {
  name: string;
  displayName: string;
  summary: string;
  githubUrl?: string;
  website?: string;
  skills: string[];
}

export interface Education {
  institution: string;
  area: string;
  studyType: string;
  startDate: string;
  endDate: string;
}

export interface Language {
  language: string;
  fluency: string;
}

export interface Publication {
  name: string;
  publisher: string;
  releaseDate: string;
  website: string;
  slides?: string;
  summary: string;
  fullReleaseDate?: {
    year: number;
    month: number;
    day: number;
  };
}

export interface Award {
  title: string;
  date: string;
  awarder: string;
  summary: string;
}

export interface ResumeData {
  basics: Basics;
  skills: Skill[];
  work: Work[];
  projects: Project[];
  education: Education[];
  languages: Language[];
  publications?: Publication[];
  awards?: Award[];
}
