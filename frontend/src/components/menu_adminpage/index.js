import React, { Component } from 'react';
import LeftMenu from './LeftMenu'
import './style.css'
import { Drawer, Button } from 'antd';
import {Images} from '../../config/image'
class Navbar extends Component {
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
			<nav className="menuBar">
				<div className="logo">
			
					<img src={Images.LOGIN} style={{width:"100%",paddingTop:"10px"}} 

					/>
				</div>
				<div className="menuCon">
					<div className="leftMenu">
						<LeftMenu />
					</div>
					<div className="rightMenu">
						<img src={Images.ICON_RIGHT}/>
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
