import React from 'react';

import type { Position } from '../../../types';

interface Props {
  data: Position;
}

const Job: React.FC<Props> = ({ data }) => (
  <div className="relative pl-6 border-l-2 border-blue-100 dark:border-blue-900 pb-6 last:pb-0">
    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-50 dark:ring-gray-900" />
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
        <div>
          <h4 className="font-semibold text-gray-900 dark:text-white leading-snug">{data.position}</h4>
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            {data.company}
          </a>
        </div>
        <span className="shrink-0 text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-3 py-1 rounded-full self-start">
          {data.daterange}
        </span>
      </div>
      <ul className="space-y-1.5">
        {data.points.map((point) => (
          <li key={point} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400">
            <span className="text-blue-400 mt-0.5 shrink-0">›</span>
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Job;
