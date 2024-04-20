"use client"
import Link from "next/link"
import styles from "./navbar.module.css"
import { usePathname } from "next/navigation"

const NavList = ({session}) => {
  const pathName = usePathname();

  const list = [
      {name: "Accueil", link: "/"},
      {name: "Contact", link: "/contact"},
      {name: "Blog", link: "/blog"},
      {name: "Login", link: "/login"},
      {name: "Admin", link: "/admin"}
  ]
  return (
    <div className={styles.nav_list}>
        {list.map((element, index) => (
           (
            !["Admin", "Login"].includes(element.name) 
            || (element.name === "Admin" && session?.user?.admin) 
            || (element.name === "Login" && !session)
          ) && (
            <Link key={index} href= {element.link} className={`${styles.element} ${element.link == pathName && styles.active}`}>
              {element.name}
            </Link>
          )
        ))}
    </div>
  )
}

export default NavList