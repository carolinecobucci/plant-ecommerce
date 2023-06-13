import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import classes from './PlantCarousel.module.css'

import plantSlide1 from '../assets/plant-slide.png';
import plantSlide2 from '../assets/plant-slide-2.png';
import plantSlide3 from '../assets/plant-slide-3.png';
import plantSlide4 from '../assets/plant-slide-4.png';

const plantImages = [plantSlide1, plantSlide2, plantSlide3, plantSlide4]

const PlantCarousel = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(()=>{
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    },[])

    return (
        <Fragment>
            <motion.div ref={carousel} className={classes.carousel} whileTap={{cursor: 'grabbing'}}>
                <motion.div className={classes.inner}
                    drag="x"
                    dragConstraints={{ right: 0, left: -width}}
                    initial={{x: 100}}
                    animate={{x: 0}}
                    transition={{duration: 0.8}}
                    >
                    {plantImages.map(plantImg => (
                        <motion.div className={classes.item} key={plantImg}>
                            <img src={plantImg} alt="Imagem da planta"/>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Fragment>
    )
};

export default PlantCarousel;