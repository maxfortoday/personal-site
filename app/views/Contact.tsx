import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';
import data from '../data/contact';

const Contact: React.FC = () => (
  <Main>
    <title>Contact | Maxim Kozlov</title>
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Contact</h1>
    </div>
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <p className="text-gray-600 dark:text-gray-300 mb-2">Feel free to get in touch. You can reach me at:</p>
        <a
          href="mailto:admtrigger@gmail.com"
          className="text-blue-600 hover:text-blue-700 font-medium hover:underline text-lg"
        >
          admtrigger@gmail.com
        </a>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">Find me on</p>
        <div className="flex flex-wrap gap-3">
          {data.map((s) => (
            <a
              key={s.label}
              href={s.link}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 border border-gray-200 dark:border-gray-600 hover:border-blue-200 dark:hover:border-blue-700 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-150"
            >
              <FontAwesomeIcon icon={s.icon} className="w-4 h-4" />
              <span className="text-sm font-medium">{s.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </Main>
);

export default Contact;
