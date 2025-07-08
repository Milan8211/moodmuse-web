"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalSection from "@/components/global-components/GlobalSection";
import { Heading, SubHeading } from "@/components/global-components/Heading";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "/theme-based.png",
    title: "Theme-Based Architecture",
    description:
      "Switch the entire look and feel of your application with a single line of code via our ThemeProvider.",
    $borderColor: "#ff4d4d",
  },
  {
    icon: "/developer-first.png",
    title: "Developer-First Design",
    description:
      "Our API is designed to be intuitive and predictable, making development faster and more enjoyable.",
    $borderColor: "#00f0a0",
  },
  {
    icon: "/lightweight.png",
    title: "Lightweight & Performant",
    description:
      "No unnecessary dependencies. Just clean, efficient components that won't slow you down.",
    $borderColor: "#00f0a0",
  },
  {
    icon: "/theme-based.png",
    title: "Theme-Based Architecture",
    description:
      "Switch the entire look and feel of your application with a single line of code via our ThemeProvider.",
    $borderColor: "#ff4d4d",
  },
];

const WhyMoodMuseContainer = styled(GlobalSection)`
  padding: 6rem 2rem;
`;

const HeadingWrapper = styled(motion.div)`
  margin-bottom: 2rem;
  max-width: 395px;
`;

const CardsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3.5rem;
  margin-top: 4rem;

  > div {
    position: relative;
    &:nth-child(odd) {
      justify-self: end;
      top: -213px;
    }
    &:first-child {
      top: 0;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const WhyMoodMuse = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <WhyMoodMuseContainer>
      <CardsGrid
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HeadingWrapper
          initial="hidden"
          whileInView="visible"
          variants={itemVariants}
        >
          <SubHeading>Why MoodMuse?</SubHeading>
          <Heading>A UI Kit That Works For You</Heading>
        </HeadingWrapper>
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} />
        ))}
      </CardsGrid>
    </WhyMoodMuseContainer>
  );
};

export default WhyMoodMuse;
