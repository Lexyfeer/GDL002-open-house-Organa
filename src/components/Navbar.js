import React from 'react';
import Logo from '../imagenes/logoL.jpeg';

const Navbar = () => (
    <nav>
      <img src={Logo} className="logoLink" alt="logo" />
      <ul className="navMenu">
          <li><a className="navMenuLink" href="#"> Alumna </a></li>
          <li><a className="navMenuLink" href="#"> Admin </a></li>
      </ul>
      <div>
        <h4> Fecha </h4>
      </div>
    </nav>

);

export default Navbar;