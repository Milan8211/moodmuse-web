"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { motion } from "framer-motion";

interface LogoContainerProps {
  defaultheight?: string;
  mobileheight?: string;
  defaultwidth?: string;
  mobilewidth?: string;
}

const LogoImg = styled(motion.img)<LogoContainerProps>`
  height: ${(props) => props.defaultheight || "24px"};
  width: ${(props) => props.defaultwidth || "auto"};

  @media (max-width: 768px) {
    height: ${(props) => props.mobileheight || props.defaultheight || "auto"};
    width: ${(props) => props.mobilewidth || props.defaultwidth || "auto"};
  }
`;

const LogoContainer: React.FC<LogoContainerProps> = ({
  defaultheight,
  mobileheight,
  defaultwidth,
  mobilewidth,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server and initial client render
  }

  return (
    <Link href="/" passHref>
      <LogoImg
        src="/Moodmuse.png"
        alt="MoodMuse Logo"
        defaultheight={defaultheight}
        mobileheight={mobileheight}
        defaultwidth={defaultwidth}
        mobilewidth={mobilewidth}
      />
    </Link>
  );
};

export default LogoContainer;
