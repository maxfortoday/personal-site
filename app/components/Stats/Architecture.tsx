import React from 'react';

interface TechRow {
  label: string;
  value: string;
  note?: string;
  link?: string;
}

const groups: { title: string; rows: TechRow[] }[] = [
  {
    title: 'Stack',
    rows: [
      { label: 'UI', value: 'React 19 + TypeScript', link: 'https://react.dev' },
      { label: 'Build', value: 'Vite 8', note: 'esbuild under the hood, <200ms prod builds', link: 'https://vite.dev' },
      { label: 'Styling', value: 'Tailwind CSS v4', note: 'CSS-first config, no tailwind.config.js', link: 'https://tailwindcss.com' },
      { label: 'Routing', value: 'React Router v7', link: 'https://reactrouter.com' },
      { label: 'Markdown', value: 'react-markdown + rehype-raw', note: 'powers the About page', link: 'https://github.com/remarkjs/react-markdown' },
    ],
  },
  {
    title: 'Performance',
    rows: [
      { label: 'Code splitting', value: '15 chunks via React.lazy()', note: 'one chunk per route, loaded on demand' },
      { label: 'Initial JS', value: '184 KB', note: 'down from 628 KB before splitting (−71%)' },
      { label: 'Initial CSS', value: '49 KB (8 KB gzipped)', note: 'Tailwind purges unused classes at build time' },
      { label: 'Largest chunk', value: 'About.js — 289 KB', note: 'react-markdown + rehype-raw, lazy loaded' },
    ],
  },
  {
    title: 'Infrastructure',
    rows: [
      { label: 'Hosting', value: 'GitHub Pages', link: 'https://pages.github.com' },
      { label: 'Deploy', value: 'gh-pages npm package', note: 'npm run deploy → build → push to gh-pages branch' },
      { label: 'SPA routing', value: '404.html redirect trick', note: 'GitHub Pages 404 → index.html via query-param restore' },
      { label: 'Dark mode', value: 'class-based (.dark)', note: 'localStorage + prefers-color-scheme fallback' },
      { label: 'Print / PDF', value: '@media print CSS', note: 'hides nav/header, formats Resume for PDF export' },
    ],
  },
];

const Architecture: React.FC = () => (
  <section className="sm:col-span-2">
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Site architecture</h2>
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      {groups.map((group, gi) => (
        <div key={group.title}>
          {gi > 0 && <div className="border-t border-gray-100 dark:border-gray-700" />}
          <div className="px-5 py-3 bg-gray-50 dark:bg-gray-900/50">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
              {group.title}
            </p>
          </div>
          <table className="w-full">
            <tbody>
              {group.rows.map((row) => (
                <tr
                  key={row.label}
                  className="border-t border-gray-100 dark:border-gray-700 first:border-0"
                >
                  <td className="px-5 py-3 text-sm text-gray-500 dark:text-gray-400 w-1/3 align-top">
                    {row.label}
                  </td>
                  <td className="px-5 py-3 align-top">
                    {row.link ? (
                      <a
                        href={row.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-gray-900 dark:text-white">{row.value}</span>
                    )}
                    {row.note && (
                      <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{row.note}</p>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  </section>
);

export default Architecture;
