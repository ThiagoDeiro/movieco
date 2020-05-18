import React from "react";

import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = (props) => (
  <header className="header">
    <Link to="/" className="logo">
      LOGO
    </Link>
    {/* <Input /> */}
    <input className="menu-btn" type="checkbox" id="menu-btn" />
    <label className="menu-icon" htmlFor="menu-btn">
      <span className="navicon"></span>
    </label>
    <ul className="menu">
      <li className="menu-list">
        <Link className="menu-list__link" to="/">
          Home
        </Link>
      </li>
      <li className="menu-list">
        <Link className="menu-list__link" to="/tv">
          TV
        </Link>
      </li>
      <li className="menu-list">
        <Link className="menu-list__link" to="/">
          Watchlist
        </Link>
      </li>
    </ul>
  </header>
);

export default Navigation;
