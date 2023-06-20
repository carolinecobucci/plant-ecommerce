import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2-icon.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.blockContact}>
        <div className={styles.contact}>
          <h2>Stay Fresh</h2>
          <p>compassinhos@gmail.com</p>
          <p>+55 41 99999-9999</p>
        </div>
        <nav className={styles.links}>
          <div className={styles.linksBlock}>
            <ul className={styles.list}>
              <li className={styles.itemLinks}>Links</li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li className={styles.item}>
                <Link to="/products">Products</Link>
              </li>
              <li className={styles.item}>
                <Link to="#">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className={styles.linksCommunity}>
            <ul className={styles.list}>
              <li className={styles.itemCommunity}>Community</li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.item}>
                <Link to="/aboutUs">About Us</Link>
              </li>
              <li className={styles.item}>
                <Link to="/products">Products</Link>
              </li>
              <li className={styles.item}>
                <Link to="#">Blogs</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <hr className={styles.hr} />

      <div className={styles.logoReserved}>
        <img className={styles.imgLogo} src={logo2}></img>
        <p>Compassinhos &reg;. All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
