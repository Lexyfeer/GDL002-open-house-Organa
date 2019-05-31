import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo.png'


const Navbar = () => (

<nav className="navbar navbar-expand-lg">
<img src={Logo} className="logoLink" width="150" height="50" class="d-inline-block align-top" alt="logo" />
  <button className="navbar-light navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
    <ul className="navbar-nav">
          <li><NavLink className="navMenuLink" to="./Students"> Estudiante </NavLink></li>
          <li><NavLink className="navMenuLink" to="./Admin"> Administración </NavLink></li>
      </ul>
    </div>
  </div>
</nav>
);

export default Navbar;