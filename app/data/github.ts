import dayjs from 'dayjs';

import type { StatRow } from '../types';

export const githubKeys = [
  'stargazers_count',
  'watchers_count',
  'forks',
  'open_issues_count',
  'subscribers_count',
  'pushed_at',
] as const;

const data: StatRow[] = [
  {
    label: 'Stars this repository has on GitHub',
    key: 'stargazers_count',
    value: '0',
    link: 'https://github.com/maxfortoday/personal-site/stargazers',
  },
  {
    label: 'Number of people watching this repository',
    key: 'subscribers_count',
    value: '0',
    link: 'https://github.com/maxfortoday/personal-site/stargazers',
  },
  {
    label: 'Number of forks',
    key: 'forks',
    value: '0',
    link: 'https://github.com/maxfortoday/personal-site/network',
  },
  {
    label: 'Open GitHub issues',
    key: 'open_issues_count',
    value: '0',
    link: 'https://github.com/maxfortoday/personal-site/issues',
  },
  {
    label: 'Last updated at',
    key: 'pushed_at',
    value: dayjs().format('MMMM D, YYYY'),
    link: 'https://github.com/maxfortoday/personal-site/commits',
  },
];

export default data;
