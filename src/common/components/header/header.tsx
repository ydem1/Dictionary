import React from "react";
import { NavLink } from "react-router-dom";

import "./header.scss";

export const Header = () => {
  return (
    <header className="header">
      <h1 className="header__logo">Header</h1>

      <nav className="header__nav">
        <NavLink to="/">
          Add new word
        </NavLink>

        <NavLink to="/cart">
          Di
        </NavLink>

        <NavLink to="/product">
          Product
        </NavLink>
      </nav>
    </header>
  );
};
