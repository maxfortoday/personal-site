import React from 'react';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Projects: React.FC = () => (
  <Main>
    <title>Projects | Maxim Kozlov</title>
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Projects</h1>
      <p className="text-gray-500 dark:text-gray-400">A selection of projects I&apos;ve built</p>
    </div>
    <div className="grid sm:grid-cols-2 gap-5">
      {data.map((project) => (
        <Cell data={project} key={project.title} />
      ))}
    </div>
  </Main>
);

export default Projects;
