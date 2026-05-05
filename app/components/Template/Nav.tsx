import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav: React.FC = () => {
  const { pathname } = useLocation();
  const isResume = pathname === '/resume';

  return (
    <div className="flex flex-col h-full p-6">
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src={`${import.meta.env.BASE_URL}images/me_icon.jpg`}
          alt="Maxim Kozlov"
          className="w-24 h-24 rounded-full object-cover ring-2 ring-blue-500 ring-offset-2 ring-offset-slate-900 mb-4"
        />
        <h2 className="text-xl font-bold text-white">Max Kozlov</h2>
        <p className="text-sm text-slate-400 mt-0.5">Engineering Leader</p>
        <a
          href="mailto:admtrigger@gmail.com"
          className="text-xs text-slate-500 hover:text-blue-400 mt-1 transition-colors"
        >
          admtrigger@gmail.com
        </a>
      </div>

      <div className="mb-8">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-3">About</h3>
        <p className="text-sm text-slate-300 leading-relaxed">
          Engineering Leader building cloud platforms and scaling teams.
          Currently driving multi-team delivery at Phoenix Insurance (~400K users).
        </p>
        <Link
          to={isResume ? '/about' : '/resume'}
          className="mt-4 inline-block w-full text-center text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 px-4 transition-colors"
        >
          {isResume ? 'About Me' : 'View Resume'}
        </Link>
      </div>

      <div className="mt-auto">
        <div className="flex justify-center gap-5">
          {data.map((s) => (
            <a
              key={s.label}
              href={s.link}
              aria-label={s.label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-blue-400 transition-colors text-lg"
            >
              <FontAwesomeIcon icon={s.icon} />
            </a>
          ))}
        </div>
        <p className="text-center text-xs text-slate-600 mt-3">
          &copy; {new Date().getFullYear()} Maxim Kozlov
        </p>
      </div>
    </div>
  );
};

export default Nav;
