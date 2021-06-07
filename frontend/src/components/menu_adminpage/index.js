import React, { Component } from "react";
import LeftMenu from "./LeftMenu";
import "./style.css";
import { Link, Router } from "react-router-dom";

import { Drawer, Button, Menu, Dropdown } from "antd";
import { Images } from "../../config/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield,faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
const menu = (
  <Menu style={{ backgroundColor: "rgb(83, 100, 112)" }}>
    <Menu.Item>
      <div style={{ width: "100%", height: "auto", display: "flex" }}>
        <FontAwesomeIcon size="2x" color="#1890ff" icon={faUserShield} />
        <div
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   href="https://www.antgroup.com"
          style={{
            fontSize: "20px",
            paddingLeft: "12px",
            paddingTop: "5px",
            fontWeight: "bold",
            fontFamily: "Open Sans,sans-serif",
          }}
        >
          <Link to="/info">Hồ sơ cá nhân</Link>
        </div>
      </div>
    </Menu.Item>

    <Menu.Item>
      <div style={{ width: "100%", height: "auto", display: "flex" }}>
        <FontAwesomeIcon size="2x" color="#1890ff" icon={faUnlockAlt} />
        <div
          //   target="_blank"
          //   rel="noopener noreferrer"
          //   href="https://www.antgroup.com"
          style={{
            fontSize: "20px",
            paddingLeft: "12px",
            paddingTop: "5px",
            fontWeight: "bold",
            fontFamily: "Open Sans,sans-serif",
          }}
        >
          <Link to="/password">Đổi mật khẩu</Link>
        </div>
      </div>
    </Menu.Item>
  </Menu>
);
class Navbar extends Component {
  state = {
    current: "mail",
    visible: false,
  };
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
   
  render() {
    return (
      <nav className="menuBar">
        <div className="logo">
          <img
            src={Images.LOGIN}
            style={{ width: "100%", paddingTop: "10px" }}
          />
        </div>
        <div className="menuCon">
          <div className="leftMenu">
            <LeftMenu />
          </div>
          <div className="rightMenu">
            <Dropdown overlay={menu}>
              <img src={Images.ICON_RIGHT} />
            </Dropdown>
          </div>

          <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
            <span className="barsBtn"></span>
          </Button>
          <Drawer
            title="Admin Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar;
