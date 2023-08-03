import { Layout, Menu, Popover, Col, Row, Badge } from "antd";
import React from "react";
import { Wrapper } from "./TopHeader.styled";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header } = Layout;

function TopHeader(props) {
  return (
    <Header
      className={
        !props.collapsed
          ? "admin-layout-header"
          : "admin-layout-header admin-layout-header-collapsed"
      }
    >
      <Wrapper>
        {React.createElement(props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
          className: "trigger",
          onClick: () => props.setCollapsed(!props.collapsed),
        })}


      </Wrapper>
    </Header>
  );
}

export default TopHeader;
