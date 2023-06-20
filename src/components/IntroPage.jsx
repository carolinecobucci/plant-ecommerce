import styles from "./IntroPage.module.css";
import {Link} from "react-router-dom"

function IntroPage() {
  return (
    <div>
      
        {/* this div separates the content in one frame */}
        <section className={styles.container}>
          <div className={styles.containerLove}>
            <div className={styles.border}></div>
            <p className={styles.love}>Love for nature</p>
          </div>

          <div className={styles.item}>
            <h2>
              Discover Your <span className={styles.span}>Green</span> Side
            </h2>
          </div>

          <div>
            <a className={styles.description}>
              We are your one-stop destination for all things green and growing. Our website offers
              a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage,
              allowing you to create your very own green oasis.{" "}
            </a>
          </div>

          <div>
            <button>
              <Link to="/products">Shop now</Link>
            </button>

            <div className={styles.learn}>
              <h6>
                Learn Gardening <img src="/src/assets/Arrow 1.png" alt="arrow" />
              </h6>
            </div>
          </div>
        </section>
    </div>
  );
}


export default IntroPage;