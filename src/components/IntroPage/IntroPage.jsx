import sytles from "./Introstyle.module.css";

function Intropage() {
  return (
    <div>
      <body>
        {/* this div separates the content in one frame */}
        <section className={sytles.container}>
          <div className={sytles.containerlove}>
            <div className={sytles.border}></div>
            <p className={sytles.love}>Love for nature</p>
          </div>

          <div className={sytles.item}>
            <h2>
              Discover Your <span className={sytles.span}>Green</span> Side
            </h2>
          </div>

          <div>
            <a className={sytles.description}>
              We are your one-stop destination for all things green and growing. Our website offers
              a wide array of stunning plants, ranging from vibrant flowers to lush indoor foliage,
              allowing you to create your very own green oasis.{" "}
            </a>
          </div>

          <div>
            <button>
              <a href="#">Shop now</a>
            </button>

            <div className={sytles.learn}>
              <h6>
                Learn Gardening <img src="/src/assets/Arrow 1.png" alt="arrow" />
              </h6>
            </div>
          </div>
        </section>
      </body>
    </div>
  );
}

// Disponibilizar a função globalmente ao ser exportada fora da function
export default Intropage;
