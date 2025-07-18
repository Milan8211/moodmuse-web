"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Button } from "moodmuse-ui";
import { SubHeading, Heading } from "@/components/global-components/Heading";
import { theme } from "@/styles/theme";
import { useRouter } from "next/navigation";

const GetStartedContainer = styled.section`
  padding: 6rem 2rem;
  background-color: #fff;
  text-align: center;
  button {
    font-size: 1.125rem;
    font-weight: 400;
  }

  .view {
    &:hover {
      background-color: ${theme.secondary};
      border-color: ${theme.secondary};
    }
  }
`;

const TextWrapper = styled(motion.div)`
  max-width: 575px;
  margin: 0 auto 4rem;
`;

const InstallBox = styled(motion.div)`
  background-color: transparent;
  border: 1px solid ${theme.primary};
  border-radius: 8px;
  padding: 1.5rem 2rem;
  font-family: "Fira Code", monospace;
  font-size: 1.1rem;
  color: #333;
  display: inline-block;
  margin-bottom: 2.5rem;
`;

export default function GetStarted() {
  const router = useRouter();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <GetStartedContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <TextWrapper variants={itemVariants}>
          <SubHeading>Ready to Start Building?</SubHeading>
          <Heading>Get started with MoodMuse UI in just a few minutes.</Heading>
        </TextWrapper>
        <InstallBox variants={itemVariants}>npm install moodmuse-ui</InstallBox>
        <motion.div variants={itemVariants}>
          <Button
            onClick={() => router.push("/docs/components")}
            $buttonRadius="pill"
            $buttonDropShadow={false}
            $buttonSize="large"
            className="view"
          >
            View Components
          </Button>
        </motion.div>
      </motion.div>
    </GetStartedContainer>
  );
}
