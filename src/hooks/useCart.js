import { useContext } from "react";
import { CartProviderContext } from "../providers/CartProvider";

const useCart = () => {
  return useContext(CartProviderContext);
};

export default useCart;
