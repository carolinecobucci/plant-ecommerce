import styles from './PlantCard.module.css';
import photo from '/src/assets/plant-slide.png';

const PlantCard = ({ name, price }) => {
  return (
    <>
      <div className={styles.container}>
        {
          <>
            <img src={photo} alt="Imagem da planta" />
            <div className={styles.dataContainer}>
              <p className={styles.name}>{name}</p>
              <p className={styles.price}>${price}</p>
            </div>
          </>
        }
      </div>
    </>
  );
};

export default PlantCard;
