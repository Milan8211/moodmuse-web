"use client";

import styled from "styled-components";
import GlobalSection from "../global-components/GlobalSection";
import { theme } from "../../styles/theme";

const FooterContent = styled(GlobalSection)`
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

const Copyright = styled.div`
  font-family: var(--font-open-sans);
  font-size: 1rem;
  color: #666666;

  span {
    color: ${theme.secondary};
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const MadeWith = styled.div`
  font-family: var(--font-open-sans);
  font-size: 1rem;
  color: #666666;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    color: ${theme.primary};
  }

  @media (max-width: 768px) {
    padding-top: 10px;
    font-size: 0.8rem;
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContent>
      <Copyright>
        All rights reserved <span>@Moodmuse</span>, {currentYear}
      </Copyright>
      <MadeWith>
        Made by <span>Milan Thapa</span>
      </MadeWith>
    </FooterContent>
  );
}
