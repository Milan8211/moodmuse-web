"use client";

import React, { Suspense, useState, useEffect } from "react";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styled from "styled-components";
import LogoContainer from "./global-components/LogoContainer";
import LoadingIndicator from "./common/LoadingIndicator";

const { Content, Sider } = Layout;

const DocsLayoutWrapper = styled(Layout)`
  background-color: #f8f9fa !important;
  padding: 2rem;
  min-height: 100vh;
`;

const StyledSider = styled(Sider)`
  background-color: #ffffff !important;
  padding: 0;
  height: calc(100vh - 4rem);
  position: sticky !important;
  border-radius: 8px;
  top: 2rem;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);

  .ant-layout-sider-children {
    .ant-menu {
      background-color: #ffffff !important;
      padding: 1rem 0;
    }
  }
`;

const LogoWrapper = styled.div`
  padding: 2rem 1.75rem;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-bottom: 1px solid #e9ecef;
`;

const StyledMenu = styled(Menu)`
  background-color: #ffffff !important;
  border-right: 0;

  .ant-menu-item,
  .ant-menu-submenu-title {
    font-size: 1rem;
    color: #495057;
    font-family: var(--font-inter) !important;
  }

  .ant-menu-item-selected {
    background-color: #e6f7ff !important;
    color: #1890ff !important;
  }

  .ant-menu-item a {
    color: inherit;
  }
`;

const StyledContent = styled(Content)`
  background-color: #ffffff !important;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow-y: auto;
`;

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);
  const pathname = usePathname();

  const menuItems = [
    {
      key: "/docs/getting-started",
      label: <Link href="/docs/getting-started">Getting Started</Link>,
    },
    {
      key: "/docs/introduction",
      label: <Link href="/docs/introduction">Introduction</Link>,
    },
    {
      key: "/docs/themes",
      label: <Link href="/docs/themes">Themes</Link>,
    },
    {
      key: "/docs/components",
      label: "Components",
      children: [
        {
          key: "/docs/components/button",
          label: <Link href="/docs/components/button">Button</Link>,
        },
        {
          key: "/docs/components/card",
          label: <Link href="/docs/components/card">Card</Link>,
        },
        {
          key: "/docs/components/image-card",
          label: <Link href="/docs/components/image-card">ImageCard</Link>,
        },
        {
          key: "/docs/components/icon-button",
          label: <Link href="/docs/components/icon-button">IconButton</Link>,
        },
        {
          key: "/docs/components/input",
          label: <Link href="/docs/components/input">Input</Link>,
        },
      ],
    },
  ];

  if (isInitialLoading) {
    return <LoadingIndicator />;
  }

  return (
    <DocsLayoutWrapper>
      <StyledSider width={260}>
        <LogoWrapper>
          <LogoContainer />
        </LogoWrapper>
        <StyledMenu
          mode="inline"
          selectedKeys={[pathname]}
          defaultOpenKeys={["/docs/components"]}
          items={menuItems}
        />
      </StyledSider>
      <Layout style={{ background: "transparent", paddingLeft: "2rem" }}>
        <StyledContent>
          <Suspense fallback={<LoadingIndicator />}>{children}</Suspense>
        </StyledContent>
      </Layout>
    </DocsLayoutWrapper>
  );
};

export default DocsLayout;
