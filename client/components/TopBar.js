import React, { Component } from 'react';
import '../css/TopBar.css';
import { BrowserRouter as Router, Route, Link, NavLink,Switch } from "react-router-dom";
import NodeD from './NodeD';
import Home from './Home';


class TopBar extends Component {
  render() {
    return (
        <nav id="top-nav">
          <div class="tn-content">
            <ul class="tn-list">
              <li class="top-logo tn-item">
                <a class="tn-link" href="/">
                  <div class="tn-outline">
                  <img class="tn-logo" src={require('../assets/blue.png')}/>
                  </div>
                </a>
              </li>
              <li class="tn-item margR">
                <div class="tn-position">
                  <NavLink to="/" activeClassName="">HOME</NavLink>
                </div>
              </li>
              <li class="tn-item margR">
                <div class="tn-position">
                <NavLink to="/node">NODE ADMIN</NavLink>
                </div>
              </li>
              <li class='tn-item margR'>
                <div class='tn-position'>
                  <NavLink to="/noWhere">NoWhere</NavLink>
                </div>
              </li>
            </ul>
          </div>

        </nav>

    )
  }
}
// 0197D2
module.exports = TopBar;
