/**
 * Created by ozluy on 25/05/16.
 */
import React from 'react';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import App from './App.jsx';
import Index from './pages/Index.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';


class AppRouter extends React.Component{

	render(){
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Index}> </IndexRoute>
					<Route path="about" component={About}> </Route>
					<Route path="contact" component={Contact}> </Route>
					<Route path="projects" component={Projects}> </Route>
					<Route path="resume" component={Resume}> </Route>
				</Route>
			</Router>
		)
	}
}

module.exports = AppRouter;
