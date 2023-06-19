import { Fragment, useEffect, useState } from 'react';
import classes from './PlantCard.module.css';
import { useNavigate } from 'react-router-dom';

import foto1 from '../../assets/plant-slide.png';
import foto2 from '../../assets/plant-slide-2.png';
import foto3 from '../../assets/plant-slide-3.png';
import foto4 from '../../assets/plant-slide-4.png';

const PlantCard = (props) => {
  const [details, setDetails] = useState([]);

  const pictures = [foto1, foto2, foto3, foto4];

  useEffect(() => {
    fetch('http://localhost:3000/plants')
      .then((res) => res.json())
      .then((res) => {
        setDetails(res);
      });
  }, []);

  const navigate = useNavigate();

  const ClickHandler = () => {
    navigate('/products/' + (props.num + 1));
  };

  return (
    <Fragment>
      <div onClick={ClickHandler} className={classes.container}>
        {details.length > 0 ? (
          <Fragment>
            <img src={pictures[props.num]} alt="Imagem da planta" />
            {details[props.num] && (
              <Fragment>
                <p className={classes.name}>{details[props.num].name}</p>
                <p className={classes.price}>{details[props.num].price}</p>
                <p className={classes.label}>{details[props.num].label[0]}</p>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </Fragment>
  );
};

export default PlantCard;
