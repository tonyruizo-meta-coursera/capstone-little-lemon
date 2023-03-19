import React from "react";
import { Link, } from "react-router-dom";
import Logo from "../../assets/img/Logo.svg";
import "./nav.css";

const Nav = () => {
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
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#menu">Menu</Link>
            </li>
            <li>
              <Link to="/#reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/#order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/#login">Login</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes> */}
    </nav>
  );
};

export default Nav;
