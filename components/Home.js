import Image from 'next/image'
import React from 'react'
import styles from "./../styles/Home.module.css"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';

import IconButton from '@mui/material/IconButton';

import SearchIcon from '@mui/icons-material/Search';

export const Home = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftContainer}>
            <img src="/logo.jpeg" style={{width:"25%"}}/>
            <h1 style={{height:"40%"}}>fresh and heathy food</h1>
            <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
    >
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
 
      
    </Paper>
        </div>
        <div className={styles.rightContainer}><img  src="/foodImg.jpeg" width="100%" height="100%" layout="responsive" /></div>
    </div>
  )
}
