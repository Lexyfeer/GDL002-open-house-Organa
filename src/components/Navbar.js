import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../imagenes/logoL.jpeg';
import Date from './Date';

const Navbar = () => (
    <nav>
      <img src={Logo} className="logoLink" alt="logo" />
      <ul className="navMenu">
          <li><NavLink className="navMenuLink" to="./Students"> Estudiante </NavLink></li>
          <li><NavLink className="navMenuLink" to="./Admin"> Admin </NavLink></li>
      </ul>
      <div>
        <Date/>
      </div>
    </nav>

);

export default Navbar;