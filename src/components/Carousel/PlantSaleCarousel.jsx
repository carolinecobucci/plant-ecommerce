import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Fragment } from 'react';
import classes from './PlantCarousel.module.css';

import PlantCard from './PlantCard';


const plantCard = [0, 1, 2, 3];

const PlantSaleCarousel = () => {
    const carousel = useRef();
    const [width, setWidth] = useState(0);
    const [plantSale, setPlantSale] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/plants')
        .then(res => res.json())
        .then(res => {
            setPlantSale(res.filter(item => item.discountPercentage > 0))
        })
    },[])
    
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
                    {plantSale.map(item => (
                        <motion.div className={classes.item} key={Math.random(item)}>
                            <PlantCard num={item.id - 1} discount={true}/>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </Fragment>
    )
};

export default PlantSaleCarousel;