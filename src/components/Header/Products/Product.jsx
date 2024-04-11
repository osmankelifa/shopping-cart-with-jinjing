import React from "react";
import classes from "./Product.module.css";

import useCart from "../../../hooks/useCart";

const Product = (shit) => {
  const {
    name,
    price,
    image,
    description,
    showDetail = false,
    showRemove = false,
  } = shit;

  const { add, remove } = useCart();

  const clickHandler = (event) => {
    event.preventDefault();
    add(shit);
  };

  const RemoveHandler = (event) => {
    event.preventDefault();
    remove(shit);
  };

  return (
    <div>
      <img src={image} alt={name} />
      <p>{price}</p>
      {showDetail && <p>{description}</p>}
      <button onClick={clickHandler}>Add to Basket</button>
      {showRemove && (
        <button onClick={RemoveHandler}>Remove from Basket</button>
      )}
    </div>
  );
};

export default Product;
