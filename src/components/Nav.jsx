import React from "react";
import logo from "../assets/Logo.png";
import "./styles/nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav container">
      <NavLink to="/" className="logo">
        <img src={logo} alt="scissors logo" />
      </NavLink>
      <div className="menu">
        <ul>
          <li>
            <NavLink to="">My URLs</NavLink>
          </li>
          <li>
            <NavLink to="">Features</NavLink>
          </li>
          <li>
            <a href="#pricing">Pricing</a>
          </li>
          <li>
            <NavLink to="">Analytics</NavLink>
          </li>
          <li>
            <a href="#faq">FAQs</a>
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
