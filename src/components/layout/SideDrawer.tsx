import React from "react";
import { Link } from "react-router-dom";
import { SideDrawerInterface } from "../models/sideDrawerInterfaces";

import classes from "./styles/sideDrawer.module.css";
const SideDrawer: React.FC<Partial<SideDrawerInterface>> = ({
  menuIsOpen,
  toggleMenuBar,
}) => {
  return (
    <aside
      className={
        !menuIsOpen
          ? classes.sideDrawer
          : `${classes.sideDrawer}  ${classes.active}`
      }
    >
      <nav>
        <ul>
          <li onClick={toggleMenuBar}>
            <Link to="/" className={classes.home_anchor}>
              Home
            </Link>
          </li>
          <li onClick={toggleMenuBar}>
            <Link to="/cart" className={classes.cart_header}>
              Cart
              <span>12</span>
            </Link>
          </li>
          <li onClick={toggleMenuBar}>
            <Link to="/profile">Profile</Link>
          </li>

          <li onClick={toggleMenuBar}>
            <Link to="/users/signup">Signup</Link>
          </li>

          <li onClick={toggleMenuBar}>
            <Link to="/users/login">Login</Link>
          </li>
          <li onClick={toggleMenuBar}>
            <Link to="/users/logout">Logout</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SideDrawer;
