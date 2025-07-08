"use client";

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Row, Col } from "antd";
import GlobalSection from "@/components/global-components/GlobalSection";
import { Heading, SubHeading } from "@/components/global-components/Heading";
import CustomiseButton from "./CustomiseButton";

const CustomiseContainer = styled(GlobalSection)`
  padding: 6rem 2rem;
  .ant-row {
    align-items: center;
  }

  @media (max-width: 900px) {
    text-align: center;
  }
`;

const TextWrapper = styled(motion.div)`
  .description {
    font-family: var(--font-inter);
    font-size: 1.3rem;
    font-weight: 300;
    line-height: 36px;
    color: #727272;
    text-align: left;
    margin-top: 2rem;
    margin-bottom: 0;
  }
`;

const CustomiseComponents = () => {
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
    <CustomiseContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <Row gutter={60} align="middle">
          <Col xs={24} lg={14}>
            <TextWrapper variants={itemVariants}>
              <SubHeading>Styled for Every Mood.</SubHeading>
              <Heading>Customise Theme & UI With Ease</Heading>
              <p className="description">
                Explore a growing collection of expressive design themes - Neo,
                Clay, Gradient, Mono Grid, and more. Each tailored to deliver a
                unique look and feel. With MoodMuse, your UI doesn’t just
                function, it speaks. Every button, input, and card reflects a
                different mood, backed by consistent design and smooth
                transitions.
              </p>
            </TextWrapper>
          </Col>
          <Col xs={24} lg={10}>
            <motion.div variants={itemVariants}>
              <CustomiseButton />
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </CustomiseContainer>
  );
};

export default CustomiseComponents;
