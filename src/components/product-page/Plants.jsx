import styles from './Plants.module.css';

const Plants = ({
  salePrice,
  price,
  loading,
  plantName,
  plantSubtitle,
  plantLabel,
  plantDescription,
  plantFeatures,
  plantInSale,
}) => {
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className={styles.productContainer}>
          <img src="/src/assets/Photo.svg" alt="Um pequeno cacto em um vaso" />

          <div className={styles.contentContainer}>
            <h1 className={styles.title}>{plantName}</h1>
            <h2 className={styles.mainSubtitle}>{plantSubtitle}</h2>
            <ul className={styles.labelsContainer}>
              {plantLabel &&
                plantLabel.map((label) => (
                  <li className={styles.label} key={label.index}>
                    {label}
                  </li>
                ))}
            </ul>
            {plantInSale ? (
              <div className={styles.priceContent}>
                <p className={styles.price}>${salePrice}</p>
                <p className={styles.riskPrice}>${price}</p>
              </div>
            ) : (
              <p className={styles.price}>${price}</p>
            )}
            <button className={styles.checkButton}>Check out</button>
            <h3 className={styles.subtitles}>Features</h3>
            <ul className={styles.features}>
              {plantFeatures &&
                plantFeatures.map((feature) => (
                  <li className={styles.feature} key={feature.index}>
                    {feature}
                  </li>
                ))}
            </ul>
            <h3 className={styles.subtitles}>Description</h3>
            <p className={styles.textDescription}>{plantDescription}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Plants;
