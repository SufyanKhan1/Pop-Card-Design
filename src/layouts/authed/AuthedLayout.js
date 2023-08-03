import React, { useState } from "react";
import { Layout } from "antd";
import styled from "styled-components";
import BaseLayout from "../base/BaseLayout";
import SideBar from "./sidebar/SideBar";
import TopHeader from "./topheader/TopHeader";

const { Content } = Layout;

export default function AuthedLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <BaseLayout>
      <LayoutWrapper>
        <Layout className="admin-custom-layout">
          <SideBar collapsed={collapsed} />
          <Layout
            className={
              !collapsed
                ? "admin-custom-layout-main"
                : "admin-custom-layout-main admin-custom-layout-main-collapsed"
            }
          >
            <TopHeader collapsed={collapsed} setCollapsed={setCollapsed} />
            <Content className="admin-layout-content">{children}</Content>
          </Layout>
        </Layout>
      </LayoutWrapper>
    </BaseLayout>
  );
}

const LayoutWrapper = styled.div`
  .admin-custom-layout {
    /* background: #1b233c; */
    .logo {
      height: 35px;
      margin: 15px;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
      }
    }
    .ant-menu-submenu-popup {
      background: red;
    }
    .ant-menu-title-content {
      color: #000;
    }
    .admin-layout-sider,
    .admin-layout-header {
      background: #ffffff !important;
    }
    .admin-layout-sider {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      .admin-menu-item {
        color: #000;
        .ant-menu-item-selected {
          background: whitesmoke;
          color: #000;
        }
        .ant-menu-item-icon {
          font-size: 20px;
        }
      }
    }
    .admin-custom-layout-main,
    .admin-custom-layout-main-collapsed {
      transition: all 0.2s;
    }
    .admin-custom-layout-main {
      margin-left: 200px;
    }
    .admin-custom-layout-main-collapsed {
      margin-left: 80px;
    }
    .admin--layout-header,
    .admin--layout-header-collapsed {
      transition: all 0.2s;
    }
    .admin-layout-header {
      padding-left: 0px;
      padding-right: 25px;

      position: fixed;
      z-index: 2;
      width: calc(100% - 200px);
    }
    .admin-layout-header-collapsed {
      width: calc(100% - 80px);
    }
    .admin-layout-content {
      height: calc(100vh - 64px);
      margin-top: 64px;
      background-color: white;
    }
    .ant-menu-inline-collapsed {
      .ant-menu-item {
        display: flex;
        align-items: center;
        padding: 0 calc(50% - 25px / 2);

        .ant-menu-item-icon {
          font-size: 25px !important;
        }
      }
    }
  }
  @media screen and (max-width: 720px) {
    .admin-layout-sider-hiden {
      /* display: none; */
    }

    .admin-layout-header-collapsed {
      padding-left: 25px !important;
    }
  }
`;
