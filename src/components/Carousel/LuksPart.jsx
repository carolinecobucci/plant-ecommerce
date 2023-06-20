import classes from "./LuksPart.module.css";
import PlantCarousel from "./plantCarousel";
import { Fragment } from "react";
import PlantSaleCarousel from "./PlantSaleCarousel";

const LuksPart = () => {
  return (
    <Fragment>
      <div className={classes.container}>
        <div className={classes.firstH1}>
          <h1>
            This Weeks Most Popular{" "}
            <span>
              And <br />
              Best Selling
            </span>
          </h1>
        </div>
        <PlantCarousel />
        <div className={classes.secondH1}>
          <h1>
            Plants In <span>Sale</span>
          </h1>
        </div>
        <PlantSaleCarousel className={classes.PlantSaleCarousel} />
      </div>
    </Fragment>
  );
};

export default LuksPart;
