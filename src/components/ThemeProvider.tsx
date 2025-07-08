"use client";

import React from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

interface AppThemeProviderProps {
  children: React.ReactNode;
}

export const AppThemeProvider: React.FC<AppThemeProviderProps> = ({
  children,
}) => {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
};
