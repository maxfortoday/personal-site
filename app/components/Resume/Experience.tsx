import React from 'react';

import type { Position } from '../../types';
import Job from './Experience/Job';

interface Props {
  data?: Position[];
}

const Experience: React.FC<Props> = ({ data = [] }) => (
  <section>
    <div id="experience" className="scroll-mt-20" />
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Experience</h2>
    <div>
      {data.map((job) => (
        <Job data={job} key={`${job.company}-${job.daterange}`} />
      ))}
    </div>
  </section>
);

export default Experience;
