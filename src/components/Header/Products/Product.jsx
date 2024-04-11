import React from "react";
import classes from "./Product.module.css";

const Product = (shit) => {
  const { namee, pricee, imagee, descriptionn, add, showDetail = false } = shit;

  const clickHandler = (event) => {
    event.preventDefault();
    add(shit);
  };

  return (
    <div>
      <img src={imagee} alt={namee} />
      <p>{pricee}</p>
      {showDetail && <p>{descriptionn}</p>}
      <button onClick={clickHandler}>Add to Basket</button>
    </div>
  );
};

export default Product;
