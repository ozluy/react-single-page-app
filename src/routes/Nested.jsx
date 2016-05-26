import React from 'react';
import BasePage from '../BasePage';
import Divider from 'material-ui/Divider';

class Nested extends BasePage {
	render() {
		return (
			<div>
				<span style={{fontSize:'24px', fontWeight:'bold'}}>Nested Parent</span>
				<Divider />
				{this.props.children}
			</div>)
	}
}
Nested.props = {
	children:React.PropTypes.node
}

module.exports = Nested;