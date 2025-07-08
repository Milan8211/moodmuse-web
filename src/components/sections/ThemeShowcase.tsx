'use client';

import React from 'react';
import styled, { css } from 'styled-components';
import { motion, type Variants } from 'framer-motion';

const ShowcaseContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #f7f7f7;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: #1b1c1d;
`;

const ThemesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ThemeCard = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

const PreviewWrapper = styled.div<{ $styles: any }>`
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ $styles }) => $styles.wrapper}
`;

const MockButton = styled.div<{ $styles: any }>`
  padding: 0.8rem 1.5rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 1rem;
  ${({ $styles }) => $styles.button}
`;

const ThemeName = styled.div`
  padding: 1rem;
  font-weight: 600;
  background-color: #fff;
  text-align: center;
`;

const themes = [
  {
    name: 'Neoglow',
    styles: {
      wrapper: css`
        background: #1a1a1a;
      `,
      button: css`
        background: #fff;
        color: #1a1a1a;
        box-shadow: 0 0 15px rgba(255, 255, 255, 0.5), 0 0 25px rgba(255, 255, 255, 0.3);
      `,
    },
  },
  {
    name: 'Brandfocused',
    styles: {
      wrapper: css`
        background: #f0f4ff;
      `,
      button: css`
        background: #4a6dff;
        color: #fff;
        border: 2px solid #2a4dcf;
      `,
    },
  },
  {
    name: 'Softclay',
    styles: {
      wrapper: css`
        background: #fdeadd;
      `,
      button: css`
        background: #fff;
        color: #5d4a44;
        border-radius: 50px;
        box-shadow: 5px 5px 10px #d8c4b7, -5px -5px 10px #ffffff;
      `,
    },
  },
  {
    name: 'Gradientglow',
    styles: {
      wrapper: css`
        background: #0f0c29;
      `,
      button: css`
        background: linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
        color: #fff;
        border: none;
      `,
    },
  },
];

export default function ThemeShowcase() {
  const cardVariants: Variants = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 50, damping: 20 },
    },
  };

  return (
    <ShowcaseContainer>
      <SectionTitle>Expressive Design Themes</SectionTitle>
      <ThemesGrid>
        {themes.map((theme, index) => (
          <ThemeCard
            key={theme.name}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.5 }}
            variants={cardVariants}
            transition={{ delay: index * 0.1 }}
          >
            <PreviewWrapper $styles={theme.styles}>
              <MockButton $styles={theme.styles}>Example</MockButton>
            </PreviewWrapper>
            <ThemeName>{theme.name}</ThemeName>
          </ThemeCard>
        ))}
      </ThemesGrid>
    </ShowcaseContainer>
  );
}
