import React from 'react';
import Plants from './Plants';
import useFetch from './hooks/useFetch';

const SelectedPlant = () => {
  const [id, setId] = React.useState(2);

  const { data, error, loading } = useFetch(id);

  return (
    <>
      {console.log(data)}
      {!error && data && (
        <Plants
          price={data.price.substring(1, data.price.length)}
          salePrice={(
            +data.price.substring(1, data.price.length) *
            (1 - data.discountPercentage / 100)
          ).toFixed(2)}
          loading={loading}
          plantName={data.name}
          plantSubtitle={data.subtitle}
          plantLabel={data.label}
          plantDescription={data.description}
          plantFeatures={data.features}
          plantInSale={data.isInSale}
        />
      )}
    </>
  );
};

export default SelectedPlant;
