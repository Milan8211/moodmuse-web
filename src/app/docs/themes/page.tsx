"use client";

import React from "react";
import styled from "styled-components";
import { themes } from "moodmuse-ui";
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import SectionHeader from "@/components/docs/SectionHeader";
import ThemePreview from "@/components/docs/ThemePreview";
import CodeBlock from "@/components/docs/CodeBlock";

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #495057;
  margin-bottom: 1rem;
`;

const themeProviderCode = `import { ThemeProvider, themes } from 'moodmuse-ui';

function App() {
  return (
    <ThemeProvider theme={themes.neoglow}>
      {/* Your application components */}
    </ThemeProvider>
  );
}`;

const ThemesPage = () => {
  const availableThemes = [
    {
      name: "Neoglow",
      theme: themes.neoglow,
      description:
        "A modern, elegant theme with a frosted-glass effect that creates a sense of depth and transparency.",
    },
    {
      name: "Brand Focused",
      theme: themes.brandfocused,
      description:
        "A minimalistic theme designed to put the focus on your brand's identity with clean lines and a professional look.",
    },
    {
      name: "Soft Clay",
      theme: themes.softclay,
      description:
        "A warm and inviting theme that uses soft, earthy tones to create a friendly and approachable interface.",
    },
    {
      name: "Gradient Glow",
      theme: themes.gradientglow,
      description:
        "A vibrant and energetic theme featuring smooth color transitions and a subtle glow effect.",
    },
    {
      name: "Mood Pop",
      theme: themes.moodpop,
      description:
        "A playful and colorful theme that uses bold hues and fun typography to create a lively user experience.",
    },
    {
      name: "Mono Grid",
      theme: themes.monogrid,
      description:
        "A minimalist, grid-based theme that emphasizes structure and clarity with a monochromatic color scheme.",
    },
    {
      name: "Ghost Line",
      theme: themes.ghostline,
      description:
        "A light and airy theme that uses outlined components and a simple color palette for a clean, unobtrusive look.",
    },
  ];

  return (
    <div>
      <DocsPageHeader
        title="Themes"
        description="MoodMuse UI includes a variety of pre-built themes to style your application. You can easily apply any theme using the ThemeProvider."
      />

      <SectionHeader>Applying a Theme</SectionHeader>
      <Paragraph>
        To apply a theme, wrap your application's root component with the
        `ThemeProvider` and pass the desired theme object to the `theme` prop.
        All MoodMuse UI components within the provider will automatically
        inherit the theme styles.
      </Paragraph>
      <CodeBlock code={themeProviderCode} language="tsx" />

      <SectionHeader>Available Themes</SectionHeader>
      {availableThemes.map(({ name, theme, description }) => (
        <div key={name}>
          <h3>{name}</h3>
          <Paragraph>{description}</Paragraph>
          <ThemePreview theme={theme} />
        </div>
      ))}
    </div>
  );
};

export default ThemesPage;
