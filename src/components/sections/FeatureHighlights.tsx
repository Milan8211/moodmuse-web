'use client';

import React from 'react';
import styled from 'styled-components';
import { motion, type Variants } from 'framer-motion';

const FeaturesContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #fff;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #1b1c1d;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 2rem;
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const features = [
  {
    icon: '🎨',
    title: 'Multiple Themes',
    description: 'Choose from a variety of beautiful, pre-built themes like Glassmorphism and Neobrutalism.',
  },
  {
    icon: '⚡',
    title: 'Built-in Animations',
    description: 'Smooth, delightful animations powered by Framer Motion are included out of the box.',
  },
  {
    icon: '🧩',
    title: 'Easy-to-Use Props',
    description: 'A simple and intuitive API makes customizing components a breeze.',
  },
  {
    icon: '🌘',
    title: 'Dark Mode Ready',
    description: 'Effortlessly switch between light and dark modes with our ThemeProvider.',
  },
];

export default function FeatureHighlights() {
  const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  return (
    <FeaturesContainer>
      <SectionTitle>Why MoodMuse UI?</SectionTitle>
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            transition={{ delay: index * 0.2 }}
          >
            <Icon>{feature.icon}</Icon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
}
