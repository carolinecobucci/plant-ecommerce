
import styles from "./NavBar.module.css";

import logo from '../assets/logo-icon.svg'

const NavBar = () => {
    return (
    <nav className={styles.navbar}>
        <img src={logo}></img>
      <ul className={styles.list} >
        <li className={styles.item}><a>Home</a></li>
        <li className={styles.item}><a>Register</a></li>
        <li className={styles.item}><a>Products</a></li>
        <li className={styles.item}><a>About Us</a></li>
      </ul>
      <div className={styles.login}>
        <p>Login</p>
      </div>
    </nav>
 );
};

export default NavBar; 