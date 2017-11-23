import React from 'react';
import { Menu, Icon } from 'antd';

const NavBar = ({handleClick, current}) => (
    <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
      >
        <Menu.Item key="mail">
          <Icon type="mail" />Navigation One
        </Menu.Item>
        <Menu.Item key="app">
          <Icon type="appstore" />Navigation Two
        </Menu.Item>
      </Menu>
  );

  export default NavBar;