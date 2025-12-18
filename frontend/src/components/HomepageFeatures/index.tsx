import clsx from 'clsx';
import Heading from '@theme/Heading';
import React from 'react';
import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  icon: string;
  description: JSX.Element;
}

const FeatureList: FeatureItem[] = [
  {
    title: 'Focus on Physical AI',
    icon: '🤖',
    description: (
      <>
        Dive deep into the core concepts of Physical AI, exploring the interplay
        between software intelligence and physical embodiment.
      </>
    ),
  },
  {
    title: 'Humanoid Robotics Explained',
    icon: '🧠',
    description: (
      <>
        Understand the design, control, and interaction principles of humanoid robots,
        from locomotion to human-robot collaboration.
      </>
    ),
  },
  {
    title: 'AI-Assisted Authoring',
    icon: '✏️',
    description: (
      <>
        Discover how artificial intelligence is leveraged in the creation and
        refinement of this comprehensive book.
      </>
    ),
  },
];

function Feature({ title, icon, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={clsx('text--center', styles.featureCard)}>
        <div className={styles.featureIcon}>{icon}</div>
        <div className="padding-horiz--md">
          <Heading as="h3">{title}</Heading>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
