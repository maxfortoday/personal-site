import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Route {
  path: string;
  label: string;
  index?: boolean;
}

export interface ContactItem {
  link: string;
  label: string;
  icon: IconDefinition;
}

export interface Position {
  company: string;
  position: string;
  link: string;
  daterange: string;
  points: string[];
}

export interface Degree {
  school: string;
  degree: string;
  link?: string;
  year: number;
}

export interface Skill {
  title: string;
  competency: number;
  category: string[];
}

export interface Category {
  name: string;
  color: string;
}

export interface Project {
  title: string;
  subtitle: string;
  link?: string;
  image?: string;
  date: string;
  desc: string;
}

export interface StatRow {
  label: string;
  key?: string;
  value: string | number;
  link?: string;
}
