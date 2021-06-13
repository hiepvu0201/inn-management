import React, { Component } from 'react';
import LeftMenu_admin from './LeftMenu'
import './style.css'
import {Images} from '../../config/image'
import { Link, Router } from "react-router-dom";
import { Drawer, Button, Menu, Dropdown } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield,faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
class Navbar_admin extends Component {
	state = {
		current: 'mail',
		visible: false
	}
	showDrawer = () => {
		this.setState({
			visible: true,
		});
	};

  menu = (
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
)
	render() {
		return (
      <nav className="menuBaradmin">
        <div className="logoadmin">
          <img
            src={Images.LOGIN}
            style={{ width: "auto", height: "70px", paddingTop: "10px" }}
          />
        </div>
<<<<<<< HEAD
        <div className="menuConadmin">
          <div className="leftMenu">
            <LeftMenu_admin />
=======
        <div className="menuConAdmin">
          <div className="leftMenuad">
            <LeftMenu />
>>>>>>> master
          </div>
          <div className="rightMenu">
            <img src={Images.ICON_RIGHT} />
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
            <LeftMenu_admin />
          </Drawer>
        </div>
      </nav>
    );
	}
}

export default Navbar_admin;
