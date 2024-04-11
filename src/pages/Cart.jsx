import { products } from "../data";
import useCart from "../hooks/useCart";
import Product from "../components/Header/Products/Product";

const Cart = () => {
  const { get } = useCart();
  const products = get();

  return (
    <ul>
      {products.map((product) => {
        const { id, name, price, image, description } = product;
        return (
          <li key={id}>
            <Product
              name={name}
              price={price}
              image={image}
              description={description}
              showRemove={true}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Cart;
