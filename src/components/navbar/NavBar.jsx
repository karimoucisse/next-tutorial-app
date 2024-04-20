import React from 'react'
import NavList from './NavList'
import styles from "./navbar.module.css"
import { auth, signOut } from '@/lib/auth'

const NavBar = async () => {
  const session = await auth();

  const handleLogout = async () => {
    "use server"
    await signOut()
  }
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>Logo</div>
      <NavList session= {session}/>
      {session &&
        <form action={handleLogout}>
          <button>Log out</button>
        </form>
      }
    </div>
  )
}

export default NavBar