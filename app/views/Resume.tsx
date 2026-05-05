import React from 'react';

import Main from '../layouts/Main';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';
import References from '../components/Resume/References';

import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import { skills, categories } from '../data/resume/skills';

const sections = ['Education', 'Experience', 'Skills', 'References'] as const;

const Resume: React.FC = () => (
  <Main>
    <title>Resume | Maxim Kozlov</title>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Resume</h1>
        <div className="flex flex-wrap gap-3">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec.toLowerCase()}`}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium"
            >
              {sec}
            </a>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={() => window.print()}
        className="no-print shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium transition-colors self-start sm:self-auto"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        </svg>
        Save as PDF
      </button>
    </div>
    <div className="space-y-10">
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <References />
    </div>
  </Main>
);

export default Resume;
