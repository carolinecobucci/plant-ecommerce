import React from 'react';
import useFetch from '../product-page/hooks/useFetch';

const SearchPlants = ({ handleSearch }) => {
  const [filteredPlants, setFilteredPlants] = React.useState();
  const [search, setSearch] = React.useState('');
  const { data } = useFetch('');

  handleSearch(filteredPlants);

  function handleInput({ target }) {
    setSearch(target.value);
  }

  React.useEffect(() => {
    if (data) {
      const newPlants = data.filter((plant) =>
        plant.name.toLowerCase().includes(search.toLowerCase()),
      );
      setFilteredPlants(newPlants);
    }
  }, [search, data]);
  console.log(search);
  return (
    <>
      <input
        type="search"
        placeholder="Search a plant"
        value={search}
        onChange={handleInput}
      />
    </>
  );
};

export default SearchPlants;
