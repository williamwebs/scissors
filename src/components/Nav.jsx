import React from "react";
import logo from "../assets/Logo.png";
import "./styles/nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav container">
      <div className="logo">
        <img src={logo} alt="scissors logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="">My URLs</NavLink>
          </li>
          <li>
            <NavLink to="">Features</NavLink>
          </li>
          <li>
            <NavLink to="">Pricing</NavLink>
          </li>
          <li>
            <NavLink to="">Analytics</NavLink>
          </li>
          <li>
            <NavLink to="">FAQs</NavLink>
          </li>
        </ul>
      </div>
      <div className="cta">
        <NavLink to="/login" className="login__cta">
          Login
        </NavLink>
        <a href="#shortenURL" className="try__for__free__cta">
          Try for free
        </a>
      </div>
    </nav>
  );
};

export default Nav;
