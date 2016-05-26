import React from 'react';

import DevelopIcon from '../icons/DevelopIcon.jsx';
import HeartIcon from '../icons/HeartIcon.jsx';
import {grey900, grey600, fullWhite, red900} from 'material-ui/styles/colors'

class Footer extends React.Component {

	render() {
		const footer = {
			backgroundColor: grey900,
			padding: '50px 15px',
			textAlign: 'center',
			color: grey600,
			developerInfo: {
				height: '24px',
				lineHeight: '24px',
				user:{
					color: fullWhite,
					textDecoration:'none'
				}
			}
		};

		return (
			<footer style={footer}>
				<div style={footer.developerInfo}>
					<DevelopIcon color={fullWhite} width={15} height={15} />
					{' by '}<a style={footer.developerInfo.user} href="http://github.com/ozluy" target="_blank">ozluy</a>{' with '}
					<HeartIcon color={red900} width={15} height={15} />
				</div>
			</footer>
		)
	}
}

module.exports = Footer;
