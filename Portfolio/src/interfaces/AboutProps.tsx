export interface TextChoiceProps {
  person: string;
  diplome: string;
  competences: string;
  experience: string;
  contact: string;
}

export interface FormationProps {
  annee: string;
  ecole: string;
  diplome: string;
  description: Array<string>;
}

export interface StackProps {
  title: string;
  techno: Array<string>;
}

export interface ExpStacks {
  backend: string;
  frontend: string;
}

export interface ExpDescriptionProps {
  title: string;
  stacks: ExpStacks;
}

export interface ExpProps {
  years: string;
  post: string;
  workplace: string;
  description: Array<ExpDescriptionProps>;
  acquiredSkills: Array<string>;
}

export interface ProjectDescription {
  key: number;
  name: string;
  description: string;
  language: string[];
  screen: string[];
  lienGithub: string;
}
