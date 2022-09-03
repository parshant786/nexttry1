import React from 'react'
import Image from 'next/image'
import styles from "./../styles/Card.module.css"
import { incrementProduct} from './../slices/cartSlice'
import { useDispatch } from 'react-redux'
export const Card = ({url ,name,price,setcartArr,product,cartArr}) => {
   const dispatch= useDispatch();
    const handleClick=()=>{
    
    const check =(e)=>e.id === product.id
       const value = cartArr.findIndex(check)
       if(value === -1){
        setcartArr((pre)=>{
            return [...pre,product]
        })
       }
    }
  return (
    <div className={styles.container}>
        <div className=''><Image  src={url} width="150px" height='150px' /></div>
        <div className=''>{name}</div>
        <div className={styles.price}>{price}</div>
         <div className={styles.btn}>
            <button  onClick={()=>{ dispatch(incrementProduct(product))}}>buy now</button>
            </div>
    </div>
  )
}
