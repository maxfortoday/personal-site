import type { Skill, Category } from '../../types';

const skills: Skill[] = [
  // Systems & Architecture
  { title: 'Distributed Systems', competency: 5, category: ['Systems & Architecture'] },
  { title: 'Event-Driven Architecture', competency: 5, category: ['Systems & Architecture'] },
  { title: 'API Gateway Design', competency: 5, category: ['Systems & Architecture'] },
  { title: 'Cloud Architecture (AWS)', competency: 5, category: ['Systems & Architecture'] },
  { title: 'Zero-Downtime Migrations', competency: 5, category: ['Systems & Architecture'] },
  { title: 'Observability & Monitoring', competency: 5, category: ['Systems & Architecture'] },
  { title: 'Security & Identity (Auth0, IAM)', competency: 4, category: ['Systems & Architecture'] },

  // Backend & Infrastructure
  { title: 'Node.js / TypeScript', competency: 5, category: ['Backend & Infrastructure'] },
  { title: 'AWS (Lambda, SQS, RDS, DMS, AppSync)', competency: 5, category: ['Backend & Infrastructure'] },
  { title: 'REST & GraphQL APIs', competency: 5, category: ['Backend & Infrastructure'] },
  { title: 'SQL / Aurora', competency: 5, category: ['Backend & Infrastructure'] },
  { title: 'CI/CD Pipelines', competency: 5, category: ['Backend & Infrastructure'] },
  { title: 'React / React Native', competency: 5, category: ['Backend & Infrastructure'] },
  { title: 'Firebase / MongoDB', competency: 4, category: ['Backend & Infrastructure'] },
  { title: 'Azure DevOps', competency: 4, category: ['Backend & Infrastructure'] },

  // AI & Modern Dev
  { title: 'LLM Integration', competency: 5, category: ['AI & Modern Dev'] },
  { title: 'Structured Output Pipelines', competency: 5, category: ['AI & Modern Dev'] },
  { title: 'Agent Workflows', competency: 5, category: ['AI & Modern Dev'] },
  { title: 'AI-Assisted Engineering', competency: 5, category: ['AI & Modern Dev'] },
  { title: 'Prompt Engineering', competency: 4, category: ['AI & Modern Dev'] },
  { title: 'Generative AI (Video, Voice)', competency: 4, category: ['AI & Modern Dev'] },

  // Leadership
  { title: 'Engineering Management', competency: 5, category: ['Leadership'] },
  { title: 'Multi-Team Leadership', competency: 5, category: ['Leadership'] },
  { title: 'Delivery Ownership', competency: 5, category: ['Leadership'] },
  { title: 'Stakeholder Management', competency: 5, category: ['Leadership'] },
  { title: 'Organizational Scaling', competency: 5, category: ['Leadership'] },
  { title: 'Technical Roadmapping', competency: 5, category: ['Leadership'] },
].map((skill) => ({ ...skill, category: [...skill.category].sort() }));

const colors: Record<string, string> = {
  'Systems & Architecture': '#3b82f6',
  'Backend & Infrastructure': '#8b5cf6',
  'AI & Modern Dev': '#10b981',
  'Leadership': '#f59e0b',
};

const categories: Category[] = ['Systems & Architecture', 'Backend & Infrastructure', 'AI & Modern Dev', 'Leadership']
  .map((name) => ({ name, color: colors[name] ?? '#6968b3' }));

export { categories, skills };
