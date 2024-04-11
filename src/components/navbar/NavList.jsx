import Link from "next/link"
import styles from "./navbar.module.css"
const NavList = () => {

    const list = [
        {name: "Accueil", link: "/"},
        {name: "Contact", link: "/contact"},
        {name: "Blog", link: "/blog"},
        {name: "admin", link: "/admin"}
    ]
  return (
    <div className={styles.nav_list}>
        {list.map((element, index) => (
            <Link key={index} href= {element.link}>{element.name}</Link>
        ))}
    </div>
  )
}

export default NavList