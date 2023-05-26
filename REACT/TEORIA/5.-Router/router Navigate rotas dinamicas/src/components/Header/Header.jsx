import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  // el navlink tiene que ir como padre del button para hacer al button totalmente clickable y navegable
  // si meto dentro del buttton el navlink solo me navega cuando le doy al texto
  return (
    <header>
      <nav>
        <nav>
          <NavLink to="/">
            <button>Home</button>
          </NavLink>
          <NavLink to="/gallery">
            <button>Gallery</button>
          </NavLink>
          <NavLink to="/about">
            <button>About</button>
          </NavLink>
        </nav>
      </nav>
    </header>
  );
};

export default Header;
