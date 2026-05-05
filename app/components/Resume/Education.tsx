import React from 'react';

import type { Degree } from '../../types';
import DegreeComponent from './Education/Degree';

interface Props {
  data?: Degree[];
}

const Education: React.FC<Props> = ({ data = [] }) => (
  <section>
    <div id="education" className="scroll-mt-20" />
    <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Education &amp; Certifications</h2>
    <div className="space-y-3">
      {data.map((degree) => (
        <DegreeComponent data={degree} key={degree.degree} />
      ))}
    </div>
  </section>
);

export default Education;
