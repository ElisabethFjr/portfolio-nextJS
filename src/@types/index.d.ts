export interface NavLinks {
  name: string;
  id: string;
}

export interface CareerSection {
  title: string;
  date: string;
  subtitle?: string;
  description?: string[];
  location?: string;
}

export interface Skill {
  name: string;
  iconSrc: string;
}
export interface SkillsSection {
  title: string;
  elems: Skill[];
}

export interface Projects {
  title: string;
  description: string;
  link: string;
  imageSrc: string;
  tags: string[];
}