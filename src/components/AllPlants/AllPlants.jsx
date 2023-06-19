import React from 'react';
import useFetch from '../product-page/hooks/useFetch';
import styles from './AllPlants.module.css';
import PlantCard from './PlantCard';
import SearchPlants from './SearchPlants';

const AllPlants = () => {
  const { data } = useFetch('');
  const [filteredPlants, setFilteredPlants] = React.useState();

  function handleSearch(plants) {
    setFilteredPlants(plants);
  }
  return (
    <>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>All Our Plants</h1>
        <SearchPlants handleSearch={handleSearch} />
      </div>

      <div className={styles.slidesContainer}>
        {filteredPlants !== undefined
          ? filteredPlants.map((filteredPlant) => (
              <PlantCard
                key={filteredPlant.index}
                name={filteredPlant.name}
                price={filteredPlant.price}
              />
            ))
          : data &&
            data.map((plant) => (
              <PlantCard
                key={plant.index}
                name={plant.name}
                price={plant.price}
              />
            ))}
      </div>
    </>
  );
};

export default AllPlants;
