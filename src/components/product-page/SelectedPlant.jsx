import React from 'react';
import Plants from './Plants';
const SelectedPlant = () => {
  const [data, setData] = React.useState([]);
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [selectedPlant, setSelectedPlant] = React.useState('');
  const url = 'http://localhost:3000/plants';

  const useFetch = (url) => {
    React.useEffect(() => {
      setLoading(true);
      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          setData(json);
          setLoading(false);
        } catch (error) {
          setError('Houve um erro ao solicitar os dados');
          setLoading(false);
        }
      };
      fetchData();
      console.log(data);
    }, [url]);
  };

  return <>{data && <Plants selectedPlant={selectedPlant} />}</>;
};

export default SelectedPlant;
