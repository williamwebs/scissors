import React from "react";
import "./styles/sidenav.scss";
import logo from "../assets/logo-black.png";
import { NavLink } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const SideNav = () => {
  return (
    <section id="sidenav">
      <div className="logo">
        <img src={logo} alt="scissors logo" />
      </div>
      <nav className="menus">
        <ul>
          <li className="menu__list">
            <NavLink to="/dashboard" className="menu">
              Create a link
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="/dashboard/my-urls" className="menu">
              My URLs
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="/dashboard/analytics" className="menu">
              Analytics
            </NavLink>
          </li>
          <li className="menu__list">
            <NavLink to="/dashboard/qr-code" className="menu">
              QR Code
            </NavLink>
          </li>
        </ul>
      </nav>
      <article className="bottom">
        <button className="cta" onClick={() => signOut(auth)}>
          <GoSignOut />
        </button>
      </article>
    </section>
  );
};

export default SideNav;
