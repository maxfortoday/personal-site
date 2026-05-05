import React, { useState } from 'react';

import type { Skill, Category } from '../../types';

interface Props {
  skills?: Skill[];
  categories?: Category[];
}

const Skills: React.FC<Props> = ({ skills = [], categories = [] }) => {
  const [active, setActive] = useState<string | null>(null);

  const visibleCategories = active
    ? categories.filter((c) => c.name === active)
    : categories;

  return (
    <section>
      <div id="skills" className="scroll-mt-20" />
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>

      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-5">
        <button
          type="button"
          onClick={() => setActive(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            active === null
              ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.name}
            type="button"
            onClick={() => setActive(cat.name === active ? null : cat.name)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              active === cat.name
                ? 'text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            }`}
            style={active === cat.name ? { backgroundColor: cat.color } : undefined}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Grouped skill chips */}
      <div className="space-y-4">
        {visibleCategories.map((cat) => {
          const catSkills = skills.filter((s) => s.category.includes(cat.name));
          return (
            <div
              key={cat.name}
              className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{ backgroundColor: cat.color }}
                />
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {catSkills.map((skill) => (
                  <span
                    key={skill.title}
                    className="px-3 py-1.5 rounded-lg text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600"
                  >
                    {skill.title}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
