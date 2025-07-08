"use client";

import styled from "styled-components";

const GlobalSection = styled.section`
  padding: 6rem 4rem;
  max-width: 900px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 4rem 2rem;
  }

  @media (max-width: 480px) {
    padding: 3rem 2rem;
  }
`;

export default GlobalSection;
