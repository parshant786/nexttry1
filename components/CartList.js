import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useDispatch,useSelector } from 'react-redux'
import {incrementAmount,decrementAmount} from "./../slices/cartSlice"

export const CartList = ({ cartArr, setcartArr }) => {
  const cartList= useSelector((state)=>state.cart.cartArrary);
  const dispatch= useDispatch();
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let a = 0;
    for (let index = 0; index < cartList.length; index++) {
      a += cartList[index].price * cartList[index].amount;
    }
    setTotal(a);
  }, [cartList]);

  async function handleDecrement(id, e) {
    const response = await fetch(`http://localhost:4001/products/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json", body: JSON.stringify({ amount: e - 1 }) },
    });
  }

  async function handleIncrement(id, e) {
    const response = await fetch(`http://localhost:4001/products/${id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ amount: e + 1 }),
    });
  }
  return (
    <div>
      {cartList.map((item,index) => {
        return (
          <div key={item.id}>
            <Image src={item.imgUrl} height="100px" width="100px" />
            {item.name} {item.price}{" "}
            <button
              onClick={() => {
                console.log(">>>>", item?.id);
          dispatch(incrementAmount(index))   
              }}
            >
              +
            </button>{" "}
            {item.amount}
            <button
              onClick={() => {
                console.log(">>>>", item?.id);
                dispatch(decrementAmount(index))
              }}
            >
              -
            </button>
          </div>
        );
      })}
      <div>total ={total}</div>
    </div>
  );
};
