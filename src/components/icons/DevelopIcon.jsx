import React from 'react';

class DevelopIcon extends React.Component {
	render() {
		return (
			<span 		dangerouslySetInnerHTML={{__html: `<svg width=${this.props.width} height=${this.props.height}  enable-background="new 0 0 512 512"  version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g><g><path d="M361.9,401.4c-2.8,0-5.5-1.1-7.6-3.2c-4-4.2-3.9-10.9,0.3-14.9l139.6-134.9c4.2-4,10.9-3.9,14.9,0.3    c4,4.2,3.9,10.9-0.3,14.9L369.2,398.5C367.1,400.4,364.5,401.4,361.9,401.4z" fill="${this.props.color}"/><path d="M501.5,266.5c-2.6,0-5.3-1-7.3-3L354.5,128.7c-4.2-4-4.3-10.7-0.3-14.9c4-4.2,10.7-4.3,14.9-0.3    l139.6,134.9c4.2,4,4.3,10.7,0.3,14.9C507,265.5,504.2,266.5,501.5,266.5z" fill="${this.props.color}"/></g><g><path d="M150.1,401.4c-2.6,0-5.3-1-7.3-3L3.2,263.6c-4.2-4-4.3-10.7-0.3-14.9c4-4.2,10.7-4.3,14.9-0.3l139.6,134.9    c4.2,4,4.3,10.7,0.3,14.9C155.6,400.4,152.9,401.4,150.1,401.4z" fill="${this.props.color}"/><path d="M10.5,266.5c-2.8,0-5.5-1.1-7.6-3.2c-4-4.2-3.9-10.9,0.3-14.9l139.6-134.9c4.2-4,10.9-3.9,14.9,0.3    c4,4.2,3.9,10.9-0.3,14.9L17.9,263.6C15.8,265.6,13.2,266.5,10.5,266.5z" fill="${this.props.color}"/></g><path d="M205.8,446.1c-0.9,0-1.9-0.1-2.8-0.4c-5.6-1.6-8.9-7.4-7.3-13L296,73.6c1.6-5.6,7.4-8.9,13-7.3   c5.6,1.6,8.9,7.4,7.3,13L216,438.4C214.7,443.1,210.4,446.1,205.8,446.1z" fill="${this.props.color}"/></g></svg> `}} />
				)
	}
}
DevelopIcon.props ={
	color:React.PropTypes.string.isRequired,
	height:React.PropTypes.number.isRequired,
	width:React.PropTypes.number.isRequired

};
module.exports = DevelopIcon;
