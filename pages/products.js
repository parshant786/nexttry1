import { Products } from "../components/Products";
import CartHeader from "../components/CartHeader";

export default function ProductPage({ productList, cartArr, setcartArr }) {
  return <Products productList={productList} cartArr={cartArr} setcartArr={setcartArr} />;
}

ProductPage.getLayout = function (page, { productList, cartArr, setcartArr }) {
  return (
    <>
      {JSON.stringify(cartArr)}
      <CartHeader  cartArr={cartArr} />
      {page}
    </>
  );
};

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:4001/products");
  const data = await response.json();
  return {
    props: {
      productList: data,
    },
  };
};
