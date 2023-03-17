import React from "react";
import Logo from "../assets/img/Logo.svg";

const Nav = () => {
  const links = [
    {
      linkName: "Home",
      url: "/",
    },
    {
      linkName: "About",
      url: "/about",
    },
    {
      linkName: "Menu",
      url: "/menu",
    },
    {
      linkName: "Reservations",
      url: "/reservations",
    },
    {
      linkName: "Order Online",
      url: "/order-online",
    },
    {
      linkName: "Login",
      url: "/login",
    },
  ];

  const navLinks = links.map((link) => {
    return (
      <li key={link.url}>
        <a href={link.url}>{link.linkName}</a>
      </li>
    );
  });

  return (
    <div>
      <img src={Logo} alt="Logo for the restaurant" />

      <ul>{navLinks}</ul>
    </div>
  );
};

export default Nav;
