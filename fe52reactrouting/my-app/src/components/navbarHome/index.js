import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul class="navbar-nav">
          <a class="navbar-brand" href="#">
            Nav Bar
          </a>
          <li class="nav-item">
            <NavLink exact activeClassName="active" class="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink
              exact
              activeClassName="active"
              class="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink activeClassName="active" class="nav-link" to="/about/list">
              List Movie
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
