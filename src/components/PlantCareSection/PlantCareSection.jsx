import styles from "./PlantCareSection.module.css";

const PlantCareSection = () => {
  return (
    <div className={styles.section_container}>
      <div className={styles.title}>
        <h1>
          Steps To Take Care Of Your <span>Plants</span>
        </h1>
        <p className={styles.sub_title}>
          By following these three steps - proper watering, appropriate sunlight, and providing
          essential nutrients - you&apos;ll be well on your way to maintaining healthy and thriving
          plants.
        </p>
      </div>
      <div className={styles.plant_needs_container}>
        <div className={styles.plant_needs}>
          <img src="/src/assets/water-icon.svg" alt="water icon" />
          <h3>Watering</h3>
          <p>
            Water your plants when the top inch of soil feels dry to the touch. Avoid overwatering,
            as it can lead to root dehydration.
          </p>
        </div>
        <div className={styles.plant_needs}>
          <img src="/src/assets/sun-icon.svg" alt="sun icon" />
          <h3>Sunlight</h3>
          <p>
            Most plants need adequate sunlight to thrive. Place your plants in areas that receive
            the appropriate amount of light for their specific needs
          </p>
        </div>
        <div className={styles.plant_needs}>
          <img src="/src/assets/shop-icon.svg" alt="nutrients and fertilizing icon" />
          <h3>Nutrients and Fertilizing</h3>
          <p>
            Choose a suitable fertilizer based on the specific needs of your plants, whether
            it&apos;s a balanced or specialized formula.
          </p>
        </div>
      </div>
      <div className={styles.plant_photos}>
        <div className={styles.plant_photos_container}>
          <img src="/src/assets/care-plant1.png" alt="plant photo" />
        </div>
        <div className={styles.plant_photos_container}>
          <img src="/src/assets/care-plant2.png" alt="plant photo" />
        </div>
        <div className={styles.see_more_photos}>
          <img src="/src/assets/care-plant3.png" alt="plant photo" />
          <p>
            Our website offers a wide array of stunning plants, ranging from vibrant flowers to lush
            indoor foliage, allowing you to create your very own green oasis. In addition to our
            extensive plant selection, we also provide gardening kits and fertilizers to equip you
            with everything you need to nurture your plants and achieve gardening success. But we
            don&apos;t stop there! We believe that knowledge is the key to a thriving garden, so we
            offer a wealth of information and resources on gardening techniques, plant care tips,
            and landscaping ideas. Whether you&apos;re a seasoned gardener or just starting your
            green journey, our goal is to inspire and support you every step of the way. Get ready
            to explore our virtual garden and discover the joys of gardening with us!
          </p>
          <button>
            <a href="#">See more photos</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCareSection;
