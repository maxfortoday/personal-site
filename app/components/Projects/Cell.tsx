import React from 'react';
import dayjs from 'dayjs';

import type { Project } from '../../types';

interface Props {
  data: Project;
}

const cardBase = 'bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden transition-all duration-200';
const linkCard = `${cardBase} hover:shadow-md hover:border-blue-200 dark:hover:border-blue-700 group block`;

const CardImage: React.FC<{ image?: string; title: string }> = ({ image, title }) => (
  <div className="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
    {image
      ? <img
          src={`${import.meta.env.BASE_URL}${image}`}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      : <div className="w-full h-full bg-gradient-to-br from-slate-700 to-blue-800 flex items-center justify-center">
          <span className="text-white/30 text-4xl font-bold tracking-tight">{title.slice(0, 2).toUpperCase()}</span>
        </div>
    }
  </div>
);

const CardBody: React.FC<{ data: Project }> = ({ data }) => (
  <div className="p-4">
    <div className="flex items-start justify-between gap-2 mb-1">
      <div>
        <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">{data.title}</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{data.subtitle}</p>
      </div>
      <time className="text-xs text-gray-400 dark:text-gray-500 shrink-0 mt-0.5">{dayjs(data.date).format('MMM YYYY')}</time>
    </div>
    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-2">{data.desc}</p>
    {data.link && (
      <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-blue-600 dark:text-blue-400">
        View project <span aria-hidden="true">→</span>
      </span>
    )}
  </div>
);

const Cell: React.FC<Props> = ({ data }) => {
  if (data.link) {
    return (
      <a href={data.link} target="_blank" rel="noopener noreferrer" className={linkCard}>
        <CardImage image={data.image} title={data.title} />
        <CardBody data={data} />
      </a>
    );
  }
  return (
    <div className={cardBase}>
      <CardImage image={data.image} title={data.title} />
      <CardBody data={data} />
    </div>
  );
};

export default Cell;
