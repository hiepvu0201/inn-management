import React from "react";
import { Menu, Grid } from "antd";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
import { Images } from "./../../config/image";
const { useBreakpoint } = Grid;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUsers,
  faPlug,
  faMoneyBillAlt,
  faBuilding,
  faBell,
} from "@fortawesome/free-solid-svg-icons";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item
        key="admin"
        style={{ backgroundColor: "#007C7E", paddingLeft: "5px" }}
      >
        <FontAwesomeIcon icon={faTachometerAlt} color="white" size="1x" />
        <a
          href=""
          style={{
            color: "white",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          Bảng Quản Trị
        </a>
      </Menu.Item>
      <Menu.Item
        key="customer"
        style={{ backgroundColor: "#007C7E", paddingLeft: "5px" }}
      >
        <FontAwesomeIcon icon={faUsers} color="white" size="1x" />
        <a
          href=""
          style={{
            color: "white",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          Khách Thuê
        </a>{" "}
      </Menu.Item>
      <Menu.Item
        key="furniture"
        style={{ backgroundColor: "#007C7E", paddingLeft: "5px" }}
      >
        <FontAwesomeIcon icon={faPlug} color="white" size="1x" />
        <a
          href=""
          style={{
            color: "white",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          Cơ Sở Vật Chất
        </a>{" "}
      </Menu.Item>
      <SubMenu
        key="money"
        style={{ backgroundColor: "#007C7E", paddingLeft: "5px" }}
        title={
          <div>
            <FontAwesomeIcon icon={faMoneyBillAlt} color="white" size="1x" />
            <a
              href=""
              style={{
                color: "white",
                fontSize: "15px",
                fontFamily: "PT Sans, sans-serif",
              }}
            >
              Nguồn Thu - Chi
            </a>{" "}
          </div>
        }
      >
        <Menu.Item
          key="setting:1"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faMoneyBillAlt}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          Phiếu Thu
        </Menu.Item>
        <Menu.Item
          key="setting:2"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faMoneyBillAlt}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          Phiếu Chi
        </Menu.Item>
      </SubMenu>
      <Menu.Item
        key="building"
        style={{ backgroundColor: "#007C7E", paddingLeft: "5px" }}
      >
        <FontAwesomeIcon icon={faBuilding} color="white" size="1x" />
        <a
          href=""
          style={{
            color: "white",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          Chi Nhánh
        </a>{" "}
      </Menu.Item>
      <Menu.Item
        key="contract"
        style={{ backgroundColor: "#007C7E", paddingLeft: "5px" }}
      >
        <FontAwesomeIcon icon={faBuilding} color="white" size="1x" />
        <a
          href=""
          style={{
            color: "white",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          Hợp Đồng
        </a>{" "}
      </Menu.Item>
      <SubMenu
        key="rules"
        style={{ backgroundColor: "#007C7E", paddingLeft: "5px" }}
        title={
          <div>
            <FontAwesomeIcon icon={faBell} color="white" size="1x" />
            <a
              href=""
              style={{
                color: "white",
                fontSize: "15px",
                fontFamily: "PT Sans, sans-serif",
              }}
            >
              Nội Quy - Thông Báo
            </a>{" "}
          </div>
        }
      >
          <Menu.Item
          key="setting:3"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
            className:"padding"
          }}
        >
          <FontAwesomeIcon
            icon={faBell}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}

          />
          Nội Quy
        </Menu.Item>
        <Menu.Item
          key="setting:4"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          <FontAwesomeIcon
            icon={faBell}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
          Thông Báo
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default LeftMenu;
