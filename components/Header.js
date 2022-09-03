import React from 'react'
import styles from './../styles/Header.module.css'
import Link from 'next/link'
export const Header = () => {
  return (
    <div className={styles.navContainer}>
     <div className={styles.layoutHeader}>header</div>
       <ul className={styles.headerUl}>
     
      <li className={styles.headerLi}>
        <Link href="/signin">
          <a>SignIn</a>
        </Link>
      </li>
      <li className={styles.headerLi}>
        <Link href="/products">
          <a>products</a>
        </Link>
      </li>
      
      <li className={styles.headerLi}>
        <Link href="/">
          <a>home</a>
        </Link>
      
      </li>
     </ul>
  </div>
  )
}
