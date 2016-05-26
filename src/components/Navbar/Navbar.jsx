import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionCode from 'material-ui/svg-icons/action/code';
import {deepPurple900, fullWhite} from 'material-ui/styles/colors';
import GitHubIcon from '../icons/GitHubIcon.jsx'

class Navbar extends React.Component {
	render() {
		const appBarStyle = {
			backgroundColor: deepPurple900,
			gitHubLink:{
				textDecoration:'none'
			}
		};
		return (
			<AppBar
				style={appBarStyle}
				showMenuIconButton={!this.props.isLargeWindowMode}
				iconElementLeft={<IconButton onTouchTap={this._handleToggle.bind(this)}><NavigationMenu /></IconButton>}
				iconElementRight={ <a style={appBarStyle.gitHubLink} href="https://github.com/ozluy/react-single-page-app" target="_blank"><IconButton><GitHubIcon color={fullWhite} width={30} height={30} /></IconButton> </a>}
			/>
		)
	}

	_handleToggle() {
		this.props.toggleLeftMenu();
	}

}

Navbar.props = {
	toggleLeftMenu: React.PropTypes.func,
	isLargeWindowMode: React.PropTypes.bool
}

module.exports = Navbar;