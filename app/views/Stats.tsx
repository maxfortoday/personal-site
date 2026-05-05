import React from 'react';

import Main from '../layouts/Main';
import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats: React.FC = () => (
  <Main>
    <title>Stats | Maxim Kozlov</title>
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Stats</h1>
    </div>
    <div className="grid sm:grid-cols-2 gap-6">
      <Personal />
      <Site />
    </div>
  </Main>
);

export default Stats;
