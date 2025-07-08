"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { theme } from "../../styles/theme";
import { Button } from "moodmuse-ui";
import GlobalSection from "../global-components/GlobalSection";
import { useRouter } from "next/navigation";

const HeroContainer = styled(GlobalSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Headline = styled(motion.h1)`
  font-family: var(--font-roboto);
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.2;
  margin-bottom: 3rem;
  color: ${theme.secondary};
  max-width: 900px;
  span {
    display: block;
  }
`;

const CTAContainer = styled(motion.div)`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;

  button {
    font-size: 1.125rem;
    font-weight: 400;
  }

  .view {
    &:hover {
      background-color: ${theme.secondary};
      border-color: ${theme.secondary};
      color: white;
    }
  }
`;

export default function Hero() {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <HeroContainer>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <Headline variants={itemVariants}>
          Any Theme. <span>Every Component.</span> <span>Fully Styled.</span>{" "}
          <span>Effortlessly Beautiful.</span>
        </Headline>
        <CTAContainer variants={itemVariants}>
          <Button
            onClick={() => router.push("/docs/getting-started")}
            $radius="pill"
            $themeStyle="brandfocused"
            $dropShadow={false}
            $size="large"
            rightIcon={<Icon icon="formkit:arrowright" />}
          >
            Get Started
          </Button>
          <Button
            onClick={() => router.push("/docs/components")}
            $radius="pill"
            $dropShadow={false}
            $size="large"
            className="view"
          >
            View Components
          </Button>
        </CTAContainer>
      </motion.div>
    </HeroContainer>
  );
}
