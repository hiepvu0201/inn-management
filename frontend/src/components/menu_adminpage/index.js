import React, { Component } from 'react';
import LeftMenu_admin from './LeftMenu'
import './style.css'
import { Drawer, Button } from 'antd';
import {Images} from '../../config/image'
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

	onClose = () => {
		this.setState({
			visible: false,
		});
	};

	render() {
		return (
      <nav className="menuBaradmin">
        <div className="logoadmin">
          <img
            src={Images.LOGIN}
            style={{ width: "auto", height: "70px", paddingTop: "10px" }}
          />
        </div>
        <div className="menuConadmin">
          <div className="leftMenu">
            <LeftMenu_admin />
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
