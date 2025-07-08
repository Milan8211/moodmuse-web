"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { Input as MUIInput, type InputTheme, type InputSize, type InputRadius } from "moodmuse-ui";
import { withCleanProps } from "@/components/common/withCleanProps";
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import SectionHeader from "@/components/docs/SectionHeader";
import PropsTable from "@/components/docs/PropsTable";
import CodeBlock from "@/components/docs/CodeBlock";
import { Select, Switch, Input as AntInput } from "antd";

const PlaygroundWrapper = styled.div`
  padding: 2rem;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin: 2rem 0;
`;

const Controls = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const Control = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    font-weight: 500;
    color: #495057;
  }
`;

const Input = withCleanProps(MUIInput);

const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 3rem;
  border-radius: 8px;
  min-height: 150px;
`;

const InputPage = () => {
  const [themeStyle, setThemeStyle] = useState<InputTheme>("brandfocused");
  const [size, setSize] = useState<InputSize>("medium");
  const [radius, setRadius] = useState<InputRadius>("medium");
  const [disabled, setDisabled] = useState(false);
  const [placeholder, setPlaceholder] = useState("Enter your text...");

  const inputThemes: InputTheme[] = ['brandfocused', 'softclay', 'neoglow', 'ghostline'];

  const propsData = [
    { key: '1', property: 'themeStyle', type: 'InputTheme', default: 'brandfocused', description: 'The visual style of the input.' },
    { key: '2', property: 'size', type: 'InputSize', default: 'medium', description: 'The size of the input.' },
    { key: '3', property: 'radius', type: 'InputRadius', default: 'medium', description: 'The border radius of the input.' },
    { key: '4', property: 'disabled', type: 'boolean', default: 'false', description: 'Whether the input is disabled.' },
    { key: '5', property: 'placeholder', type: 'string', description: 'The placeholder text for the input.' },
    { key: '6', property: 'onChange', type: '(e: React.ChangeEvent<HTMLInputElement>) => void', description: 'Function to call when the input value changes.' },
  ];

  const exampleCode = `<Input 
  themeStyle="${themeStyle}"
  size="${size}"
  radius="${radius}"
  disabled={${disabled}}
  placeholder="${placeholder}"
/>`;

  return (
    <div>
      <DocsPageHeader
        title="Input"
        description="A component for collecting user-provided text in a form, with various styles and sizes."
      />

      <SectionHeader>Interactive Playground</SectionHeader>
      <PlaygroundWrapper>
        <Controls>
          <Control>
            <label>Theme Style</label>
            <Select value={themeStyle} onChange={(value) => setThemeStyle(value as InputTheme)} style={{ width: 150 }}>
              {inputThemes.map(th => <Select.Option key={th} value={th}>{th}</Select.Option>)}
            </Select>
          </Control>
          <Control>
            <label>Size</label>
            <Select value={size} onChange={(value) => setSize(value as InputSize)} style={{ width: 120 }}>
              <Select.Option value="small">Small</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="large">Large</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Radius</label>
            <Select value={radius} onChange={(value) => setRadius(value as InputRadius)} style={{ width: 120 }}>
              <Select.Option value="no">None</Select.Option>
              <Select.Option value="sm">Small</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="lg">Large</Select.Option>
              <Select.Option value="pill">Pill</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Placeholder</label>
            <AntInput value={placeholder} onChange={(e) => setPlaceholder(e.target.value)} style={{ width: 200 }} />
          </Control>
          <Control>
            <label>Disabled</label>
            <Switch checked={disabled} onChange={setDisabled} />
          </Control>
        </Controls>
        <Preview>
          <Input
            themeStyle={themeStyle}
            size={size}
            radius={radius}
            disabled={disabled}
            placeholder={placeholder}
          />
        </Preview>
      </PlaygroundWrapper>

      <SectionHeader>Usage</SectionHeader>
      <CodeBlock code={exampleCode} language="tsx" />

      <SectionHeader>Props</SectionHeader>
      <PropsTable data={propsData} />
    </div>
  );
};

export default InputPage;

