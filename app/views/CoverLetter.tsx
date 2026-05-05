import React from 'react';

import Main from '../layouts/Main';

const CoverLetter: React.FC = () => (
  <Main>
    <title>Cover Letter | Maxim Kozlov</title>
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-5 sm:p-10 shadow-sm max-w-3xl mx-auto">
      <div className="mb-8 pb-6 border-b border-gray-100 dark:border-gray-700">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">Cover Letter</h1>
        <p className="text-sm text-gray-400 dark:text-gray-500">Maxim Kozlov — Engineering Leader</p>
      </div>

      <div className="space-y-5 text-gray-700 dark:text-gray-300 leading-relaxed">
        <p>Dear Hiring Manager,</p>

        <p>
          I am an Engineering Leader with over nine years of experience building and scaling
          cloud-native platforms within regulated enterprise environments. Currently, I am
          accountable for cloud infrastructure, authentication, monitoring, and production
          governance across a top-5 financial mobile platform in Israel serving approximately
          400,000 users.
        </p>

        <p>
          Over the past year, I led a 20-engineer organization and executed a structural split
          into two focused units to improve delivery velocity and domain accountability, while
          mentoring and promoting a new Team Lead to enable distributed leadership. My role has
          evolved toward cross-domain architecture, long-term platform strategy, and
          organization-wide technical initiatives.
        </p>

        <p>
          Previously, as Head of R&amp;D, I led a multidisciplinary organization spanning
          development, DevOps, infrastructure, security, and support, owning end-to-end
          engineering delivery and operational reliability. Throughout my career, I have combined
          deep AWS architecture expertise with production accountability and stakeholder alignment
          to ensure scalable, secure, and business-aligned systems.
        </p>

        <p>
          In parallel, I actively integrate AI-enabled workflows into engineering processes to
          improve automation, decision-making, and delivery efficiency — applying generative AI
          pragmatically within real-world production environments.
        </p>

        <p>
          I am seeking a senior leadership role where I can contribute both strategically and
          technically — scaling teams, shaping platform architecture, and driving engineering
          excellence with measurable impact.
        </p>

        <p>
          I would welcome the opportunity to further discuss how my experience can contribute to
          your organization.
        </p>

        <div className="pt-4">
          <p>Sincerely,</p>
          <p className="mt-3 font-semibold text-gray-900 dark:text-white">Maxim Kozlov</p>
          <a
            href="mailto:admtrigger@gmail.com"
            className="text-sm text-blue-600 hover:text-blue-700 hover:underline"
          >
            admtrigger@gmail.com
          </a>
        </div>
      </div>
    </div>
  </Main>
);

export default CoverLetter;
