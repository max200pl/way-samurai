import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div>
        <NavLink to="/profile" activeClassName={s.activeLink}>
          Profile
        </NavLink>
      </div>

      <div>
        <NavLink to="/dialogs" activeClassName={s.activeLink}>
          Massages
        </NavLink>
      </div>

      <div>
        <a href="#e">sitting</a>
      </div>
    </nav>
  );
};

export default Navbar;
