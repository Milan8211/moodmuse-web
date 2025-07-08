"use client";

import { motion, Variants } from "framer-motion";
import styled from "styled-components";

const LoadingOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(248, 249, 250, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const Container = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

const Dot = styled(motion.div)`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #ff0088;
    will-change: transform;
`;

const containerVariants: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const dotVariants: Variants = {
    initial: {},
    animate: {
        scale: [1, 1.5, 1],
        transition: {
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
        },
    },
};

const LoadingIndicator = () => {
    return (
        <LoadingOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <Container
                variants={containerVariants}
                initial="initial"
                animate="animate"
            >
                <Dot variants={dotVariants} />
                <Dot variants={dotVariants} />
                <Dot variants={dotVariants} />
            </Container>
        </LoadingOverlay>
    );
};

export default LoadingIndicator;
