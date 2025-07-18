"use client";

import React from "react";
import styled from "styled-components";
import {
  Button,
  Input,
  Card,
  ThemeProvider,
  type Theme as MoodMuseTheme,
} from "moodmuse-ui";

const PreviewWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid #dee2e6;
  margin-top: 1.5rem;
  margin-bottom: 3rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: flex-start;
  transition: background-color 0.3s ease;
`;

const ComponentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 200px;
`;

const CardWrapper = styled.div`
  max-width: 300px;
`;

interface ThemePreviewProps {
  theme: MoodMuseTheme;
}

const ThemePreview: React.FC<ThemePreviewProps> = ({ theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <PreviewWrapper>
        <ComponentGroup>
          <Button $buttonThemeStyle="brandfocused" $buttonSize="medium">
            Brand Button
          </Button>
          <Button $buttonThemeStyle="softclay" $buttonSize="medium">
            Soft Button
          </Button>
        </ComponentGroup>
        <ComponentGroup>
          <Input placeholder="Enter your name" />
          <Input placeholder="Disabled" disabled />
        </ComponentGroup>
        <ComponentGroup>
          <CardWrapper>
            <Card
              $cardThemeStyle="neoglow"
              $cardTitle="Example Card"
              $cardContent="This card showcases the theme's style."
            />
          </CardWrapper>
        </ComponentGroup>
      </PreviewWrapper>
    </ThemeProvider>
  );
};

export default ThemePreview;
