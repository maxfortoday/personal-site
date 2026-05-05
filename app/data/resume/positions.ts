import type { Position } from '../../types';

const positions: Position[] = [{
  company: 'Aman Group / Phoenix Insurance',
  position: 'Senior Engineering Lead – Enterprise Digital Platforms',
  link: 'https://www.phoenix.co.il/',
  daterange: '2025 – Present',
  points: [
    'Own platform stability and cloud architecture for systems serving ~400K users — the core financial mobile platform for one of Israel\'s top-5 insurance companies.',
    'Drive AWS architecture across team and network boundaries: secure VPC design, API Gateway, Lambda, RDS Aurora, and AppSync with full observability coverage.',
    'Established the org-wide observability strategy — monitoring pipelines, alerting standards, and incident readiness — reducing MTTR across teams.',
    'Mentor and develop Team Leads as a force multiplier: leadership capacity, not just code output.',
    'Introduced AI-assisted engineering workflows (agentic code review, architecture planning, automated documentation) that measurably improved delivery velocity.',
  ],
}, {
  company: 'Aman Group / Phoenix Insurance',
  position: 'Engineering Lead – Enterprise Digital Platforms',
  link: 'https://www.phoenix.co.il/',
  daterange: '2024 – 2025',
  points: [
    'Led cross-functional frontend and backend teams delivering production React Native and Node.js platforms under tight regulatory and SLA constraints.',
    'Architected the cloud environment from first principles: API Gateway unified auth layer, Lambda compute, IAM boundaries, and AppSync real-time data layer.',
    'Owned end-to-end Agile delivery — sprint execution, cross-team alignment, quality gates, and release management.',
    'Drove the zero-downtime Legacy System Migration: CDC pipeline (AWS DMS), dual-system rollout, per-user feature flags, and full legacy decommission.',
    'Built the high-performance engineering culture that reduced delivery risk and enabled the org to scale from 1 to 3 teams.',
  ],
}, {
  company: 'Aman Group / Twilio Division',
  position: 'Head of R&D',
  link: 'https://www.aman-group.com/',
  daterange: '2023 – 2024',
  points: [
    'Owned the full R&D organization: Team Leads, Developers, DevOps, Infrastructure, Security, and Technical Support across communication and enterprise messaging platforms.',
    'Delivered the Enterprise API Gateway: unified Auth0 authentication for 500+ B2B clients at 2M+ API calls/day — without modifying a single legacy system.',
    'Managed SLA adherence across critical communication infrastructure and drove cross-department execution alignment.',
    'Introduced AI-driven automation into delivery workflows, improving operational throughput and reducing manual overhead.',
  ],
}, {
  company: 'Aman Group / Twilio Division',
  position: 'Software Development Team Leader',
  link: 'https://www.aman-group.com/',
  daterange: '2020 – 2022',
  points: [
    'Led a full-stack React / Node.js team delivering end-to-end communication platforms at enterprise scale.',
    'Defined and enforced development standards, quality controls, and delivery governance via Azure DevOps.',
    'Ensured SLA adherence on production systems with real business-continuity requirements.',
  ],
}, {
  company: 'TenenGroup LTD',
  position: 'Front-End Web Developer',
  link: 'https://www.tenengroup.com/',
  daterange: '2018 – 2020',
  points: [
    'Built responsive React.js UIs for high-traffic consumer products, collaborating directly with design on Sketch and InVision.',
    'Drove measurable conversion improvements through A/B testing and dynamic personalization via Dynamic Yield.',
  ],
}, {
  company: 'TenenGroup LTD',
  position: 'Webmaster',
  link: 'https://www.tenengroup.com/',
  daterange: '2017',
  points: [
    'Managed full-cycle site deployment, content optimization, and production stability.',
  ],
}];

export default positions;
