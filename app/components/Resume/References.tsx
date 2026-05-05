import React from 'react';

const References: React.FC = () => (
  <section>
    <div id="references" className="scroll-mt-20" />
    <a
      href="mailto:admtrigger@gmail.com"
      className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
    >
      <span>References available upon request</span>
      <span aria-hidden="true">→</span>
    </a>
  </section>
);

export default References;
