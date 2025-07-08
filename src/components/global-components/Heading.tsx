import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Heading = styled.h2`
  font-size: 2.875rem;
  font-weight: 400;
  font-family: var(--font-roboto);
  color: ${theme.text};
  line-height: 1.2;
  margin: 0;

  @media (max-width: 1440px) {
    /* Big Laptop */
    font-size: 2.5rem;
  }

  @media (max-width: 1024px) {
    /* Normal Laptop */
    font-size: 2.25rem;
  }

  @media (max-width: 768px) {
    /* Tablet */
    font-size: 1.75rem;
  }

  @media (max-width: 480px) {
    /* Mobile */
    font-size: 1.5rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1.625rem;
  font-family: var(--font-open-sans);
  font-weight: 400;
  color: #000000;
  margin-bottom: 2rem;
  text-transform: uppercase;
  line-height: 1.5;
  max-width: 800px;

  @media (max-width: 1440px) {
    /* Big Laptop */
    font-size: 1.1rem; /* Slightly smaller size */
  }

  @media (max-width: 1024px) {
    /* Normal Laptop */
    font-size: 1rem; /* Adjust size for normal laptops */
  }

  @media (max-width: 768px) {
    /* Tablet */
    font-size: 0.9rem; /* Adjust size for tablets */
  }

  @media (max-width: 480px) {
    /* Mobile */
    font-size: 0.8rem; /* Further adjust size for smaller mobile devices */
  }
`;
