export interface Project {
  slug: string;
  title: string;
  description: string;
  tools: string[];
  links: {
    github?: string;
    site?: string;
    youtube?: string;
  };
  images: {
    light: string;
    dark: string;
  };
  status: string;
  caseStudy?: {
    summary: string;
    challenge: string;
    solution: string;
    impact: string;
    metrics: string[];
    stack: string[];
  };
}

export interface Experience {
  role: string;
  employment_type: string;
  company: string;
  logo?: string;
  company_url: string;
  start_date: string;
  end_date: string;
  duration: string | null;
  location: string;
  work_type: string;
  role_description: string[];
  tech_stack: string[];
}

export interface BlogPost {
  id: number;
  title: string;
  href: string;
  subtitle: string;
  cover_image: string;
  date: string;
  tags: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: string[];
  stack: string[];
}

export interface Profile {
  title: string;
  name: string;
  link: string;
}
