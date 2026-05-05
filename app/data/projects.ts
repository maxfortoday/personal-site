import type { Project } from '../types';

const data: Project[] = [
  {
    title: 'Legacy System Migration',
    subtitle: 'Enterprise Platform Consolidation',
    image: 'images/projects/legacy-migration.svg',
    date: '2023-01-01',
    desc: 'Led zero-downtime migration of a live legacy application into the core enterprise platform. Built a CDC pipeline (AWS DMS) for real-time on-prem SQL → AWS Aurora sync, ran dual systems in parallel with feature flags and per-user whitelisting, and decommissioned the legacy stack without service disruption.',
  },
  {
    title: 'Enterprise API Gateway',
    subtitle: 'Authentication & Unified Access Layer',
    image: 'images/projects/api-gateway.svg',
    date: '2023-06-01',
    desc: 'Designed a secure API gateway layer in front of multiple legacy systems (REST/SOAP/XML), enabling unified Auth0 token-based authentication and controlled access for 500+ B2B clients handling ~2M API calls/day — without touching the underlying services.',
  },
  {
    title: 'Event-Driven Data Pipeline',
    subtitle: 'Cloud Architecture & Migration',
    image: 'images/projects/event-pipeline.svg',
    date: '2024-01-01',
    desc: 'Designed and led adoption of an event-driven architecture (API Gateway → SQS → EventBridge → consumers) to decouple critical systems and eliminate data loss under load. Included idempotency guarantees, DLQ handling, and a gradual rollout with feature flags.',
  },
  {
    title: 'AI Video Generator',
    subtitle: 'Generative AI Creative Tool',
    image: 'images/projects/video-generator.svg',
    date: '2025-01-01',
    desc: 'Built an AI-powered video generation tool that takes structured user input and produces short-form video content using generative AI models. Designed for non-technical users with a focus on fast iteration and output quality.',
  },
  {
    title: 'TzunAI',
    subtitle: 'AI-Powered Nutrition Tracker',
    image: 'images/projects/tzunai.svg',
    date: '2024-06-01',
    desc: 'Built a Hebrew-first mobile app that uses LLMs to analyze food photos and text, returning structured calorie and macro data. Features a feedback loop for accuracy improvement and meal reuse to minimize API costs. Stack: React Native, Node.js, Firebase, OpenAI.',
  },
  {
    title: 'AI Engineering Workflows',
    subtitle: 'Developer Productivity Initiative',
    image: 'images/projects/ai-workflows.svg',
    date: '2025-03-01',
    desc: 'Implemented AI-assisted workflows across the engineering org — integrating generative AI into code generation, debugging, architecture iteration, and SDLC processes. Built agent-like pipelines (prompt + context → structured output → execution) as a force multiplier for delivery velocity.',
  },
];

export default data;
