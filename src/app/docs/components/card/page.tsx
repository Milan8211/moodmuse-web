"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  Card as MUICard,
  CardTheme,
  CardRadius,
  ThemeProvider,
  themes,
} from "moodmuse-ui";
import { withCleanProps } from "@/components/common/withCleanProps";
import { motion } from "framer-motion";
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import SectionHeader from "@/components/docs/SectionHeader";
import PropsTable from "@/components/docs/PropsTable";
import CodeBlock from "@/components/docs/CodeBlock";
import { Select, Input as AntInput } from "antd";
import { Control, Controls, PlaygroundWrapper } from "../PlaygroundStyle";

const backgroundStyles = {
  softclay: css`
    background-color: #fdf6e3;
  `,
  neoglow: css`
    background-color: #fffcfa;
  `,
  brandfocused: css`
    background-color: #ffffff;
  `,
  ghostline: css`
    background-color: #0f0f0f;
  `,
  gradientglow: css`
    background-color: #fdf6e3;
  `,
  moodpop: css`
    background-color: #fdf6e3;
  `,
  monogrid: css`
    background-color: #eeeeee;
  `,
};

const Card = withCleanProps(MUICard);

const Preview = styled(motion.div)<{ themeName: CardTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  border-radius: 8px;
  min-height: 250px;
  ${({ themeName }) =>
    backgroundStyles[themeName as keyof typeof backgroundStyles]};
`;

export type CardSize = "small" | "medium" | "large";

const CardPage = () => {
  const [themeStyle, setThemeStyle] = useState<CardTheme>("softclay");
  const [size, setSize] = useState<CardSize>("small");
  const [radius, setRadius] = useState<CardRadius>("no");
  const [title, setTitle] = useState("Card Title");

  const propsData = [
    {
      key: "1",
      property: "theme",
      type: "CardTheme",
      default: "softclay",
      description: "The theme of the card.",
    },
    {
      key: "2",
      property: "size",
      type: "CardSize",
      default: "small",
      description: "The size of the card.",
    },
    {
      key: "3",
      property: "radius",
      type: "CardRadius",
      default: "no",
      description: "The border radius of the card.",
    },
    {
      key: "4",
      property: "title",
      type: "string",
      description: "The title of the card.",
    },
    {
      key: "5",
      property: "content",
      type: "React.ReactNode",
      description: "The main content of the card.",
    },
  ];

  const exampleCode = `<Card 
  themeStyle="${themeStyle}"
  size="${size}"
  radius="${radius}"
  title="${title}"
  content="The main content of the card."
/>`;

  return (
    <div>
      <DocsPageHeader
        title="Card"
        description="A versatile container for displaying content in a structured and visually appealing way."
      />

      <SectionHeader>Interactive Playground</SectionHeader>
      <PlaygroundWrapper>
        <Controls>
          <Control>
            <label>Select Theme:</label>
            <Select
              value={themeStyle}
              onChange={(value) => setThemeStyle(value as CardTheme)}
              style={{ width: 150 }}
            >
              <Select.Option value="softclay">Soft Clay</Select.Option>
              <Select.Option value="neoglow">Neo Glow</Select.Option>
              <Select.Option value="brandfocused">Brand Focused</Select.Option>
              <Select.Option value="ghostline">Ghost Line</Select.Option>
              <Select.Option value="gradientglow">Gradient Glow</Select.Option>
              <Select.Option value="moodpop">Mood Pop</Select.Option>
              <Select.Option value="monogrid">Mono Grid</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Select Size:</label>
            <Select value={size} onChange={setSize} style={{ width: 150 }}>
              <Select.Option value="small">Small</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="large">Large</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Select Radius:</label>
            <Select value={radius} onChange={setRadius} style={{ width: 150 }}>
              <Select.Option value="no">None</Select.Option>
              <Select.Option value="small">Small</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="large">Large</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Edit Title:</label>
            <AntInput
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              style={{ width: 200 }}
            />
          </Control>
        </Controls>
        <Preview themeName={themeStyle}>
          <ThemeProvider theme={themes[themeStyle]}>
            <Card
              $cardThemeStyle={themeStyle}
              $cardSize={size}
              $cardRadius={radius}
              $cardTitle={title}
              $cardContent="The main content of the card."
            />
          </ThemeProvider>
        </Preview>
      </PlaygroundWrapper>

      <SectionHeader>Usage</SectionHeader>
      <CodeBlock code={exampleCode} language="tsx" />

      <SectionHeader>Props</SectionHeader>
      <PropsTable data={propsData} />
    </div>
  );
};

export default CardPage;
