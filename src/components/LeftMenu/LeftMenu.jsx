import React from 'react';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import Drawer from 'material-ui/Drawer';
import {deepPurple900} from 'material-ui/styles/colors'
import {List, ListItem} from 'material-ui/List';
import AppBar from 'material-ui/AppBar';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ActionInfo from 'material-ui/svg-icons/action/info';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';

import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import {grey50} from 'material-ui/styles/colors'
import {Link} from 'react-router';

class LeftMenu extends React.Component {
	render() {
		const leftMenuStyle = {
			appBar:{
				backgroundColor: deepPurple900,
				title:{
					fontWeight:300,
					link:{
						color: grey50,
						textDecoration:'none'
					}
				}
			},
			link: {
				textDecoration: 'none'
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
				<AppBar
					style={leftMenuStyle.appBar}
					titleStyle={leftMenuStyle.appBar.title}
					showMenuIconButton={false}
					title={<Link style={leftMenuStyle.appBar.title.link} to="/"> React SPA</Link>}
							/>

				<Link style={leftMenuStyle.link} to="/about"> <MenuItem leftIcon={<ActionInfo />}
																																onTouchTap={this._handleClose.bind(this)}>About</MenuItem></Link>
				<Link style={leftMenuStyle.link} to="/resume"> <MenuItem leftIcon={<ContentInbox />}
																																 onTouchTap={this._handleClose.bind(this)}>Resume </MenuItem></Link>
				<List>
					<ListItem
						primaryText="Projects"
						leftIcon={<ContentInbox />}
						initiallyOpen={false}
						primaryTogglesNestedList={true}
						nestedItems={[
          <ListItem
            key={1}
            primaryText="Project 1"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={2}
            primaryText="Project 2"
            leftIcon={<ActionGrade />}
          />,
          <ListItem
            key={3}
            primaryText="Project 3"
            leftIcon={<ActionGrade />}
          />
        ]}
					/>
				</List>
				<Link style={leftMenuStyle.link} to="contact"> <MenuItem leftIcon={<CommunicationEmail />}
																																 onTouchTap={this._handleClose.bind(this)}>Contact </MenuItem></Link>
				<a style={leftMenuStyle.link} href="https://medium.com/@ozluy" target="_blank"> <MenuItem
					leftIcon={<ContentInbox />} onTouchTap={this._handleClose.bind(this)}>Blog </MenuItem></a>
			</Drawer>
		)
	}

	_handleClose() {
		if (!this.props.isLargeWindowMode) {
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