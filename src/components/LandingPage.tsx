"use client";

import React from "react";
import styled from "styled-components";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import ComponentGallery from "./sections/ComponentGallerySection/ComponentGallery";
import WhyMoodMuse from "./sections/WhyMoodSection/WhyMoodMuse";
import GetStarted from "./sections/GetStarted";
import CustomiseComponents from "./sections/CustomiseSection/CustomiseComponents";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #faf2ec;
`;

const MainContent = styled.main`
  flex: 1;
`;

export default function LandingPage() {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Hero />
        <WhyMoodMuse />
        <CustomiseComponents />
        <ComponentGallery />
        <GetStarted />
      </MainContent>
      <Footer />
    </PageContainer>
  );
}
