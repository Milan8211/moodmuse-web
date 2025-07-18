"use client";

import React from "react";
import { ThemeProvider as StyledThemeProvider, themes } from "moodmuse-ui";

interface AppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  return (
    <StyledThemeProvider theme={themes.brandfocused}>
      {children}
    </StyledThemeProvider>
  );
};
