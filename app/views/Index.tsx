import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index: React.FC = () => (
  <Main>
    <title>Maxim Kozlov – Engineering Leader</title>
    <div className="flex flex-col gap-8">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 shadow-sm">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">Maxim Kozlov</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">Engineering Leader · Cloud Platforms · Multi-Team Delivery</p>
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          Welcome. Feel free to read more{' '}
          <Link to="/about" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium">about me</Link>,
          view my{' '}
          <Link to="/resume" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium">resume</Link>,{' '}
          check out my{' '}
          <Link to="/projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium">projects</Link>,{' '}
          see{' '}
          <Link to="/stats" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium">site statistics</Link>,{' '}
          or{' '}
          <a href="mailto:admtrigger@gmail.com" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:underline font-medium">get in touch</a>.
        </p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Source available on{' '}
          <a
            href="https://github.com/maxfortoday/personal-site"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { to: '/about', label: 'About Me' },
          { to: '/resume', label: 'Resume' },
          { to: '/projects', label: 'Projects' },
          { to: '/ai', label: 'AI Stack' },
        ].map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center justify-center px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-sm transition-all duration-150"
          >
            {label}
          </Link>
        ))}
      </div>
    </div>
  </Main>
);

export default Index;
