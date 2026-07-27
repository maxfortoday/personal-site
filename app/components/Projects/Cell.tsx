import React, { useState } from 'react';
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

const CaseStudy: React.FC<{ data: Project }> = ({ data }) => {
  const [expanded, setExpanded] = useState(false);
  if (!data.problem && !data.impact) return null;

  return (
    <div className="mt-3 pt-3 border-t border-gray-100 dark:border-gray-700">
      <button
        type="button"
        onClick={(e) => { e.preventDefault(); setExpanded((p) => !p); }}
        className="flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
      >
        <svg
          className={`w-3.5 h-3.5 transition-transform duration-200 ${expanded ? 'rotate-90' : ''}`}
          fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        {expanded ? 'Hide' : 'View'} case study
      </button>

      {expanded && (
        <div className="mt-3 space-y-3">
          {data.problem && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">Problem</p>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{data.problem}</p>
            </div>
          )}
          {data.impact && (
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400 dark:text-gray-500 mb-1">Impact</p>
              <ul className="space-y-1.5">
                {data.impact.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-600 dark:text-gray-300">
                    <span className="text-green-500 dark:text-green-400 shrink-0 mt-0.5 font-bold">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const StoreLinks: React.FC<{ stores: NonNullable<Project['stores']> }> = ({ stores }) => (
  <div className="flex flex-wrap gap-2 mt-3">
    {stores.map((store) => (
      <a
        key={store.link}
        href={store.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/40 px-2.5 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
      >
        {store.label} <span aria-hidden="true">↗</span>
      </a>
    ))}
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
    {data.stores && data.stores.length > 0 && <StoreLinks stores={data.stores} />}
    {!data.stores && data.link && (
      <span className="inline-flex items-center gap-1 mt-3 text-xs font-medium text-blue-600 dark:text-blue-400">
        View project <span aria-hidden="true">→</span>
      </span>
    )}
    <CaseStudy data={data} />
  </div>
);

const Cell: React.FC<Props> = ({ data }) => {
  // Cards with store links can't be a card-wide anchor (nested <a> is invalid),
  // so render a plain card and expose each store as its own link in the body.
  if (data.link && !(data.stores && data.stores.length > 0)) {
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
