import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => (
  <>
    <title>404 | Maxim Kozlov</title>
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="text-center">
        <p className="text-6xl font-bold text-blue-600 mb-4">404</p>
        <h1 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Page Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-6">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          to="/"
          className="inline-flex items-center px-5 py-2.5 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors"
        >
          Return home
        </Link>
      </div>
    </div>
  </>
);

export default NotFound;
