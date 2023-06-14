
import styles from "./NavBar.module.css";

import logo from '../assets/logo-icon.svg'

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
        {/* Aqui entra a parte do clerk*/}
        <p>Login</p>
      </div>
    </nav>
 );
};

export default NavBar; 