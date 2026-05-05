import React, { useState, useMemo, useCallback } from 'react';

import type { Skill, Category } from '../../types';
import CategoryButton from './Skills/CategoryButton';
import SkillBar from './Skills/SkillBar';

interface Props {
  skills?: Skill[];
  categories?: Category[];
}

const Skills: React.FC<Props> = ({ skills = [], categories = [] }) => {
  const initialButtons = useMemo(() => {
    const catButtons = categories.reduce<Record<string, boolean>>((obj, cat) => ({
      ...obj,
      [cat.name]: false,
    }), {});
    return { All: true, ...catButtons };
  }, [categories]);

  // buttons state is seeded once from initialButtons; assumes categories is static (true for this site)
  const [buttons, setButtons] = useState<Record<string, boolean>>(initialButtons);

  const activeCategory = Object.keys(buttons).find((k) => buttons[k]) ?? 'All';

  const handleClick = useCallback((label: string) => {
    setButtons((prev) => {
      const next = Object.keys(prev).reduce<Record<string, boolean>>((obj, key) => ({
        ...obj,
        [key]: key === label && !prev[key],
      }), {});
      next.All = !Object.keys(next).some((key) => key !== 'All' && next[key]);
      return next;
    });
  }, []);

  const filteredSkills = useMemo(() => (
    [...skills]
      .sort((a, b) => {
        if (a.competency !== b.competency) return b.competency - a.competency;
        if (a.category[0] !== b.category[0]) return a.category[0] < b.category[0] ? -1 : 1;
        return a.title < b.title ? -1 : 1;
      })
      .filter((skill) => activeCategory === 'All' || skill.category.includes(activeCategory))
  ), [skills, activeCategory]);

  return (
    <section>
      <div id="skills" className="scroll-mt-20" />
      <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Skills</h2>
      <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm">
        <div className="flex flex-wrap gap-2 mb-5">
          {Object.keys(buttons).map((key) => (
            <CategoryButton key={key} label={key} active={buttons} handleClick={handleClick} />
          ))}
        </div>
        <div className="space-y-3">
          {filteredSkills.map((skill) => (
            <SkillBar key={skill.title} data={skill} categories={categories} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
