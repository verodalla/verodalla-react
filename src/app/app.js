import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './app.css';
import Nav from '../nav/nav';
import Footer from '../footer/footer';
import MainGallery from '../main_gallery/main_gallery';
import Page from '../page/page';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="layout">
          <Nav />
          <Route exact path="/" component={MainGallery} />
          <Route path="/:page" component={Page} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
