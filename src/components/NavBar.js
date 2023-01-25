import React from "react";
import { Router, NavLink } from "react-router-dom";

function NavBar() {
  return(
    <div className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Navbar</a>
      <div >
        <Router>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
        </Router>
    </div>
    </div>
  ) 
}
/*<ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a class="nav-link" href="#">Home </a>
          </li>
          <li className="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        </ul>*/

export default NavBar;