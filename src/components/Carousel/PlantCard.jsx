import { Fragment, useEffect, useState } from "react";
import classes from './PlantCard.module.css';
import foto from '../../assets/plant-slide.png';
import { Link } from 'react-router-dom';

const PlantCard = (props) => {
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/plants')
        .then(res => res.json())
        .then(res => {
            setDetails(res);
        })
    },[])
    return (
        <Fragment>
            <div className={classes.container}>
            {details.length > 0 ? (
                <Fragment>
                    <img src={foto} alt="Imagem da planta" />
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
    )
};

export default PlantCard;