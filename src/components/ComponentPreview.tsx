'use client'

import styled from 'styled-components';

const PreviewWrapper = styled.div`
  background-color: #ffffff;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface ComponentPreviewProps {
  children: React.ReactNode;
}

const ComponentPreview: React.FC<ComponentPreviewProps> = ({ children }) => {
  return (
    <PreviewWrapper>
      {children}
    </PreviewWrapper>
  );
};

export default ComponentPreview;
