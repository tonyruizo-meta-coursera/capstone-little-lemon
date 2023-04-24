import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img-logos/Logo.svg";
import "./nav.css";


const Nav = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="logo-nav">
          <img src={Logo} alt="Logo for the restaurant" />
        </div>

        <div className="navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/#about" onClick={handleClick('about')}>About</Link>
            </li>
            <li>
              <Link to="/#menu" onClick={handleClick('menu')}>Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/menu-page">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
