
import styles from "./NavBar.module.css";

import logo from '../assets/logo-icon.svg';
import {UserButton} from "@clerk/clerk-react"

const NavBar = () => {
    return (
    <nav className={styles.navbar}>
        <img className={styles.img}src={logo}></img>
      <ul className={styles.list} >
        <li className={styles.item}><a href="#">Home</a></li>
        <li className={styles.item}><a>Register</a></li>
        <li className={styles.item}><a>Products</a></li>
        <li className={styles.item}><a>About Us</a></li>
      </ul>
      <div className={styles.login}>
       < UserButton />
      </div>
    </nav>
 );
};

export default NavBar; 