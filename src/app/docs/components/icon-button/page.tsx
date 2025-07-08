"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { IconButton as MUIIconButton } from "moodmuse-ui";
import { withCleanProps } from "@/components/common/withCleanProps";
import { Icon } from '@iconify/react';
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import SectionHeader from "@/components/docs/SectionHeader";
import PropsTable from "@/components/docs/PropsTable";
import CodeBlock from "@/components/docs/CodeBlock";
import { Select, Input as AntInput } from "antd";

const IconButton = withCleanProps(MUIIconButton);

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

const Preview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
  padding: 3rem;
  border-radius: 8px;
  min-height: 150px;
`;

const IconButtonPage = () => {
  const [icon, setIcon] = useState('mdi:github');
  const [label, setLabel] = useState('GitHub');

  const availableIcons = [
    { value: 'mdi:github', label: 'GitHub' },
    { value: 'tabler:message-2', label: 'Message' },
    { value: 'formkit:heart', label: 'Heart' },
    { value: 'formkit:like', label: 'Like' },
    { value: 'formkit:settings', label: 'Settings' },
  ];

  const propsData = [
    { key: '1', property: 'icon', type: 'React.ReactNode', description: 'The icon to be displayed in the button.' },
    { key: '2', property: 'label', type: 'string', description: 'The text label displayed next to the icon.' },
    { key: '3', property: 'onClick', type: '() => void', description: 'Function to call when the button is clicked.' },
  ];

  const exampleCode = `<IconButton 
  icon={<Icon icon="${icon}" />}
  label="${label}"
/>`;

  return (
    <div>
      <DocsPageHeader
        title="IconButton"
        description="A button component that pairs an icon with a text label, perfect for clear and concise actions."
      />

      <SectionHeader>Interactive Playground</SectionHeader>
      <PlaygroundWrapper>
        <Controls>
          <Control>
            <label>Icon</label>
            <Select value={icon} onChange={setIcon} style={{ width: 150 }}>
              {availableIcons.map(item => <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>)}
            </Select>
          </Control>
          <Control>
            <label>Label</label>
            <AntInput value={label} onChange={(e) => setLabel(e.target.value)} style={{ width: 200 }} />
          </Control>
          
        </Controls>
        <Preview>
          <IconButton
            icon={<Icon icon={icon} />}
            label={label}
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

export default IconButtonPage;

