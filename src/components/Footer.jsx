import styles from "./Footer.module.css";

import logo from "../assets/logo-icon.svg";

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
          <div className={styles.linksCommunity}>
            <ul className={styles.list}>
              <li className={styles.itemCommunity}>Community</li>
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

      <hr className={styles.hr}/>

      <div className={styles.logoReserved}>
        <img className={styles.imgLogo} src={logo}></img>
        <p>Compassinhos  &reg;.  All Rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
