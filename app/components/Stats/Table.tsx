import React from 'react';

import type { StatRow } from '../../types';
import TableRow from './TableRow';

interface Props {
  data: StatRow[];
}

const Table: React.FC<Props> = ({ data }) => (
  <table className="w-full">
    <tbody>
      {data.map((row) => (
        <TableRow
          key={row.label}
          label={row.label}
          value={row.value}
          link={row.link}
        />
      ))}
    </tbody>
  </table>
);

export default Table;
