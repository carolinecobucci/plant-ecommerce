import styles from "./Footer.module.css";

import logo from "../assets/logo-icon.svg";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.div1}>
        <div className={styles.div2}>
          <h2>Stay Fresh</h2>
          <p>Compassinhos@gmail.com</p>
          <p>+55 41 99999-9999</p>
        </div>
        <nav className={styles.links}>
          <div className={styles.div3}>
          <p>Links</p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a>About Us</a>
              </li>
              <li className={styles.item}>
                <a>Products</a>
              </li>
              <li className={styles.item}>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
          <div className={styles.div4}>
            <p className={styles.item}>Community</p>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a>About Us</a>
              </li>
              <li className={styles.item}>
                <a>Products</a>
              </li>
              <li className={styles.item}>
                <a>Blogs</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <hr />

      <div className={styles.rodape}>
        <img src={logo}></img>
        <p>Compassinhos &reg; All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
