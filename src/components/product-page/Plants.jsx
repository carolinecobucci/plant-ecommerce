import styles from './Plants.module.css';

const Product = ({ data, loading }) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.productContainer}>
          <img src="/src/assets/Photo.svg" alt="Um pequeno cacto em um vaso" />

          <div className={styles.contentContainer}>
            <h1 className={styles.title}>{data.name}</h1>
            <h2 className={styles.mainSubtitle}>{data.subtitle}</h2>
            <ul className={styles.labelsContainer}>
              {data.label &&
                data.label.map((label) => (
                  <li className={styles.label} key={label.index}>
                    {label}
                  </li>
                ))}
            </ul>
            <p className={styles.price}>{data.price}</p>
            <button className={styles.checkButton}>Check out</button>
            <h3 className={styles.subtitles}>Features</h3>
            <ul className={styles.features}>
              {' '}
              {data.features &&
                data.features.map((feature) => (
                  <li className={styles.label} key={feature.index}>
                    {feature}
                  </li>
                ))}
            </ul>
            <h3 className={styles.subtitles}>Description</h3>
            <p className={styles.textDescription}>{data.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
