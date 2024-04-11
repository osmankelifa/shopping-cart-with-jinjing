import React from "react";
import classes from "./Header.module.css";

const Header = ({ products = [] }) => {
  return (
    <header className={classes.header}>
      <a className={classes.site__name} href="/">
        Chopping Kart
      </a>
      <div>Count({products.length})</div>
    </header>
  );
};

export default Header;
