import type { Skill, Category } from '../../types';

const skills: Skill[] = [
  // Leadership
  { title: 'Engineering Management', competency: 5, category: ['Leadership'] },
  { title: 'Multi-Team Leadership', competency: 5, category: ['Leadership'] },
  { title: 'Delivery Ownership', competency: 5, category: ['Leadership'] },
  { title: 'Stakeholder Management', competency: 5, category: ['Leadership'] },
  { title: 'Organizational Scaling', competency: 5, category: ['Leadership'] },
  // Cloud / Platform
  { title: 'AWS', competency: 5, category: ['Cloud', 'Tools'] },
  { title: 'Cloud Architecture', competency: 5, category: ['Cloud'] },
  { title: 'Distributed Systems', competency: 5, category: ['Cloud'] },
  { title: 'Observability', competency: 5, category: ['Cloud', 'DevOps'] },
  { title: 'API Gateway / Lambda', competency: 5, category: ['Cloud'] },
  { title: 'CI/CD', competency: 5, category: ['DevOps', 'Tools'] },
  { title: 'Azure DevOps', competency: 4, category: ['DevOps', 'Tools'] },
  // Languages / Frameworks
  { title: 'Node.js', competency: 5, category: ['Web Development', 'Languages'] },
  { title: 'TypeScript', competency: 5, category: ['Web Development', 'Languages'] },
  { title: 'JavaScript', competency: 5, category: ['Web Development', 'Languages'] },
  { title: 'React', competency: 5, category: ['Web Development'] },
  { title: 'React Native', competency: 5, category: ['Web Development'] },
  { title: 'Redux', competency: 5, category: ['Web Development'] },
  { title: 'Express.js', competency: 5, category: ['Web Development'] },
  { title: 'HTML / CSS / SASS', competency: 5, category: ['Web Development', 'Languages'] },
  // Databases / Tools
  { title: 'SQL', competency: 5, category: ['Databases', 'Languages'] },
  { title: 'MongoDB', competency: 4, category: ['Databases'] },
  { title: 'Firebase', competency: 4, category: ['Databases', 'Tools'] },
  { title: 'Git', competency: 5, category: ['Tools'] },
].map((skill) => ({ ...skill, category: [...skill.category].sort() }));

const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
  '#5b9bd5',
];

const categories: Category[] = [...new Set(
  skills.reduce<string[]>((acc, { category }) => acc.concat(category), []),
)].sort().map((name, index) => ({
  name,
  color: colors[index] ?? '#6968b3',
}));

export { categories, skills };
