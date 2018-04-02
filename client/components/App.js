import React, { Component } from 'react';
import '../css/App.css';
import TopBar from './TopBar';
import {IndexRoute, browserHistory} from 'react-router';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Home = require('./Home')
var NodeD = require('./NodeD')



class App extends React.Component {
  render() {

    return (
      <Router history={browserHistory}>
        <div>
          <TopBar />
          <Switch>
            <Route path='/node' component={NodeD} />
            <Route exact path='/' component={Home} />
            <Route render={function () {
                return <div class="container"><p>Not Found</p></div>
              }} />
            </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
