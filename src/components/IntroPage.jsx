import styles from "./IntroPage.module.css";
import rectangle from "../assets/rectangle.svg";
import { Link } from "react-router-dom";

function IntroPage() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundImage1}></div>
      <div className={styles.backgroundImage2}></div>
      <div className={styles.item}>
        <div className={styles.containerlove}>
          <img src={rectangle} alt="rectangle" />
          <p>Love for Nature</p>
        </div>
        <h2>
          Discover Your <span className={styles.span}>Green</span> Side
        </h2>
        <p>
          We are your one-stop destination for all things green and growing. Our website offers a
          wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage,
          allowing you to create your very own green oasis.{" "}
        </p>
        <button>
          <Link to="/products">Shop now</Link>
        </button>
        <div className={styles.learn}>
          <p>Learn Gardening</p>
          <img src="/src/assets/arrow.svg" alt="arrow" />
        </div>
      </div>
    </div>
  );
}

export default IntroPage;
