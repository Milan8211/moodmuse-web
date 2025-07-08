"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const HeaderWrapper = styled(motion.div)`
  margin-bottom: 2.5rem;
  border-bottom: 1px solid #e9ecef;
  padding-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 700;
  color: #212529;
  margin-bottom: 0.75rem;
  font-family: var(--font-roboto);
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 800px;
  line-height: 1.6;
`;

interface DocsPageHeaderProps {
  title: string;
  description: string;
}

const DocsPageHeader: React.FC<DocsPageHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <HeaderWrapper
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <Title>{title}</Title>
      <Description>{description}</Description>
    </HeaderWrapper>
  );
};

export default DocsPageHeader;
