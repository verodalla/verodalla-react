import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.css';
import Nav from '../nav/nav';
import MainGallery from '../main_gallery/main_gallery';
import Page from '../page/page';

const component = () => {
	return <div>FUN!!!</div>
}
class App extends Component {
	render() {
		return (
				<Router>
					<div>
						<Nav />
						<Route exact path="/" component={MainGallery} />
						<Route path="/:page" component={Page} />
					</div>
				</Router>

		);
	}
}

export default App;
