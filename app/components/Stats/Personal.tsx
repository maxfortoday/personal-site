import React, { useState, useEffect } from 'react';

import personalData from '../../data/stats';
import type { StatRow } from '../../types';
import Table from './Table';

const BIRTH_TIME = new Date('1992-06-13T09:24:00');
const YEAR_MS = 1000 * 60 * 60 * 24 * 365.2421897;

const PersonalStats: React.FC = () => {
  const [data, setData] = useState<Record<string, StatRow>>(personalData);

  useEffect(() => {
    const timer = setInterval(() => {
      setData((prev) => ({
        ...prev,
        age: {
          label: 'Current age',
          value: ((Date.now() - BIRTH_TIME.getTime()) / YEAR_MS).toFixed(11),
        },
      }));
    }, 25);
    return () => clearInterval(timer);
  }, []);

  return (
    <section>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Some stats about me</h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
        <Table data={Object.values(data)} />
      </div>
    </section>
  );
};

export default PersonalStats;
