"use client";

import React from "react";
import styled from "styled-components";
import DocsPageHeader from "@/components/docs/DocsPageHeader";
import SectionHeader from "@/components/docs/SectionHeader";
import Paragraph from "@/components/docs/Paragraph";
import List from "@/components/docs/List";
import ListItem from "@/components/docs/ListItem";

const IntroductionPage = () => {
  return (
    <div>
      <DocsPageHeader
        title="Introduction"
        description="Welcome to MoodMuse UI, a design-focused component library for React that brings your user interfaces to life with beautiful, themeable, and animated components."
      />

      <SectionHeader>Core Principles</SectionHeader>
      <Paragraph>
        MoodMuse UI is built on a foundation of principles that guide its design and development. Our goal is to provide a library that is not just a collection of components, but a complete system for building modern, engaging user experiences.
      </Paragraph>
      <List>
        <ListItem>
          <strong>Design-First:</strong> Every component is crafted with a focus on aesthetics and user experience, featuring modern themes and smooth animations powered by Framer Motion.
        </ListItem>
        <ListItem>
          <strong>Highly Themeable:</strong> Easily customize the look and feel of your application with our flexible theming system, built on top of styled-components.
        </ListItem>
        <ListItem>
          <strong>Developer-Friendly:</strong> With a clean and consistent API, MoodMuse UI is designed to be intuitive and a joy to work with, helping you build faster and more efficiently.
        </ListItem>
        <ListItem>
          <strong>Built with Modern Tech:</strong> Leveraging the power of React, TypeScript, and styled-components, our library is robust, type-safe, and scalable.
        </ListItem>
      </List>

      <SectionHeader>What's Included</SectionHeader>
      <Paragraph>
        This documentation provides a comprehensive guide to all the components and features available in MoodMuse UI. You'll find detailed information on:
      </Paragraph>
      <List>
        <ListItem>
          <strong>Component APIs:</strong> A full reference for all the props available for each component.
        </ListItem>
        <ListItem>
          <strong>Live Examples:</strong> Interactive examples that let you see the components in action and experiment with different props.
        </ListItem>
        <ListItem>
          <strong>Theming Guide:</strong> Instructions on how to use and customize themes to match your brand.
        </ListItem>
      </List>
      <Paragraph>
        We're excited to see what you build with MoodMuse UI. Let's get started!
      </Paragraph>
    </div>
  );
};

export default IntroductionPage;

