import React from 'react';
import { Link } from 'react-router-dom';

const References: React.FC = () => (
  <section>
    <div id="references" className="scroll-mt-20" />
    <Link
      to="/contact"
      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
    >
      <span>References available upon request</span>
      <span aria-hidden="true">→</span>
    </Link>
  </section>
);

export default References;
