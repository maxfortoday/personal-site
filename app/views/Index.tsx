import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import Cell from '../components/Projects/Cell';
import projects from '../data/projects';

const featured = projects.filter((p) => p.featured);

const Index: React.FC = () => (
  <Main>
    <title>Maxim Kozlov – Engineering Leader</title>
    <div className="flex flex-col gap-8">

      {/* Hero */}
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 sm:p-10 shadow-sm">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-3">
          Engineering Leader
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
          Building scalable systems, AI-driven workflows, and production-grade platforms
        </h1>
        <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
          9+ years of hands-on engineering leadership across cloud platforms, backend systems, and AI-enabled workflows — building for production reliability at scale.
        </p>

        {/* Impact metrics */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 pb-8 border-b border-gray-100 dark:border-gray-700">
          {[
            { value: '400K+', label: 'users served' },
            { value: '2M+', label: 'API calls/day' },
            { value: '0', label: 'downtime migrations' },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{value}</div>
              <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm transition-colors"
          >
            View Projects
          </Link>
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            Download CV
          </Link>
          <a
            href="mailto:admtrigger@gmail.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-600 dark:hover:text-blue-400 font-medium text-sm transition-colors"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Availability signal */}
      <div className="flex items-center gap-3 px-5 py-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800">
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500" />
        </span>
        <p className="text-sm text-blue-700 dark:text-blue-300">
          <span className="font-semibold">Open to Engineering Leadership roles</span>{' '}
          and high-impact opportunities.{' '}
          <a href="mailto:admtrigger@gmail.com" className="underline hover:text-blue-900 dark:hover:text-blue-100 transition-colors">
            Let&apos;s talk →
          </a>
        </p>
      </div>

      {/* Selected Work */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Selected Work</h2>
          <Link
            to="/projects"
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline font-medium"
          >
            View all →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          {featured.map((project) => (
            <Cell key={project.title} data={project} />
          ))}
        </div>
      </div>

    </div>
  </Main>
);

export default Index;
