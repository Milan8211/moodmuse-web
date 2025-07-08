"use client";

import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  Card,
  CardTheme,
  CardRadius,
  ThemeProvider,
  themes,
} from "moodmuse-ui";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { theme } from "../../../../styles/theme";
import {
  CustomContainer,
  ControlsWrapper,
  SelectWrapper,
  StyledSelect,
  StyledSwitch,
} from "../../../global-components/ControlFormStyle";

const CardCustomContainer = styled(CustomContainer)`
  > div {
    &:first-child {
      width: 60%;
    }
    &:last-child {
      width: 40%;
    }
  }
`;

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

const PreviewWrapper = styled(motion.div)<{ $themeName: CardTheme }>`
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

  .custom-card {
    p {
      font-weight: 400;
    }
  }
`;

const CardContent = () => {
  const [themeStyle, setThemeStyle] = useState<CardTheme>("softclay");
  const [radius, setRadius] = useState("no");
  const [avatar, setAvatar] = useState<boolean>(false);
  const [icon, setIcon] = useState<boolean>(false);

  const themeOptions: { value: CardTheme; label: string }[] = [
    { value: "softclay", label: "Soft Clay" },
    { value: "neoglow", label: "Neo Glow" },
    { value: "brandfocused", label: "Brand Focused" },
    { value: "ghostline", label: "Ghost Line" },
    { value: "gradientglow", label: "Gradient Glow" },
    { value: "moodpop", label: "Mood Pop" },
    { value: "monogrid", label: "Mono Grid" },
  ];

  const radiusOptions: { value: string; label: string }[] = [
    { value: "no", label: "No Radius" },
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  return (
    <CardCustomContainer>
      <PreviewWrapper
        key={themeStyle} // Re-trigger animation on theme change
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        $themeName={themeStyle}
      >
        <ThemeProvider theme={themes[themeStyle]}>
          <Card
            title="Card Title"
            content="This is a short description of the card. Which will be displayed in the card."
            $themeStyle={themeStyle}
            $radius={radius as CardRadius}
            className="custom-card"
            avatar={
              avatar ? (
                <img src="https://i.pravatar.cc/48" alt="Avatar" />
              ) : (
                false
              )
            }
            icon={
              icon ? (
                <Icon icon="mdi:star-circle-outline" width="48" height="48" />
              ) : (
                false
              )
            }
          />
        </ThemeProvider>
      </PreviewWrapper>
      <div className="swiper-no-swiping">
        <ControlsWrapper>
          <SelectWrapper>
            <div className="label"> Select Theme:</div>
            <StyledSelect
              defaultValue={themeStyle}
              onChange={(value) => setThemeStyle(value as CardTheme)}
              options={themeOptions}
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
            <div className="label"> Avatar:</div>
            <StyledSwitch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultValue={avatar}
              onChange={(value) => setAvatar(value as boolean)}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Icon:</div>
            <StyledSwitch
              checkedChildren={<CheckOutlined />}
              unCheckedChildren={<CloseOutlined />}
              defaultValue={icon}
              onChange={(value) => setIcon(value as boolean)}
            />
          </SelectWrapper>
        </ControlsWrapper>
      </div>
    </CardCustomContainer>
  );
};

export default CardContent;
