import React from 'react';

interface Props {
  label: string;
  active: Record<string, boolean>;
  handleClick: (label: string) => void;
}

const CategoryButton: React.FC<Props> = ({ handleClick, active, label }) => (
  <button
    type="button"
    onClick={() => handleClick(label)}
    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
      active[label]
        ? 'bg-blue-600 text-white shadow-sm'
        : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
    }`}
  >
    {label}
  </button>
);

export default CategoryButton;
