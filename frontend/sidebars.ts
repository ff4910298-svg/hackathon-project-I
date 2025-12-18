import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 * - Create an ordered group of docs
 * - Render a sidebar in the docs "nav"
 * - Go through the docs in order
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Foundations',
      items: [
        'foundations/embodiment',
        'foundations/perception-action-loops',
        'foundations/humanoid-robot-morphology-and-design-trade-offs',
      ],
    },
    {
      type: 'category',
      label: 'Learning & Intelligence',
      items: [
        'learning-and-intelligence/learning-paradigms',
      ],
    },
    {
      type: 'category',
      label: 'Core Systems',
      items: [
        'core-systems/control-planning-and-locomotion',
        'core-systems/simulation-to-reality',
      ],
    },
    {
      type: 'category',
      label: 'Embodiment & Interaction',
      items: [
        'embodiment-and-interaction/sensing-manipulation-and-human-robot-interaction',
      ],
    },
    {
      type: 'category',
      label: 'Deployment & Society',
      items: [
        'deployment-and-society/safety-ethics-and-societal-impact',
      ],
    },
    {
      type: 'category',
      label: 'Case Studies',
      items: [
        'case-studies/real-world-case-studies-and-benchmarks',
      ],
    },
    {
      type: 'category',
      label: 'Future Directions',
      items: [
        'future-directions/future-directions',
      ],
    },
  ],
};

export default sidebars;