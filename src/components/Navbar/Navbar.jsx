import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionCode from 'material-ui/svg-icons/action/code';
import {deepPurple900, fullWhite} from 'material-ui/styles/colors';
import {Link} from 'react-router';


class Navbar extends React.Component {
	render() {
		const appBarStyle = {
			backgroundColor: deepPurple900,
			brand:{
				color:fullWhite,
				textDecoration:'none',
				titleStyle:{
					fontWeight:300
				}
			},
			gitHubLink:{
				textDecoration:'none'
			}
		};
		return (
			<AppBar
				style={appBarStyle}
				titleStyle={appBarStyle.brand.titleStyle}
				title={<Link style={appBarStyle.brand} to="/"><span>React Single Page App</span></Link> }
				showMenuIconButton={!this.props.isLargeWindowMode}
				iconElementLeft={<IconButton onTouchTap={this._handleToggle.bind(this)}><NavigationMenu /></IconButton>}
				iconElementRight={ <a style={appBarStyle.gitHubLink} href="https://github.com/ozluy/react-single-page-app" target="_blank"><IconButton><ActionCode color={fullWhite} /></IconButton> </a>}
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