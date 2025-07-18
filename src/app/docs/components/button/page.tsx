"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  Button as MUIButton,
  type ButtonTheme,
  type ButtonSize,
  type ButtonRadius,
  ThemeProvider,
  themes,
} from "moodmuse-ui";
import { withCleanProps } from "@/components/common/withCleanProps";
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import SectionHeader from "@/components/docs/SectionHeader";
import PropsTable from "@/components/docs/PropsTable";
import CodeBlock from "@/components/docs/CodeBlock";
import { Select, Switch } from "antd";
import { Control, Controls, PlaygroundWrapper } from "../PlaygroundStyle";
import { motion } from "framer-motion";

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

const Button = withCleanProps(MUIButton);

const Preview = styled(motion.div)<{ themeName: ButtonTheme }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 3rem;
  border-radius: 8px;
  min-height: 150px;

  ${({ themeName }) =>
    backgroundStyles[themeName as keyof typeof backgroundStyles]};
`;

const ButtonPage = () => {
  const [themeStyle, setThemeStyle] = useState<ButtonTheme>("brandfocused");
  const [size, setSize] = useState<ButtonSize>("medium");
  const [radius, setRadius] = useState<ButtonRadius>("medium");
  const [dropShadow, setDropShadow] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const buttonThemes: ButtonTheme[] = [
    "brandfocused",
    "softclay",
    "neoglow",
    "ghostline",
    "moodpop",
    "gradientglow",
  ];

  const propsData = [
    {
      key: "1",
      property: "themeStyle",
      type: "ButtonTheme",
      default: "brandfocused",
      description: "The visual style of the button.",
    },
    {
      key: "2",
      property: "size",
      type: "ButtonSize",
      default: "medium",
      description: "The size of the button.",
    },
    {
      key: "3",
      property: "radius",
      type: "ButtonRadius",
      default: "md",
      description: "The border radius of the button.",
    },
    {
      key: "4",
      property: "dropShadow",
      type: "boolean",
      default: "true",
      description: "Whether the button has a drop shadow.",
    },
    {
      key: "5",
      property: "disabled",
      type: "boolean",
      default: "false",
      description: "Whether the button is disabled.",
    },
    {
      key: "6",
      property: "leftIcon",
      type: "React.ReactNode",
      description: "An icon to display to the left of the button text.",
    },
    {
      key: "7",
      property: "rightIcon",
      type: "React.ReactNode",
      description: "An icon to display to the right of the button text.",
    },
    {
      key: "8",
      property: "onClick",
      type: "() => void",
      description: "Function to call when the button is clicked.",
    },
  ];

  const exampleCode = `<Button 
  themeStyle="${themeStyle}"
  size="${size}"
  radius="${radius}"
  dropShadow={${dropShadow}}
  disabled={${disabled}}
>
  Click Me
</Button>`;

  return (
    <div>
      <DocsPageHeader
        title="Button"
        description="A versatile button component for user actions, available in multiple themes, sizes, and styles."
      />

      <SectionHeader>Interactive Playground</SectionHeader>
      <PlaygroundWrapper>
        <Controls>
          <Control>
            <label>Theme Style</label>
            <Select
              value={themeStyle}
              onChange={(value) => setThemeStyle(value as ButtonTheme)}
              style={{ width: 150 }}
            >
              {buttonThemes.map((th) => (
                <Select.Option key={th} value={th}>
                  {th}
                </Select.Option>
              ))}
            </Select>
          </Control>
          <Control>
            <label>Size</label>
            <Select
              value={size}
              onChange={(value) => setSize(value as ButtonSize)}
              style={{ width: 120 }}
            >
              <Select.Option value="small">Small</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="large">Large</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Radius</label>
            <Select
              value={radius}
              onChange={(value) => setRadius(value as ButtonRadius)}
              style={{ width: 120 }}
            >
              <Select.Option value="no">None</Select.Option>
              <Select.Option value="sm">Small</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="lg">Large</Select.Option>
              <Select.Option value="pill">Pill</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Disabled</label>
            <Switch checked={disabled} onChange={setDisabled} />
          </Control>
        </Controls>
        <Preview themeName={themeStyle}>
          <ThemeProvider theme={themes[themeStyle]}>
            <Button
              $buttonThemeStyle={themeStyle}
              $buttonSize={size}
              $buttonRadius={radius}
              $buttonDropShadow={dropShadow}
              $disabled={disabled}
            >
              Click Me
            </Button>
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

export default ButtonPage;
