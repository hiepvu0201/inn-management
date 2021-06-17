import React, { Component } from "react";
import LeftMenu_admin from "./LeftMenu";
import "./style.css";
import { Images } from "../../config/image";
import { Link, Router } from "react-router-dom";
import { Drawer, Button, Menu, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
class Navbar_admin extends Component {
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
    const menu = (
      <Menu style={{}}>
        <Menu.Item>
          <div style={{ width: "100%", height: "auto", display: "flex" }}>
            <div style={{ paddingTop: "10px" }}>
              <FontAwesomeIcon size="1x" color="grey" icon={faUserShield} />
            </div>
            <div
              //   target="_blank"
              //   rel="noopener noreferrer"
              //   href="https://www.antgroup.com"
              style={{
                fontSize: "20px",
                paddingLeft: "12px",
                paddingTop: "5px",
                fontFamily: "Open Sans,sans-serif",
                color: "white",
              }}
            >
              <Link
                to="/info"
                style={{
                  fontSize: "15px",
                  fontFamily: "Open Sans,sans-serif",
                  color: "black",
                  paddingTop: "10px",
                }}
              >
                Hồ sơ cá nhân
              </Link>
            </div>
          </div>
        </Menu.Item>
        <Menu.Item>
          <div style={{ width: "100%", height: "auto", display: "flex" }}>
            <div style={{ paddingTop: "7px" }}>
              <FontAwesomeIcon size="1x" color="grey" icon={faUnlockAlt} />
            </div>
            <div
              //   target="_blank"
              //   rel="noopener noreferrer"
              //   href="https://www.antgroup.com"
              style={{
                fontSize: "15px",
                paddingLeft: "12px",
                paddingTop: "5px",
                fontFamily: "Open Sans,sans-serif",
              }}
            >
              <Link
                to="/password"
                style={{
                  fontSize: "15px",
                  paddingLeft: "12px",
                  paddingTop: "5px",
                  fontFamily: "Open Sans,sans-serif",
                  color:"black"
                }}
              >
                Đổi mật khẩu
              </Link>
            </div>
          </div>
        </Menu.Item>
      </Menu>
    );
    return (
      <nav className="menuBaradmin">
        <div className="logoadmin">
          <Link to="/" className="acvd">
            <img
              className="middle-img"
              src={Images.LOGIN}
              // style={{ width: "auto", height: "70px", paddingTop: "10px" }}
            />
          </Link>
        </div>
        <div className="menuConAdmin">
          <div className="leftMenuad">
            <LeftMenu_admin />
          </div>
          <div className="rightMenuad">
            <Dropdown overlay={menu}>
              <img src={Images.ICON_RIGHT} />
            </Dropdown>
          </div>
          <Button
            className="barsMenuabc"
            type="primary"
            onClick={this.showDrawer}
          >
            <span className="barsBtnabc"></span>
          </Button>
          <Drawer
            title="Admin Menu"
            placement="right"
            closable={false}
            onClose={this.onClose}
            visible={this.state.visible}
          >
            <LeftMenu_admin />
          </Drawer>
        </div>
      </nav>
    );
  }
}

export default Navbar_admin;
