"use client";

import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";

import GlobalSection from "@/components/global-components/GlobalSection";
import { Heading, SubHeading } from "@/components/global-components/Heading";
import { gallerySlides } from "./GallerySlides";
import { motion } from "framer-motion";

const GalleryContainer = styled(GlobalSection)`
  padding: 6rem 2rem;
  text-align: center;
`;

const SwiperWrapper = styled.div`
  margin-top: 4rem;
  .swiper {
    width: 100%;
    max-width: 700px;
    height: 100%;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    font-weight: bold;
    color: #fff;
    background: transparent;
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: white;
  }
`;

const ComponentGallery = () => {
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
    <GalleryContainer>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={itemVariants}>
          <SubHeading>Design Meets Interactivity.</SubHeading>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Heading>Preview Every Component & Style</Heading>
        </motion.div>
        <SwiperWrapper>
          <Swiper
            grabCursor={false}
            navigation={true}
            effect={"creative"}
            creativeEffect={{
              prev: {
                shadow: false,
                translate: ["-120%", 0, -500],
              },
              next: {
                shadow: false,
                translate: ["120%", 0, -500],
              },
            }}
            modules={[EffectCreative, Autoplay, Navigation]}
            className="mySwiper2"
            loop={true}
            noSwiping={true}
            noSwipingClass="swiper-no-swiping"
          >
            {gallerySlides.map((slide, index) => (
              <SwiperSlide key={index}>{slide}</SwiperSlide>
            ))}
          </Swiper>
        </SwiperWrapper>
      </motion.div>
    </GalleryContainer>
  );
};

export default ComponentGallery;
