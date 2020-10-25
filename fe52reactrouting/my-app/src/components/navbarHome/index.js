import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";

export default class index extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul className="navbar-nav">
          <a className="navbar-brand" href="#">
            Nav Bar
          </a>
          <li className="nav-item">
            <NavLink exact activeclassname="active" className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeclassname="active"
              className="nav-link"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              activeclassname="active"
              className="nav-link"
              to="/about/list"
            >
              List Movie
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
