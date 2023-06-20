import Plants from './Plants';
import useFetch from './hooks/useFetch';
import { useParams } from 'react-router-dom';

const SelectedPlant = () => {
  const { id } = useParams();
  console.log(id);
  const { data, error, loading } = useFetch(id);

  return (
    <>
      {console.log(data)}
      {!error && data && (
        <Plants
          price={+data.price}
          salePrice={(+data.price * 1 - +data.discountPercentage).toFixed(2)}
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
