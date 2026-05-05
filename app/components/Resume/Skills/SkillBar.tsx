import React from 'react';

import type { Skill, Category } from '../../../types';

interface Props {
  data: Skill;
  categories: Category[];
}

const SkillBar: React.FC<Props> = ({ data, categories }) => {
  const color = categories.find((cat) => data.category.includes(cat.name))?.color ?? '#6968b3';
  const width = `${Math.min(100, Math.max((data.competency / 5) * 100, 0))}%`;

  return (
    <div className="flex items-center gap-3">
      <span className="w-32 sm:w-44 shrink-0 text-sm font-medium text-gray-700 dark:text-gray-300 truncate">{data.title}</span>
      <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width, backgroundColor: color }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
