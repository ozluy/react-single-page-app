import React from 'react';
import BasePage from '../BasePage';
import axios from 'axios';

class Projects extends BasePage {
	constructor() {
		super();
		this.state = {
			projectList: []
		}
	}


	componentWillMount() {
		this._getProjects();
	}

	render() {

		return (
			<div>
				<h1>Projects</h1>
				<ul>
					{
						this.state.projectList.map((item) => {return (<li key={item.id}>{item.title}</li>)})
					}
				</ul>
			</div>
		)
	}
	_getProjects() {
		let _projectsList = [];
		axios.get('./data/projects.json')
			.then(function (response) {
				console.log(response.data.projects);
				this.setState({
					projectList: response.data.projects
				});
			})
			.catch(function (response) {
				console.log(response);
			});
	}

}

module.exports = Projects;