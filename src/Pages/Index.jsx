import React from 'react';
import BasePage from '../BasePage'
import Divider from 'material-ui/Divider';


class Index extends BasePage {
	render() {
		return (
		<div>
			<span style={{fontSize:'24px', fontWeight:'bold'}}>Projects</span>
			<Devider />
			The SvgIcon component takes an SVG path element as its child,
			and converts it to a React component which displays the path and
			allows the icon to be styled and respond to mouse events.
		</div>)
	}
}

module.exports = Index;