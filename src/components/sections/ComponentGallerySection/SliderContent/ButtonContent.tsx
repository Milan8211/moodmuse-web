"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  Button,
  ButtonTheme,
  ButtonSize,
  ButtonRadius,
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

const PreviewWrapper = styled(motion.div)<{ $themeName: ButtonTheme }>`
  padding: 4rem 2rem;
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  height: fit-content;
  border: 1px solid ${theme.secondary};
  ${({ $themeName }) =>
    backgroundStyles[$themeName as keyof typeof backgroundStyles]};
`;

const ButtonContent = () => {
  const [themeStyle, setThemeStyle] = useState<ButtonTheme>("softclay");
  const [size, setSize] = useState<ButtonSize>("medium");
  const [radius, setRadius] = useState<ButtonRadius>("no");
  const [icon, setIcon] = useState<string | null>(null);

  const themeOptions: { value: ButtonTheme; label: string }[] = [
    { value: "softclay", label: "Soft Clay" },
    { value: "neoglow", label: "Neo Glow" },
    { value: "brandfocused", label: "Brand Focused" },
    { value: "ghostline", label: "Ghost Line" },
    { value: "gradientglow", label: "Gradient Glow" },
    { value: "moodpop", label: "Mood Pop" },
    { value: "monogrid", label: "Mono Grid" },
  ];

  const sizeOptions: { value: ButtonSize; label: string }[] = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  const radiusOptions: { value: ButtonRadius; label: string }[] = [
    { value: "no", label: "No Radius" },
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
    { value: "pill", label: "Pill" },
  ];

  const iconOptions: { value: string; label: string }[] = [
    { value: "mdi:home", label: "Home Icon" },
    { value: "mdi:rocket", label: "Rocket Icon" },
    { value: "mdi:heart", label: "Heart Icon" },
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
          <Button
            $buttonThemeStyle={themeStyle}
            $buttonSize={size}
            $buttonRadius={radius}
            $buttonRightIcon={icon ? <Icon icon={icon} /> : undefined}
          >
            {themeOptions.find((t) => t.value === themeStyle)?.label}
          </Button>
        </ThemeProvider>
      </PreviewWrapper>
      <div className="swiper-no-swiping">
        <ControlsWrapper>
          <SelectWrapper>
            <div className="label"> Select Theme:</div>
            <StyledSelect
              defaultValue={themeStyle}
              onChange={(value) => setThemeStyle(value as ButtonTheme)}
              options={themeOptions}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Select Size:</div>
            <StyledSelect
              defaultValue={size}
              onChange={(value) => setSize(value as ButtonSize)}
              options={sizeOptions}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Select Radius:</div>
            <StyledSelect
              defaultValue={radius}
              onChange={(value) => setRadius(value as ButtonRadius)}
              options={radiusOptions}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Select Icon:</div>
            <StyledSelect
              defaultValue={icon}
              onChange={(value) => setIcon(value as string)}
              options={iconOptions}
            />
          </SelectWrapper>
        </ControlsWrapper>
      </div>
    </CustomContainer>
  );
};

export default ButtonContent;
