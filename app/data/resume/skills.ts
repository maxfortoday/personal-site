import type { Skill, Category } from '../../types';

const skills: Skill[] = [
  // Systems & Architecture
  { title: 'Distributed systems', competency: 5, category: ['Systems & Architecture'] },
  { title: 'API design', competency: 5, category: ['Systems & Architecture'] },
  { title: 'Integration patterns', competency: 5, category: ['Systems & Architecture'] },
  { title: 'Event-driven architecture', competency: 5, category: ['Systems & Architecture'] },

  // Cloud & Platform
  { title: 'AWS', competency: 5, category: ['Cloud & Platform'] },
  { title: 'API Gateway', competency: 5, category: ['Cloud & Platform'] },
  { title: 'IAM', competency: 5, category: ['Cloud & Platform'] },
  { title: 'SQS', competency: 5, category: ['Cloud & Platform'] },
  { title: 'EventBridge', competency: 5, category: ['Cloud & Platform'] },
  { title: 'Secrets Manager', competency: 5, category: ['Cloud & Platform'] },
  { title: 'Observability', competency: 5, category: ['Cloud & Platform'] },

  // Engineering Leadership
  { title: 'Team leadership', competency: 5, category: ['Engineering Leadership'] },
  { title: 'Code standards', competency: 5, category: ['Engineering Leadership'] },
  { title: 'Delivery ownership', competency: 5, category: ['Engineering Leadership'] },
  { title: 'Cross-team execution', competency: 5, category: ['Engineering Leadership'] },

  // AI & Modern Development
  { title: 'OpenAI', competency: 5, category: ['AI & Modern Development'] },
  { title: 'Claude', competency: 5, category: ['AI & Modern Development'] },
  { title: 'Gemini', competency: 5, category: ['AI & Modern Development'] },
  { title: 'Cursor', competency: 5, category: ['AI & Modern Development'] },
  { title: 'LLM workflows', competency: 5, category: ['AI & Modern Development'] },
  { title: 'Structured AI outputs', competency: 5, category: ['AI & Modern Development'] },
].map((skill) => ({ ...skill, category: [...skill.category].sort() }));

const categories: Category[] = [
  { name: 'Systems & Architecture', color: '#3b82f6' },
  { name: 'Cloud & Platform',       color: '#8b5cf6' },
  { name: 'Engineering Leadership', color: '#f59e0b' },
  { name: 'AI & Modern Development', color: '#10b981' },
];

export { categories, skills };
