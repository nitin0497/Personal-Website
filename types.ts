export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  description: string;
  location?: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  points: string[];
}

export interface ResearchItem {
  title: string;
  institution: string;
  duration: string;
  points: string[];
}

export interface TeachingItem {
  role: string;
  institution: string;
  courses: string[];
  description: string;
}

export interface WorkingPaper {
  title: string;
  authors: string;
  description: string;
  status?: string;
  link?: string;
}

export interface Project {
  title: string;
  githubLink?: string;
  description: string;
  keyContributions?: { title?: string; items: string[] }[];
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedin: string;
  github: string;
}
