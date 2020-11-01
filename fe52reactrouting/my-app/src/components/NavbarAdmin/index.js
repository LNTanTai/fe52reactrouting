import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavbarAdmin extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark justify-content-center">
        <ul className="navbar-nav">
          <a className="navbar-brand" href="#">
            Admin
          </a>
          <li className="nav-item">
            <NavLink
              activeclassname="active"
              className="nav-link"
              to="/dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              activeclassname="active"
              className="nav-link"
              to="/user"
            >
              User
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
