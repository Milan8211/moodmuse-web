"use client";

import React from "react";
import styled from "styled-components";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeWrapper = styled.div`
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;

  pre {
    border-radius: 4px;
  }
`;

interface CodeBlockProps {
  code: string;
  language: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language }) => {
  return (
    <CodeWrapper>
      <SyntaxHighlighter
        language={language}
        style={vscDarkPlus}
        showLineNumbers
      >
        {code}
      </SyntaxHighlighter>
    </CodeWrapper>
  );
};

export default CodeBlock;
