import React from 'react';

import type { Degree as DegreeType } from '../../../types';

interface Props {
  data: DegreeType;
}

const Degree: React.FC<Props> = ({ data }) => (
  <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
    <div>
      <p className="font-medium text-gray-900 dark:text-white leading-snug">{data.degree}</p>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
        {data.link
          ? <a href={data.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">{data.school}</a>
          : data.school}
      </p>
    </div>
    <span className="shrink-0 text-xs font-medium text-gray-400 dark:text-gray-500 bg-gray-50 dark:bg-gray-700 border border-gray-100 dark:border-gray-600 px-3 py-1 rounded-full self-start sm:self-center">
      {data.yearStart ? `${data.yearStart} – ${data.year}` : data.year}
    </span>
  </div>
);

export default Degree;
