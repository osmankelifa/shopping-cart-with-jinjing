import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Product from "./components/Header/Products/Product";
import { products } from "./data";
import { Link } from "react-router-dom";

const App = () => {
  const [shits, setShits] = useState([]);

  const addHandler = (shit) => {
    console.log(`${JSON.stringify(shit)} in the toilet`);
    const newShits = [...shits, shit];
    setShits(newShits);
  };

  return (
    <>
      {products.map((product) => {
        const { id, name, price, image, description } = product;
        return (
          <Link key={id} to={`/detail/${id}`}>
            <Product
              namee={name}
              pricee={price}
              imagee={image}
              descriptionn={description}
              add={addHandler}
            />
          </Link>
        );
      })}
    </>
  );
};

export default App;
