export interface Project {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  category: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  role: string;
  previewType: 'hackhub' | 'finpilot' | 'movie';
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Interests';
  icon?: string;
  description: string;
}

export interface TimelineMilestone {
  year: string;
  period: string;
  title: string;
  organization: string;
  location: string;
  status: 'CURRENT' | 'ACTIVE' | 'UPCOMING';
  description: string;
  tags: string[];
}

export interface CertificateItem {
  id: string;
  number: string;
  title: string;
  issuer: string;
  issueDate?: string;
  verified: boolean;
  verificationUrl?: string;
  imagePreview: string;
  documentPdf?: string;
  category: string;
  description: string;
  skills: string[];
}
