import React, { useState } from 'react';

import Main from '../layouts/Main';
import { tools, categories } from '../data/ai';
import type { AITool } from '../data/ai';

const badgeStyle: Record<AITool['badge'], string> = {
  'Daily Driver': 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300',
  'Production':   'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300',
  'Exploring':    'bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-300',
};

const categoryIcon: Record<string, string> = {
  'AI Coding Assistants':        '⌨',
  'Language Models & APIs':      '🧠',
  'Video Generation':            '🎬',
  'Voice & Audio':               '🎙',
  'AI Workflow & Productivity':  '⚡',
};

const ToolCard: React.FC<{ tool: AITool }> = ({ tool }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="p-5">
        {/* Header */}
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-base"
              >
                {tool.name}
              </a>
              <span className={`shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${badgeStyle[tool.badge]}`}>
                {tool.badge}
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{tool.tagline}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
          {tool.description}
        </p>

        {/* Usage — expandable */}
        <button
          type="button"
          onClick={() => setExpanded((p) => !p)}
          className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-3"
        >
          <svg
            className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
            fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
          {expanded ? 'Hide' : 'Show'} how I use it ({tool.usage.length} examples)
        </button>

        {expanded && (
          <ul className="space-y-2 mb-4 pl-1">
            {tool.usage.map((u, i) => (
              <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="text-blue-400 dark:text-blue-500 mt-0.5 shrink-0">›</span>
                <span>{u}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Footer: tags + projects */}
        <div className="flex flex-col gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tool.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-medium"
              >
                {tag}
              </span>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

const AI: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const visibleTools = activeCategory
    ? tools.filter((t) => t.category === activeCategory)
    : tools;

  const counts = {
    'Daily Driver': tools.filter((t) => t.badge === 'Daily Driver').length,
    'Production':   tools.filter((t) => t.badge === 'Production').length,
    'Exploring':    tools.filter((t) => t.badge === 'Exploring').length,
  };

  return (
    <Main>
      <title>AI Stack | Maxim Kozlov</title>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">AI Toolbox</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-5">
          Every AI tool I actively use — from daily coding assistants to production APIs and generative media. Click any tool to see exactly how I apply it.
        </p>

        {/* Summary badges */}
        <div className="flex flex-wrap gap-3 mb-6">
          {(Object.entries(counts) as [AITool['badge'], number][]).map(([badge, count]) => (
            <div key={badge} className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold ${badgeStyle[badge]}`}>
              <span>{count} {badge}</span>
            </div>
          ))}
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory(null)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              activeCategory === null
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
          >
            All ({tools.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat === activeCategory ? null : cat)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {categoryIcon[cat]} {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Tools by category */}
      {(activeCategory ? [activeCategory] : categories).map((cat) => {
        const catTools = visibleTools.filter((t) => t.category === cat);
        if (catTools.length === 0) return null;
        return (
          <div key={cat} className="mb-10">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-gray-900 dark:text-white mb-4">
              <span className="text-xl" aria-hidden="true">{categoryIcon[cat]}</span>
              {cat}
              <span className="text-sm font-normal text-gray-400 dark:text-gray-500">({catTools.length})</span>
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {catTools.map((tool) => (
                <ToolCard key={tool.name} tool={tool} />
              ))}
            </div>
          </div>
        );
      })}
    </Main>
  );
};

export default AI;
