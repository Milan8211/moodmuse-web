"use client";

import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";
import LogoContainer from "../global-components/LogoContainer";
import { IconButton } from "moodmuse-ui";
import { Icon } from "@iconify/react";
import { useRouter } from "next/navigation";

const HeaderContainer = styled(motion.header)<{ $isScrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 50;
  padding: ${(props) => (props.$isScrolled ? "1rem 4rem" : "2rem 4rem")};
  background-color: ${(props) => (props.$isScrolled ? "white" : "transparent")};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  box-shadow: ${(props) =>
    props.$isScrolled ? "0 2px 10px rgba(0, 0, 0, 0.1)" : "none"};
`;

const IconContainer = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  gap: 1.25rem; /* Increased gap for better spacing */
  align-items: center;

  .icon {
    color: #ffffff !important;
    transition: color 0.3s ease;
  }
`;

const MenuContainer = styled.div<{ $isScrolled: boolean }>`
  display: flex;
  gap: 2.5rem; /* Increased gap for better spacing */
  align-items: center;

  .menu-link {
    font-size: 1.25rem;
    font-family: var(--font-open-sans);
    color: #1a202c;
    text-decoration: none;
    transition: color 0.3s ease;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  gap: 2.5rem; /* Increased gap for better spacing */
  align-items: center;
`;

export default function Header() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <HeaderContainer
      $isScrolled={isScrolled}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <LogoContainer defaultheight="26px" mobileheight="26px" />
      <MenuWrapper>
        <MenuContainer $isScrolled={isScrolled}>
          <Link href="/docs/getting-started" className="menu-link">
            Getting Started
          </Link>
          <Link href="/docs/components/button" className="menu-link">
            Components
          </Link>
        </MenuContainer>
        <IconContainer $isScrolled={isScrolled}>
          <Link href="https://github.com/milan-tha/moodmuse-ui" target="_blank">
            <IconButton
              $dropShadow={true}
              $size="large"
              $radius="pill"
              icon={<Icon icon="mdi:github" className="icon" />}
              label="GitHub"
            />
          </Link>
          <Link href="/docs/">
            <IconButton
              $dropShadow={true}
              $size="large"
              $radius="pill"
              icon={<Icon icon="tabler:message-2" className="icon" />}
              label="Connect"
            />
          </Link>
        </IconContainer>
      </MenuWrapper>
    </HeaderContainer>
  );
}
