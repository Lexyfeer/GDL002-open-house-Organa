import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imagenes/logoL.jpeg';

const Navbar = () => (
    <nav>
      <img src={Logo} className="logoLink" alt="logo" />
      <ul className="navMenu">
          <li><NavLink className="navMenuLink" to="./Students"> Alumna </NavLink></li>
          <li><NavLink className="navMenuLink" to="./Admin"> Admin </NavLink></li>
      </ul>
      <div>
        <h4> Fecha </h4>
      </div>
    </nav>

);

export default Navbar;