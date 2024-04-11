import { createContext, useState } from "react";

export const CartProviderContext = createContext({
  get: () => [],
  add: () => {},
  remove: () => {},
  count: 0,
});

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const get = () => {
    return cart;
  };

  const add = (product) => {
    setCart((currentCart) => {
      return [...currentCart, product];
    });
  };

  // TODO: fix the all same id products removed issue later
  const remove = (product) => {
    setCart((currentCart) => {
      return [...currentCart.filter((p) => p.id !== product.id)];
    });
  };

  const value = {
    get,
    add,
    remove,
  };

  return (
    <CartProviderContext.Provider value={value}>
      {children}
    </CartProviderContext.Provider>
  );
};

export default CartProvider;
