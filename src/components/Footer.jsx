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
            <ul className={styles.list}>
              <li className={styles.item1}>Links</li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="#">About Us</a>
              </li>
              <li className={styles.item}>
                <a href="#">Products</a>
              </li>
              <li className={styles.item}>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
          <div className={styles.div4}>
            <ul className={styles.list}>
              <li className={styles.item2}>Community</li>
            </ul>
            <ul className={styles.list}>
              <li className={styles.item}>
                <a href="#">About Us</a>
              </li>
              <li className={styles.item}>
                <a href="#">Products</a>
              </li>
              <li className={styles.item}>
                <a href="#">Blogs</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <hr/>

      <div className={styles.div5}>
        <img src={logo}></img>
        <p>Compassinhos &reg; All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
