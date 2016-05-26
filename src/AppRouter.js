/**
 * Created by ozluy on 25/05/16.
 */
import React from 'react';
import {Router, Route, hashHistory, browserHistory, IndexRoute} from 'react-router';
import App from './App.jsx';
import Index from './pages/Index.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import Nested from './pages/Nested.jsx';
import NestedItem from './pages/NestedItem.jsx';


class AppRouter extends React.Component {

	render() {
		return (
			<Router history={hashHistory}>
				<Route path="/" component={App}>
					<IndexRoute component={Index}> </IndexRoute>
					<Route path="about" component={About}> </Route>
					<Route path="contact" component={Contact}> </Route>
					<Route path="projects" component={Projects}> </Route>
					<Route path="nested" component={Nested}>
						<Route path="nested-item(:nestedID)" component={NestedItem}> </Route>
					</Route>
				</Route>
			</Router>
		)
	}
}

module.exports = AppRouter;
