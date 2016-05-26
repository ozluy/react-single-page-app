import React from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar/Navbar.jsx';
import LeftMenu from './components/LeftMenu/LeftMenu.jsx';
import Footer from './components/Footer/Footer.jsx'
import CircularProgress from 'material-ui/CircularProgress';
import Dialog from 'material-ui/Dialog';
import {grey900, grey600, fullWhite, red900} from 'material-ui/styles/colors'

/**Material-UI events plugin */
import injectTapEventPlugin  from 'react-tap-event-plugin';
injectTapEventPlugin();

class App extends React.Component {
	constructor(props) {
		super();
		this.state = {
			isLeftMenuOpen: window.innerWidth > 767,
			largeWindowMode: window.innerWidth > 767
		};
	}
	componentWillMount(){

		window.addEventListener('resize', this._checkWindowWidth.bind(this));
	}

	render() {
		const appStyle = {
			appBodyShell: {
				marginLeft: '256px'
			},
			main: {
				padding: '15px',
				minHeight: '500px'
			}
		};
		return (
			<MuiThemeProvider
				muiTheme={getMuiTheme()}>
				<div>
					<LeftMenu
						isLargeWindowMode={this.state.largeWindowMode}
						changeOwnerState={this._toggleLeftMenu.bind(this)}
						isOpen={this.state.isLeftMenuOpen}
					/>
					<div style={this.state.largeWindowMode ? appStyle.appBodyShell : {}}>
						<Navbar
							isLargeWindowMode={this.state.largeWindowMode}
							toggleLeftMenu={this._toggleLeftMenu.bind(this)}
						/>
						<main style={appStyle.main}>
							{this.props.children}
						</main>
						<Footer />

					</div>



				</div>
			</MuiThemeProvider>);
	}
	_toggleLeftMenu() {
		this.setState({isLeftMenuOpen: !this.state.isLeftMenuOpen})
	};

	_checkWindowWidth(e) {
		const _this = this;
		if (window.innerWidth > 767) {
			_this.setState({
				largeWindowMode: true,
				isLeftMenuOpen: true
			});
		}
		else {
			_this.setState({
				largeWindowMode: false,
				isLeftMenuOpen: false
			});
		}
	}
}
module.exports = App;