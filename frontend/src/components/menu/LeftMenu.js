import React from "react";
import { Menu, Grid } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import {Images} from './../../config/image'
const { useBreakpoint } = Grid;

const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="mail">
        <a href="">Trang Chủ</a>
      </Menu.Item>
      <Menu.Item key="price">
        <a href="">Bảng Giá</a>
      </Menu.Item>
      <Menu.Item key="discount">
        <a href="">Khuyến Mãi</a>
      </Menu.Item>
      <Menu.Item key="hoptac">
        <a href="">Hợp tác</a>
      </Menu.Item>
      <Menu.Item key="news">
        <a href="">Tin tức</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="">Liên hệ</a>
      </Menu.Item>
      {/* <SubMenu key="sub1" title={<span>Blogs</span>}> */}
      {/* <MenuItemGroup title="Item 1">
          <Menu.Item key="setting:1">Option 1</Menu.Item>
          <Menu.Item key="setting:2">Option 2</Menu.Item>
        </MenuItemGroup>
        <MenuItemGroup title="Item 2">
          <Menu.Item key="setting:3">Option 3</Menu.Item>
          <Menu.Item key="setting:4">Option 4</Menu.Item>
        </MenuItemGroup> */}
      {/* </SubMenu> */}
      {/* <Menu.Item key="mail">
        <a href="">Khuyến Mãi</a>
      </Menu.Item>
      <Menu.Item key="alipay">
        <a href="">Contact Us</a>
      </Menu.Item> */}
    </Menu>
  );
};

export default LeftMenu;
