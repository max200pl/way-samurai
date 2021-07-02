import React from "react";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a href="#s">Profile</a>
      </div>

      <div>
        <a href="#d">Massages</a>
      </div>

      <div>
        <a href="#e">sitting</a>
      </div>
    </nav>
  );
};

export default Navbar;
