import { Fragment, useEffect, useState } from "react";
import classes from './PlantCard.module.css';
import foto from '../../assets/plant-slide.png'

const PlantCard = () => {
    const [details, setDetails] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/plants')
        .then(res => res.json())
        .then(res => setDetails(res))
    },[])
    
    return (
        <Fragment>
            <div className={classes.container}>
            {details.length > 0 ? (
                <Fragment>
                    <img src={foto} alt="Imagem da planta"/>
                    <p className={classes.name}>{details[0].name}</p>
                    <p className={classes.price}>{details[0].price}</p>
                    <p className={classes.label}>{details[0].label[0]}</p>
                </Fragment>
            ) : (
                <p>Loading...</p>
            )}
            </div>
        </Fragment>
    )
};

export default PlantCard;