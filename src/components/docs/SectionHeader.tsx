"use client";

import React from "react";
import styled from "styled-components";

const Header = styled.h2`
  font-size: 1.75rem;
  font-weight: 600;
  color: #343a40;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #dee2e6;
  font-family: var(--font-roboto);
`;

interface SectionHeaderProps {
  children: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ children }) => {
  return <Header>{children}</Header>;
};

export default SectionHeader;
