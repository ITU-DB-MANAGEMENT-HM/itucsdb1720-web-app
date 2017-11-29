import React from "react";
import { Menu, Icon } from "antd";

const NavBar = ({ handleClick, current, routes, children }) => (
  <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
    {routes.map(route => (
      <Menu.Item key={route.path}>
        <Icon type={route.icon} style={{ fontSize: 18 }} />
        {route.title}
      </Menu.Item>
    ))}
    {children}
  </Menu>
);

export default NavBar;
