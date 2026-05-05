import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import type { Components } from 'react-markdown';

import Main from '../layouts/Main';
import markdown from '../data/about.md?raw';

const wordCount = markdown
  .split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;

const components: Components = {
  a: ({ href, children }) => {
    if (href?.startsWith('/')) {
      return <Link to={href} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline">{children}</Link>;
    }
    return <a href={href} className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline" target="_blank" rel="noopener noreferrer">{children}</a>;
  },
};

const About: React.FC = () => (
  <Main>
    <title>About | Maxim Kozlov</title>
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 sm:p-8 shadow-sm">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">About Me</h1>
        <p className="text-sm text-gray-400 dark:text-gray-500">(in about {wordCount} words)</p>
      </div>
      {/* rehype-raw is safe here: about.md is a local dev-controlled file, not user input */}
      <div className="prose prose-gray dark:prose-invert max-w-none">
        <ReactMarkdown components={components} rehypePlugins={[rehypeRaw]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  </Main>
);

export default About;
