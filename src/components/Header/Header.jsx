import React from "react";
import classes from "./Header.module.css";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";

const Header = () => {
  const { get } = useCart();
  const products = get();
  return (
    <header className={classes.header}>
      <a className={classes.site__name} href="/">
        Chopping Kart
      </a>
      <div>
        <Link to={"/cart"}>Count({products.length})</Link>
      </div>
    </header>
  );
};

export default Header;
