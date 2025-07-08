"use client";

import React from "react";
import StyledComponentsRegistry from "@/lib/registry";
import AntdRegistry from "@/lib/AntdRegistry";
import { AppThemeProvider } from "@/components/ThemeProvider";
import { ThemeProvider as MoodMuseThemeProvider, themes } from "moodmuse-ui";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AntdRegistry>
      <StyledComponentsRegistry>
        <AppThemeProvider>
          <MoodMuseThemeProvider theme={themes.brandfocused}>
            {children}
          </MoodMuseThemeProvider>
        </AppThemeProvider>
      </StyledComponentsRegistry>
    </AntdRegistry>
  );
}
