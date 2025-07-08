"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  $borderColor: string;
}

const CardWrapper = styled(motion.div)<{ $borderColor: string }>`
  background-color: #fff;
  padding: 3.125rem 2.5rem;
  border-radius: 6px;
  border: 1px solid ${(props) => props.$borderColor};
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0;
  max-width: 325px;
  min-height: 380px;
  transition: all 0.3s ease;

  &:hover {
    transform: translate(-5px, -5px) !important;
    box-shadow: 10px 10px 0 ${(props) => props.$borderColor};
  }
`;

const IconWrapper = styled.div`
  margin-bottom: 4.25rem;
  img {
    height: 100px;
    width: auto;
  }
`;

const Title = styled.h3`
  font-family: var(--font-open-sans);
  font-size: 1.5rem;
  font-weight: 400;
  color: #000000;
  text-align: left;
  margin: 0;
`;

const Description = styled.p`
  font-family: var(--font-roboto);
  font-weight: 400;
  font-size: 1.15rem;
  line-height: 1.5;
  color: #9d9d9d;
  text-align: left;
  margin: 1.5rem 0 0 0;
`;

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  $borderColor,
}) => {
  return (
    <CardWrapper $borderColor={$borderColor} variants={cardVariants}>
      <IconWrapper>
        <img src={icon} alt={`${title} icon`} />
      </IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardWrapper>
  );
};

export default FeatureCard;
