import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { DarkModeProvider } from './context/DarkMode';

import './static/css/main.css';

const About       = React.lazy(() => import('./views/About'));
const AI          = React.lazy(() => import('./views/AI'));
const Contact     = React.lazy(() => import('./views/Contact'));
const Index       = React.lazy(() => import('./views/Index'));
const NotFound    = React.lazy(() => import('./views/NotFound'));
const Projects    = React.lazy(() => import('./views/Projects'));
const Resume      = React.lazy(() => import('./views/Resume'));
const Stats       = React.lazy(() => import('./views/Stats'));

const root = document.getElementById('root');
if (!root) throw new Error('Root element not found');

createRoot(root).render(
  <React.StrictMode>
    <DarkModeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Suspense fallback={<div className="min-h-screen bg-gray-50 dark:bg-gray-950" />}>
          <Routes>
            <Route path="/"            element={<Index />} />
            <Route path="/about"       element={<About />} />
            <Route path="/resume"      element={<Resume />} />
            <Route path="/projects"    element={<Projects />} />
            <Route path="/ai"          element={<AI />} />
            <Route path="/contact"     element={<Contact />} />
            <Route path="/stats"       element={<Stats />} />
            <Route path="*"            element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </DarkModeProvider>
  </React.StrictMode>,
);
