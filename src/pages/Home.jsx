import React from "react";
import Product from "../components/Header/Products/Product";
import { products } from "../data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {products.map((product) => {
        const { id, name, price, image, description } = product;
        return (
          <Link key={id} to={`/detail/${id}`}>
            <Product
              name={name}
              price={price}
              image={image}
              description={description}
            />
          </Link>
        );
      })}
    </>
  );
};

export default Home;
