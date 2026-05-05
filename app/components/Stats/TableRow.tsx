import React from 'react';

interface Props {
  label: string;
  value: string | number;
  link?: string;
}

const TableRow: React.FC<Props> = ({ label, link, value }) => (
  <tr className="border-b border-gray-100 dark:border-gray-700 last:border-0">
    <td className="py-2 pr-4 text-sm text-gray-600 dark:text-gray-400 w-2/3">{label}</td>
    <td className="py-2 text-sm font-medium text-gray-900 dark:text-white text-right">
      {link && link.length > 0
        ? <a href={link} className="text-blue-600 hover:text-blue-700 hover:underline">{value}</a>
        : value}
    </td>
  </tr>
);

export default TableRow;
