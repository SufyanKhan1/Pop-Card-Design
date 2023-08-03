import React from "react";
import { Wrapper } from "./SideBar.styled.js";
import { Layout, Menu } from "antd";

import { NavLink } from "react-router-dom";

import { Dashboard } from "../../../Common/Index.js";
import {
  FileOutlined,
  InteractionOutlined,
  LoginOutlined,
  MessageOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

function SideBar(props) {
  return (
    <Sider
      className={
        props.collapsed
          ? "admin-layout-sider"
          : "admin-layout-sider admin-layout-sider-hiden"
      }
      trigger={null}
      collapsible
      collapsed={props.collapsed}
    >
      <Wrapper>
        <div className="logo">
          <p>POPCARD</p>
          {/* <img src={logo} /> */}
        </div>
        <Menu className="admin-menu-item" theme="light" mode="inline">
          <Menu.Item key={"dashboard"} icon={<Dashboard />}>
            <NavLink to="dashboard">Dashboard</NavLink>
          </Menu.Item>

          <Menu.SubMenu
            icon={<InteractionOutlined style={{ color: "#008dd9" }} />}
            title="Action"
            key={"1"}
          >
            <Menu.Item
              key={"popcards"}
              icon={<FileOutlined style={{ color: "#008dd9" }} />}
            >
              <NavLink to="popcards">Popcards</NavLink>
            </Menu.Item>
            <Menu.Item
              key={"feedback"}
              icon={<MessageOutlined style={{ color: "#008dd9" }} />}
            >
              Feedback Forms
              {/* <NavLink to="popcards">Feedback Forms</NavLink> */}
            </Menu.Item>
          </Menu.SubMenu>

          {/* logout submenu */}
          <Menu.SubMenu
            style={{
              position: "absolute",
              bottom: "0",
            }}
            icon={<InteractionOutlined style={{ color: "#008dd9" }} />}
            title="Configuration"
            key={"2"}
          >
            <Menu.Item
              key={"setting"}
              icon={<SettingOutlined style={{ color: "#008dd9" }} />}
            >
              <NavLink to="popcards">Settings</NavLink>
            </Menu.Item>
            <Menu.Item
              key={"logout"}
              icon={<LoginOutlined style={{ color: "#008dd9" }} />}
            >
              Logout
              {/* <NavLink to="popcards">Feedback Forms</NavLink> */}
            </Menu.Item>
          </Menu.SubMenu>
        </Menu>
      </Wrapper>
    </Sider>
  );
}

export default SideBar;
