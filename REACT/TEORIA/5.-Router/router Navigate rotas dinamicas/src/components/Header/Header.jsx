import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <button>
          <NavLink to="/">Home</NavLink>
        </button>
        <button>
          <NavLink to="/gallery">Gallery</NavLink>
        </button>
        <button>
          <NavLink to="/about">About</NavLink>
        </button>
      </nav>
    </header>
  );
};

export default Header;
