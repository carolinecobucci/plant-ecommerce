import { Fragment } from "react";
import classes from './PlaySafe.module.css';
import.meta.envand;
import foto from '../assets/left-plant.png';

const PlaySafe = () => {
    return (
            <Fragment>
                <div className={classes.container}>
                    <p>-- Love for nature</p>
                    <h1>Discover Your <span>Green</span>Side</h1>
                    <p>We are your one-stop destination for all things green and growing.
                        Our website offers a wide array of stunning plants,
                        ranging from vibrant flowers to lush indoor foliage,
                        allowing you to create your very own green oasis.
                    </p>
                    <button>Shop now</button>
                    <img className={classes.leftFoto} src={foto} alt="foto" width={450}/>
                </div>
            </Fragment>
    )
};
export default PlaySafe;