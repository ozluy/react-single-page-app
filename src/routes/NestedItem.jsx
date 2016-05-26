import React from 'react';
import BasePage from '../BasePage'

class NestedItem extends BasePage {
	render() {

		const queryID = this.props.location.query;

		let rows = [];
		for (let index = 0; index < 50; index++) {
			rows.push(<p key={index}>I am a Nested Item {queryID.id}</p>);
		}

		return (
			<div>
				<h3> Item {queryID.id}</h3>
				{
					rows
				}
			</div>
		)
	}
}

module.exports = NestedItem;