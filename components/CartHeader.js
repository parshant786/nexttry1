import React from "react";
import styles from "./../styles/CardHeader.module.css";
import Link from 'next/link';
import { useSelector } from "react-redux";

const CardHeader = ({ cartArr }) => {
    const cart= useSelector((state)=>state.cart.cartArrary);
  return (
    <>
      <div>CardHeader</div>
     
      <span className={styles.f} >
       
        <i className="fas fa-cart-plus"></i>
      </span>
       <Link  href="/cart" passHref> 
        <span className={styles.g}>{cart.length}</span>
        </Link>
    
      
    </>
  );
};
export default CardHeader;
