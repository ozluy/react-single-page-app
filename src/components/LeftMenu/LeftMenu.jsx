import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import {deepPurple900} from 'material-ui/styles/colors'
import {Link} from 'react-router';

class LeftMenu extends React.Component {
	render() {
		const leftMenuStyle = {
			textAlign: 'center',
			avatar: {
				margin: '5px',
				boxShadow: '0 4px 8px 2px #01012b'
			},
			name: {
				margin: '10px 0',
				color: deepPurple900
			},
			title: {
				color: deepPurple900,
				fontWeight: 400
			}

		};

		return (
			<Drawer
				docked={this.props.isLargeWindowMode}
				width={256}
				open={this.props.isOpen}
				onRequestChange={this._handleClose.bind(this)}
				style={leftMenuStyle}
			>
				<Avatar
					style={leftMenuStyle.avatar}
					src="./assets/img/starks.jpg"
					size={120}
				/>
				<h2 style={leftMenuStyle.name}>Name Surname</h2>
				<h3 style={leftMenuStyle.title}>Job Title</h3>
				<Link to="/about"> <MenuItem onTouchTap={this._handleClose.bind(this)}>About</MenuItem></Link>
				<Link to="/projects"> <MenuItem onTouchTap={this._handleClose.bind(this)}>Project </MenuItem></Link>
				<Link to="/resume"> <MenuItem onTouchTap={this._handleClose.bind(this)}>Resume </MenuItem></Link>
				<Link to="contact"> <MenuItem onTouchTap={this._handleClose.bind(this)}>Contact </MenuItem></Link>
				<a href="https://medium.com/@ozluy" target="_blank"> <MenuItem onTouchTap={this._handleClose.bind(this)}>Blog </MenuItem></a>
			</Drawer>
		)
	}

	_handleClose() {
		if(!this.props.isLargeWindowMode){
			this.props.changeOwnerState();
		}
	}
}
LeftMenu.props = {
	isOpen: React.PropTypes.bool,
	changeOwnerState: React.PropTypes.func,
	isLargeWindowMode: React.PropTypes.bool

}
module.exports = LeftMenu;