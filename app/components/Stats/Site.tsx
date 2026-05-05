import React from 'react';

import data from '../../data/github';
import Table from './Table';

const SiteStats: React.FC = () => (
  <section>
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Some stats about this site</h2>
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
      <Table data={data} />
    </div>
  </section>
);

export default SiteStats;
