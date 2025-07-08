"use client";

import React, { useState } from "react";
import styled from "styled-components";
import {
  ImageCard as MUIImageCard,
  type ImageCardTheme,
  type ImageCardSize,
  type ImageCardPosition,
} from "moodmuse-ui";
import { withCleanProps } from "@/components/common/withCleanProps";
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import SectionHeader from "@/components/docs/SectionHeader";
import PropsTable from "@/components/docs/PropsTable";
import CodeBlock from "@/components/docs/CodeBlock";
import { Select, Switch, Input as AntInput } from "antd";

const ImageCard = withCleanProps(MUIImageCard);

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
  min-height: 400px;
`;

const ImageCardPage = () => {
  const [themeStyle, setThemeStyle] = useState<ImageCardTheme>('neoglow');
  const [size, setSize] = useState<ImageCardSize>('medium');
  const [imagePosition, setImagePosition] = useState<ImageCardPosition>('top');
  const [dropShadow, setDropShadow] = useState(true);
  const [imageSrc, setImageSrc] = useState('https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500');
  const [title, setTitle] = useState('A Stylish Dog');
  const [content, setContent] = useState('This is an example of an ImageCard, perfect for showcasing visual content.');
  const [imageAlt, setImageAlt] = useState('A stylish dog wearing sunglasses.');

  const propsData = [
    { key: '1', property: 'themeStyle', type: "ImageCardTheme", default: 'neoglow', description: 'The theme of the card.' },
    { key: '2', property: 'size', type: "'small' | 'medium' | 'large'", default: 'medium', description: 'The size of the card.' },
    { key: '3', property: 'imagePosition', type: "'top' | 'bottom' | 'left' | 'right'", default: 'top', description: 'The position of the image.' },
    { key: '4', property: 'dropShadow', type: 'boolean', default: 'true', description: 'Whether the card has a drop shadow.' },
    { key: '5', property: 'imageSrc', type: 'string', description: 'The URL of the image to display.' },
    { key: '6', property: 'title', type: 'string', description: 'The title of the card.' },
    { key: '7', property: 'content', type: 'React.ReactNode', description: 'The main content of the card.' },
    { key: '8', property: 'imageAlt', type: 'string', description: 'The alt text for the image.' },
  ];

  const exampleCode = `<ImageCard 
  themeStyle="${themeStyle}"
  size="${size}"
  imagePosition="${imagePosition}"
  dropShadow={${dropShadow}}
  imageSrc="${imageSrc}"
  title="${title}"
  content="${content}"
  imageAlt="${imageAlt}"
/>`;

  return (
    <div>
      <DocsPageHeader
        title="ImageCard"
        description="A card component designed to feature an image prominently, perfect for galleries or product listings."
      />

      <SectionHeader>Interactive Playground</SectionHeader>
      <PlaygroundWrapper>
        <Controls>
          <Control>
            <label>Theme</label>
            <Select value={themeStyle} onChange={setThemeStyle} style={{ width: 150 }}>
              <Select.Option value="neoglow">NeoGlow</Select.Option>
              <Select.Option value="brandfocused">Brand Focused</Select.Option>
              <Select.Option value="softclay">Soft Clay</Select.Option>
              <Select.Option value="gradientglow">Gradient Glow</Select.Option>
              <Select.Option value="ghostline">Ghostline</Select.Option>
              <Select.Option value="moodpop">Moodpop</Select.Option>
              <Select.Option value="monogrid">Monogrid</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Size</label>
            <Select value={size} onChange={setSize} style={{ width: 150 }}>
              <Select.Option value="small">Small</Select.Option>
              <Select.Option value="medium">Medium</Select.Option>
              <Select.Option value="large">Large</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Image Position</label>
            <Select value={imagePosition} onChange={setImagePosition} style={{ width: 150 }}>
              <Select.Option value="top">Top</Select.Option>
              <Select.Option value="bottom">Bottom</Select.Option>
              <Select.Option value="left">Left</Select.Option>
              <Select.Option value="right">Right</Select.Option>
            </Select>
          </Control>
          <Control>
            <label>Drop Shadow</label>
            <Switch checked={dropShadow} onChange={setDropShadow} />
          </Control>
        </Controls>
        <Controls>
            <Control>
                <label>Image Source</label>
                <AntInput value={imageSrc} onChange={(e) => setImageSrc(e.target.value)} style={{ width: 400 }} />
            </Control>
            <Control>
                <label>Image Alt Text</label>
                <AntInput value={imageAlt} onChange={(e) => setImageAlt(e.target.value)} style={{ width: 200 }} />
            </Control>
        </Controls>
        <Controls>
            <Control>
                <label>Title</label>
                <AntInput value={title} onChange={(e) => setTitle(e.target.value)} style={{ width: 200 }} />
            </Control>
            <Control>
                <label>Content</label>
                <AntInput.TextArea value={content} onChange={(e) => setContent(e.target.value)} style={{ width: 400 }} rows={3} />
            </Control>
        </Controls>
        <Preview>
          <ImageCard
            themeStyle={themeStyle}
            size={size}
            imagePosition={imagePosition}
            dropShadow={dropShadow}
            imageSrc={imageSrc}
            title={title}
            content={content}
            imageAlt={imageAlt}
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

export default ImageCardPage;
