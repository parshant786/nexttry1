import React from 'react'
import styles from "./../styles/SignUp.module.css"
import axios from 'axios'
export const SignUp = () => {


 const handleClick=(e)=>{
  e.preventDefault();
  const registered ={
    name:"ram",
    email:"ramji@gmail.com"
  }
  axios.post("/api/users", registered).then((res) => {
    alert(res.data.email);
    console.log(res.data);
    
  });
 }
  return (

    
    <div className={styles.container}>
        <div className={styles.fromContainer}>
        <h1>SignUp</h1>
        <form   onSubmit={handleClick}>
        <div className={styles.inputDiv}>
            <input type="text"  placeholder='first name'/>
            <input  type='text'  placeholder='last name'/>
        </div>
        <div className={styles.inputDiv} ><input className={styles.InputFL} type='email' placeholder='email'/></div>
        <div className={styles.inputDiv} ><input className={styles.InputFL} placeholder="password" type="password"/></div>
      
        <div className={styles.inputDiv} ><input className={styles.InputFL} placeholder='confrom password' type="password"/></div>
        <div className={styles.inputDiv} > <input type="submit"  className={styles.InputFL}  /></div>
        </form>
    </div></div>
  )
}
