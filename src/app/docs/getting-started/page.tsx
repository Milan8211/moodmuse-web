"use client";

import React from "react";
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import SectionHeader from "@/components/docs/SectionHeader";
import CodeBlock from "@/components/docs/CodeBlock";
import Paragraph from "@/components/docs/Paragraph";

const GettingStartedPage = () => {
  const installationCode = `npm install moodmuse-ui styled-components`;
  const yarnInstallationCode = `yarn add moodmuse-ui styled-components`;

  const providerCode = `// src/components/ClientProviders.tsx
'use client';

import { ThemeProvider, themes } from 'moodmuse-ui';
import { PropsWithChildren } from 'react';

const defaultTheme = themes.neoglow;

export default function ClientProviders({ children }: PropsWithChildren) {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
}`;

  const layoutCode = `// src/app/layout.tsx
import ClientProviders from '@/components/ClientProviders';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}`;

  const usageCode = `import { Button } from 'moodmuse-ui';

export default function MyAwesomePage() {
  return (
    <Button 
      themeStyle="brandfocused" 
      size="large"
      onClick={() => alert('Welcome to MoodMuse!')}
    >
      Click Me!
    </Button>
  );
}`;

  return (
    <div>
      <DocsPageHeader
        title="Getting Started"
        description="This guide will walk you through installing and configuring MoodMuse UI so you can start building beautiful interfaces right away."
      />

      <SectionHeader>Installation</SectionHeader>
      <Paragraph>
        To get started, install MoodMuse UI and its peer dependency,
        `styled-components`, from your package manager.
      </Paragraph>
      <CodeBlock code={installationCode} language="bash" />
      <Paragraph>Or if you use Yarn:</Paragraph>
      <CodeBlock code={yarnInstallationCode} language="bash" />

      <SectionHeader>Provider Setup</SectionHeader>
      <Paragraph>
        MoodMuse UI requires a `ThemeProvider` at the root of your application
        to provide themes to all components. Since this is a Next.js app, you'll
        need to set this up in a client component.
      </Paragraph>
      <CodeBlock code={providerCode} language="tsx" />
      <Paragraph>
        Then, import and use this provider in your root layout file:
      </Paragraph>
      <CodeBlock code={layoutCode} language="tsx" />

      <SectionHeader>Usage</SectionHeader>
      <Paragraph>
        Once the provider is set up, you can start using MoodMuse UI components
        anywhere in your application.
      </Paragraph>
      <CodeBlock code={usageCode} language="tsx" />
    </div>
  );
};

export default GettingStartedPage;
