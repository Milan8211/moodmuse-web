"use client";

import LandingPage from "@/components/LandingPage";
import { ThemeProvider, themes } from "moodmuse-ui";

export default function Home() {
  return (
    <ThemeProvider theme={themes.brandfocused}>
      <LandingPage />
    </ThemeProvider>
  );
}
