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
import Branches from "./../../feature/admin/branches";
import { faHandshake } from "@fortawesome/free-regular-svg-icons";
import { Link, Router } from "react-router-dom";
const LeftMenu = () => {
  const { md } = useBreakpoint();
  return (
    <Menu mode={md ? "horizontal" : "inline"}>
      <Menu.Item
        key="home"
        style={{
          backgroundColor: "#007c7e",
          paddingLeft: "10px",
        }}
      >
        <FontAwesomeIcon
          icon={faMoneyBillAlt}
          color="#efefef"
          size="1x"
          style={{ marginRight: "10px" }}
        />
        <a
          href=""
          style={{
            color: "white",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
          }}
        >
          {" "}<Link to="/">Trang chủ</Link>
        </a>
      </Menu.Item>
      <SubMenu
        key="menu-2"
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
              Nhà trọ
            </a>{" "}
          </div>
        }
      >
        <Menu.Item
          key="brand"
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
          {/* <Router> */} <Link to="/branches">Chi nhánh</Link>
        </Menu.Item>
        <Menu.Item
          key="room"
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
          <Link to="/rooms"> Phòng</Link>
        </Menu.Item>
        <Menu.Item
          key="facility"
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
          <Link to="/facilities">Thiết bị</Link>
        </Menu.Item>
        <Menu.Item
          key="electricity-water"
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
          <Link to="/electricity-water"> Điện - Nước </Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="menu-1"
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
          key="monthlyincome"
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
          <Link to="/monthlyincome"> Nguồn thu</Link>
        </Menu.Item>
        <Menu.Item
          key="monthlypayment"
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
          <Link to="/monthlypayment"> Nguồn chi</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="menu:3"
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
              HỢP ĐỒNG{" "}
            </a>{" "}
          </div>
        }
      >
        <Menu.Item
          key="contract"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
            className: "padding",
          }}
        >
          <FontAwesomeIcon
            icon={faBell}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />{" "}
          <Link to="/contract">Hợp đồng</Link>
        </Menu.Item>
        <Menu.Item
          key="users"
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
          />{" "}
          <Link to="/user"> Khách thuê</Link>
        </Menu.Item>
        <Menu.Item
          key="role"
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
          />{" "}
          <Link to="/role"> Phân quyền</Link>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="menu-last"
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
          key="rules"
          style={{
            color: "#007c7e",
            fontSize: "15px",
            fontFamily: "PT Sans, sans-serif",
            className: "padding",
          }}
        >
          <FontAwesomeIcon
            icon={faBell}
            color="grey"
            size="1x"
            style={{ marginRight: "10px" }}
          />
         <Link to="/rule"> Nội Quy</Link>
        </Menu.Item>
        <Menu.Item
          key="notification"
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
        <Link to="/notification">  Thông Báo</Link>
        </Menu.Item>
        <Menu.Item
          key="report"
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
          <Link to="/reported-issue">Báo cáo</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default LeftMenu;
