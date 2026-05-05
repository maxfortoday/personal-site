import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Footer: React.FC = () => (
  <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 mt-auto">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
        <a
          href="mailto:admtrigger@gmail.com"
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
        >
          admtrigger@gmail.com
        </a>
        <span className="text-gray-300 dark:text-gray-600">·</span>
        <span>&copy; {new Date().getFullYear()} Maxim Kozlov</span>
      </div>

      <div className="flex items-center gap-4">
        {data.map((s) => (
          <a
            key={s.label}
            href={s.link}
            aria-label={s.label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 dark:text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <FontAwesomeIcon icon={s.icon} className="w-4 h-4" />
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
