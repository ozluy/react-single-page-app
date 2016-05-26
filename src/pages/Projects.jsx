import React from 'react';
import BasePage from '../BasePage';
import {Card, CardActions, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton'
import axios from 'axios';
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'

import {List, ListItem}  from 'material-ui/List';

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

	componentDidMount() {
		this._timer = setInterval(() => this._getProjects(), 500000);
	}

	componentWillUnmount() {
		clearInterval(this._timer);
		console.log('projects unmounted!');
	}

	render() {

		return (
			<div>
				<span style={{fontSize:'24px', fontWeight:'bold'}}>Projects</span>
				<Divider />
				<List>
					{
						this.state.projectList.map((item) => {
							return (
								<ListItem
									innerDivStyle={{padding:0}}
									style={{cursor:'auto', margin:'0 0 15px 0'}} key={item.id}>
									<Card style={{padding:0}}>
										<CardTitle title={item.title} subtitle={item.type}/>
										<CardText>
											{
												item.techs.map((tech) => {
														return <FlatButton
														key={tech}
														label={tech}
														style={{margin:5}}

													/>
												})
											}
										</CardText>
										<CardActions>
											<RaisedButton
												secondary={true}
												label="View"
											/>
										</CardActions>
									</Card>
								</ListItem>
							)
						})
					}
				</List>

			</div>
		)
	}

	_getProjects() {
		let _projectsList = [];
		const _this = this;
		axios.get('./data/projects.json')
			.then(function (response) {
				console.log('projects fetched!');
				_this.setState({
					projectList: response.data.projects
				});
			})
			.catch(function (response) {
				console.log(response);
			});
	}

}

module.exports = Projects;