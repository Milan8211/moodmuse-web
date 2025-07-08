import React from "react";
import styled from "styled-components";
import ButtonContent from "./SliderContent/ButtonContent";
import IconButtonContent from "./SliderContent/IconButtonContent";
import CardContent from "./SliderContent/CardContent";
import ImageCardContent from "./SliderContent/ImageCardContent";
import InputContent from "./SliderContent/InputContent";

const SlideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  border-radius: 12px;
  padding: 2rem;
  color: #fff;
  text-align: center;
  width: 100%;
`;

const ComponentTitle = styled.h3`
  font-family: var(--font-inter);
  font-style: italic;
  font-size: 2rem;
  font-weight: 400;
  margin-top: auto;
  padding-top: 1rem;
  color: #1fab89;
`;

export const gallerySlides = [
  <SlideWrapper key="input">
    <InputContent />
    <ComponentTitle>Input</ComponentTitle>
  </SlideWrapper>,
  <SlideWrapper key="image-card">
    <ImageCardContent />
    <ComponentTitle>Image Card</ComponentTitle>
  </SlideWrapper>,
  <SlideWrapper key="card">
    <CardContent />
    <ComponentTitle>Card</ComponentTitle>
  </SlideWrapper>,
  <SlideWrapper key="icon-buttons">
    <IconButtonContent />
    <ComponentTitle>Icon Buttons</ComponentTitle>
  </SlideWrapper>,
  <SlideWrapper key="buttons">
    <ButtonContent />
    <ComponentTitle>Buttons</ComponentTitle>
  </SlideWrapper>,
];
