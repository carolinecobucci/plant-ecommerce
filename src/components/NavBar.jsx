
import styles from "./NavBar.module.css";
import {Link} from "react-router-dom";
import logo from '../assets/logo-icon.svg';
import {UserButton} from "@clerk/clerk-react"


const NavBar = () => {
    return (
    <nav className={styles.navbar}>
        <img className={styles.img}src={logo}></img>
      <ul className={styles.list} >
        <li className={styles.item}><Link to="/">Home</Link></li>
        <li className={styles.item}><Link to ='/register'>Register</Link></li>
        <li className={styles.item}><Link to ='/products'>Products</Link></li>
        <li className={styles.item}><Link to ='/aboutUs'>About Us</Link></li>
      </ul>
      <div className={styles.login}>
       < UserButton />
      </div>
    </nav>
 );
};

export default NavBar; 