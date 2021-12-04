import { NavLink } from "react-router-dom";
import React from "react";
import Home from "../assets/house.png"
function Header() {
  return (
    <nav>
      <NavLink exact to="/" activeClassName="currentNav">
        <img src={Home} width='80px' alt='homepage icon'/>
      </NavLink>
    </nav>
  );
}

export default Header;
