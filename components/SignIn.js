import React from "react";
import TextField from "@mui/material/TextField";
import styles from "./../styles/SignIn.module.css";
import Button from "@mui/material/Button";
export const SignIn = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signinFrom}>
          <h1>sign in</h1>
          <TextField required id="outlined-required" label="FIRST NAME" placeholder="EXAMPLE. RAM" fullWidth sx={{ mt: 3, mb: 2 }} />
          <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
  
      </div>
    </div>
  );
};
