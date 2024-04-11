import { useParams } from "react-router-dom";
import { getProduct } from "../data";
import Product from "../components/Header/Products/Product";

const Detail = () => {
  const { id } = useParams();
  const product = getProduct(id);
  const { name, price, image, description } = product;
  return (
    <Product
      key={id}
      name={name}
      price={price}
      image={image}
      description={description}
      showDetail={true}
    />
  );
};

export default Detail;
