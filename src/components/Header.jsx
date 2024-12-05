import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/Header.css";

const Header = () => {
  return (
    <header className="global-header">
      <nav className="nav-bar">
        <NavLink
          to="/"
          exact
          className="nav-link"
          activeClassName="active-link"
        >
          Home
        </NavLink>
        <NavLink
          to="/projects"
          className="nav-link"
          activeClassName="active-link"
        >
          Projects
        </NavLink>
        <NavLink to="/hobby" className="nav-link" activeClassName="active-link">
          Hobby
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
