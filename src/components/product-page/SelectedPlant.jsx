import React from 'react';
import Plants from './Plants';
import useFetch from './hooks/useFetch';

const SelectedPlant = () => {
  const [id, setId] = React.useState(1);
  React.useEffect(() => {
    setId(1);
  }, []);
  const { data, error } = useFetch(id);

  return <>{!error && <Plants data={data} />}</>;
};

export default SelectedPlant;
