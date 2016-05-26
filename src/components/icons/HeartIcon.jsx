import React from 'react';

class HeartIcon extends React.Component {
	render() {

		return (
			<span				dangerouslySetInnerHTML={{__html: ` <svg width=${this.props.width} height=${this.props.height} enable-background="new 0 0 512 512" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M256,489.1c-6.7,0-13.2-2.7-17.8-7.4L43.2,284.9c0,0-0.1-0.1-0.1-0.1C15.3,255.6,0,217.5,0,177.5  c0-10.2,1-20.5,3-30.6c0-0.2,0.1-0.4,0.1-0.6C17.8,74.8,81.2,22.9,154,22.9c38.1,0,73.9,13.7,102,38.7c28-25,63.9-38.7,102-38.7  c84.9,0,154,69.4,154,154.6c0,42.4-16.7,81.8-47,111.2L273.8,481.7C269.2,486.4,262.7,489.1,256,489.1z M58.3,270.1l194.9,196.8  c0.8,0.8,1.8,1.2,2.9,1.2s2.1-0.4,2.8-1.2l191.2-193.2c0.1-0.1,0.1-0.1,0.2-0.2c26.2-25.3,40.7-59.5,40.7-96.1  c0-73.6-59.6-133.5-132.9-133.5c-35.9,0-69.4,14-94.5,39.5c-2,2-4.7,3.2-7.5,3.2c-2.8,0-5.5-1.1-7.5-3.2  c-25-25.5-58.5-39.5-94.5-39.5c-62.8,0-117.5,44.8-130.2,106.4c0,0.1,0,0.2-0.1,0.3c-1.8,8.8-2.7,17.8-2.7,26.8  C21.1,212,34.3,244.9,58.3,270.1z" fill="${this.props.color}"/></svg>`}}/>
				)
	}
}
HeartIcon.props ={
	color:React.PropTypes.string.isRequired,
	height:React.PropTypes.number.isRequired,
	width:React.PropTypes.number.isRequired

};
module.exports = HeartIcon;
