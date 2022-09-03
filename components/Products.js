import React from "react";
import { Card } from "./Card.js";
import styles from "./../styles/Plcontainer.module.css";
import { useGetProductQuery } from "./../services/Cart";
export const Products = ({ setcartArr, cartArr }) => {
  const { isLoading, isSuccess, data: productList } = useGetProductQuery();

  if (isLoading) {
    return <div>loading</div>;
  }
  if (isSuccess) {
    return (
      <div className={styles.PLContainer}>
        {productList.map((product) => {
          return <Card key={product.id} name={product.name} url={product.imgUrl} price={product.price} setcartArr={setcartArr} product={product} cartArr={cartArr} />;
        })}
      </div>
    );
  }
};
