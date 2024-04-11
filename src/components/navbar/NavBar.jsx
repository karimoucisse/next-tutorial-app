import React from 'react'
import NavList from './NavList'
import styles from "./navbar.module.css"

const NavBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>Logo</div>
      <NavList/>
    </div>
  )
}

export default NavBar