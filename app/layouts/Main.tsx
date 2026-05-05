import React from 'react';

import Analytics from '../components/Template/Analytics';
import Footer from '../components/Template/Footer';
import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';
import ScrollToTop from '../components/Template/ScrollToTop';

interface Props {
  children?: React.ReactNode;
}

const Main: React.FC<Props> = ({ children }) => (
  <>
    <title>Maxim Kozlov</title>
    <Analytics />
    <ScrollToTop />
    <a href="#main-content" className="skip-to-content">Skip to content</a>
    <div className="flex min-h-screen bg-gray-50 dark:bg-gray-950 font-sans">
      <aside className="hidden lg:flex lg:fixed lg:inset-y-0 lg:left-0 lg:w-72 lg:flex-col bg-slate-900 overflow-y-auto z-20">
        <Nav />
      </aside>
      <div className="flex-1 lg:ml-72 flex flex-col min-h-screen">
        <Header />
        <main id="main-content" className="flex-1 w-full max-w-4xl mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  </>
);

export default Main;
