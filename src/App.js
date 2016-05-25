import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import ActionCode from 'material-ui/svg-icons/action/code';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Avatar from 'material-ui/Avatar';
import {indigo900, teal900, redA700} from 'material-ui/styles/colors'
import {Link} from 'react-router'


/**Material-UI events plugin */
import injectTapEventPlugin  from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
	constructor() {
		super();
		this.state = {open: false};
	}

	handleToggle() {
		this.setState({open: !this.state.open})
	};

	handleClose() {
		this.setState({open: false})
	};

	render() {

		const appStyle = {
			appBar:{
				backgroundColor:redA700
			},
			leftMenu: {
				textAlign: 'center',
				avatar: {
					margin: '5px',
					boxShadow: '0 4px 8px 2px #01012b'
				},
				name: {
					margin: '10px 0',
					color: indigo900
				},
				title: {
					color: teal900,
					fontWeight:400
				}

			}
		}
		return (
			<MuiThemeProvider
				muiTheme={getMuiTheme()}>
				<div>
					<AppBar
						style={appStyle.appBar}
						title={<span>React Single Page App</span>}
						iconElementLeft={<IconButton onTouchTap={this.handleToggle.bind(this)}><NavigationMenu /></IconButton>}
						iconElementRight={ <IconButton><ActionCode /></IconButton>
						}
					/>
					<Drawer
						docked={false}
						width={250}
						open={this.state.open}
						onRequestChange={(open) => this.setState({open})}
						style={appStyle.leftMenu}
					>
						<Avatar
							style={appStyle.leftMenu.avatar}
							src="./assets/img/starks.jpg"
							size={120}
						/>
						<h2 style={appStyle.leftMenu.name}>Name Surname</h2>
						<h3 style={appStyle.leftMenu.title}>Job Title</h3>
						<MenuItem onTouchTap={this.handleClose.bind(this)}>About</MenuItem>
						<MenuItem onTouchTap={this.handleClose.bind(this)}>Project</MenuItem>
						<MenuItem onTouchTap={this.handleClose.bind(this)}>Resume</MenuItem>
						<MenuItem onTouchTap={this.handleClose.bind(this)}>Contact</MenuItem>
						<MenuItem onTouchTap={this.handleClose.bind(this)}>Blog</MenuItem>
					</Drawer>
				</div>
			</MuiThemeProvider>);
	}
}
module.exports = App;