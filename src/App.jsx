import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar.jsx';
import LeftMenu from './components/LeftMenu/LeftMenu.jsx';

/**Material-UI events plugin */
import injectTapEventPlugin  from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			isLeftMenuOpen: true,
			largeWindowMode: true
		};
	}

	_toggleLeftMenu() {
		this.setState({isLeftMenuOpen: !this.state.isLeftMenuOpen})
	};

	render() {
			const appStyle={
				appBodyShell:{
					marginLeft:'256px'
				},
				main:{
					padding:'50px 50px',
				}
			}
		return (
			<MuiThemeProvider
				muiTheme={getMuiTheme()}>
				<div>
					<LeftMenu isLargeWindowMode={this.state.largeWindowMode} changeOwnerState={this._toggleLeftMenu.bind(this)} isOpen={this.state.isLeftMenuOpen} />
					<div style={this.state.largeWindowMode ? appStyle.appBodyShell : {}}>
						<Navbar isLargeWindowMode={this.state.largeWindowMode} toggleLeftMenu={this._toggleLeftMenu.bind(this)} />
						<main style={appStyle.main} >
								{this.props.children}
						</main>
					</div>
				</div>
			</MuiThemeProvider>);
	}
}
module.exports = App;