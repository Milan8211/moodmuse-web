"use client";

import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { ImageCard, ImageCardSize, ImageCardPosition } from "moodmuse-ui";
import { motion } from "framer-motion";
import {
  CustomContainer,
  ControlsWrapper,
  SelectWrapper,
  StyledSelect,
  StyledInput,
} from "../../../global-components/ControlFormStyle";

const ImageCustomContainer = styled(CustomContainer)<{
  $position: ImageCardPosition;
}>`
  ${({ $position }) => layoutStyles[$position as keyof typeof layoutStyles]};
`;

const layoutStyles = {
  top: css`
    > div {
      &:first-child {
        width: 50%;
      }
      &:last-child {
        width: 50%;
      }
    }
  `,
  bottom: css`
    > div {
      &:first-child {
        width: 50%;
      }
      &:last-child {
        width: 50%;
      }
    }
  `,
  left: css`
    > div {
      &:first-child {
        width: 65%;
      }
      &:last-child {
        width: 35%;
      }
    }
  `,
  right: css`
    > div {
      &:first-child {
        width: 65%;
      }
      &:last-child {
        width: 35%;
      }
    }
  `,
};

const PreviewWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 150px;
  height: fit-content;

  .custom-image-card {
    text-align: left;
    align-items: center;
    h3 {
      font-weight: 400;
    }
    p {
      font-weight: 400;
    }
  }
`;

const ImageCardContent = () => {
  const [title, setTitle] = useState<string>("Image Card Title");
  const [size, setSize] = useState<ImageCardSize>("medium");
  const [position, setPosition] = useState<ImageCardPosition>("top");

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server and initial client render
  }

  const sizeOptions: { value: ImageCardSize; label: string }[] = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
  ];

  const positionOptions: { value: ImageCardPosition; label: string }[] = [
    { value: "top", label: "Top" },
    { value: "bottom", label: "Bottom" },
    { value: "left", label: "Left" },
    { value: "right", label: "Right" },
  ];

  return (
    <ImageCustomContainer $position={position}>
      <PreviewWrapper
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        <ImageCard
          className="custom-image-card"
          $size={size}
          $imagePosition={position}
          imageSrc="/imageReview.png"
          title={title}
          content="This is the card content. It can be a short description or any other information."
        />
      </PreviewWrapper>
      <div className="swiper-no-swiping">
        <ControlsWrapper>
          <SelectWrapper>
            <div className="label"> Edit Title:</div>
            <StyledInput
              defaultValue={title}
              onChange={(value) => setTitle(value.target.value)}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Select Size:</div>
            <StyledSelect
              defaultValue={size}
              onChange={(value) => setSize(value as ImageCardSize)}
              options={sizeOptions}
            />
          </SelectWrapper>
          <SelectWrapper>
            <div className="label"> Select Position:</div>
            <StyledSelect
              defaultValue={position}
              onChange={(value) => setPosition(value as ImageCardPosition)}
              options={positionOptions}
            />
          </SelectWrapper>
        </ControlsWrapper>
      </div>
    </ImageCustomContainer>
  );
};

export default ImageCardContent;
