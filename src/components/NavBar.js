import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand">NavBar</a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to='/' style={isActive => ({
              color: isActive ? "gold" : "white"
              })}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/about' style={isActive => ({
              color: isActive ? "gold" : "white"
              })}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  ) 
}
export default NavBar;