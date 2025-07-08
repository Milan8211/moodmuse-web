"use client";

import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import {
  Input,
  InputTheme,
  InputSize,
  InputRadius,
  ThemeProvider,
  themes,
} from "moodmuse-ui";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { theme } from "../../../../styles/theme";
import {
  CustomContainer,
  ControlsWrapper,
  SelectWrapper,
  StyledSelect,
  StyledInput,
} from "../../../global-components/ControlFormStyle";

const backgroundStyles = {
  softclay: css`
    background-color: #fdf6e3;
  `,
  neoglow: css`
    background-color: #fffcfa;
  `,
  brandfocused: css`
    background-color: #ffffff;
  `,
  ghostline: css`
    background-color: #0f0f0f;
  `,
  gradientglow: css`
    background-color: #fdf6e3;
  `,
  moodpop: css`
    background-color: #fdf6e3;
  `,
  monogrid: css`
    background-color: #eeeeee;
  `,
};

const PreviewWrapper = styled(motion.div)<{ $themeName: InputTheme }>`
  padding: 4rem 2rem;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  height: fit-content;
  border: 1px solid ${theme.secondary};
  text-align: left;
  ${({ $themeName }) =>
    backgroundStyles[$themeName as keyof typeof backgroundStyles]};
`;

const InputContent = () => {
  const [themeStyle, setThemeStyle] = useState<InputTheme>("softclay");
  const [label, setLabel] = useState<string>("Username");
  const [size, setSize] = useState<InputSize>("medium");
  const [radius, setRadius] = useState("no");
  const [icon, setIcon] = useState<string>("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server and initial client render
  }

  const themeOptions: { value: InputTheme; label: string }[] = [
    { value: "softclay", label: "Soft Clay" },
    { value: "neoglow", label: "Neo Glow" },
    { value: "brandfocused", label: "Brand Focused" },
    { value: "ghostline", label: "Ghost Line" },
    { value: "gradientglow", label: "Gradient Glow" },
    { value: "moodpop", label: "Mood Pop" },
    { value: "monogrid", label: "Mono Grid" },
  ];

  const sizeOptions: { value: InputSize; label: string }[] = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  const radiusOptions: { value: string; label: string }[] = [
    { value: "no", label: "No Radius" },
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
    { value: "pill", label: "Pill" },
  ];

  const iconOptions: { value: string; label: string }[] = [
    { value: "", label: "No Icon" },
    { value: "mdi:eye", label: "Eye" },
    { value: "mdi:lock", label: "Lock" },
  ];

  return (
    <CustomContainer>
      <PreviewWrapper
        key={themeStyle} // Re-trigger animation on theme change
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        $themeName={themeStyle}
      >
        <ThemeProvider theme={themes[themeStyle]}>
          <Input
            label={label}
            $themeStyle={themeStyle}
            $size={size}
            $radius={radius as InputRadius}
            rightIcon={icon ? <Icon icon={icon} /> : undefined}
          />
        </ThemeProvider>
      </PreviewWrapper>
      <div className="swiper-no-swiping">
        <ControlsWrapper>
          <SelectWrapper>
            <div className="label"> Edit Label:</div>
            <StyledInput
              defaultValue={label}
              onChange={(value) => setLabel(value.target.value)}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Select Theme:</div>
            <StyledSelect
              defaultValue={themeStyle}
              onChange={(value) => setThemeStyle(value as InputTheme)}
              options={themeOptions}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Select Size:</div>
            <StyledSelect
              defaultValue={size}
              onChange={(value) => setSize(value as InputSize)}
              options={sizeOptions}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Select Radius:</div>
            <StyledSelect
              defaultValue={radius}
              onChange={(value) => setRadius(value as string)}
              options={radiusOptions}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Select Icon:</div>
            <StyledSelect
              defaultValue={icon}
              onChange={(value) => setIcon(value as string | null)}
              options={iconOptions}
            />
          </SelectWrapper>
        </ControlsWrapper>
      </div>
    </CustomContainer>
  );
};

export default InputContent;
