import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li  className={classes.meal}> 
      <div>
        <ul>
          <li>
            <h3>{props.name} </h3>
          </li>
          <li>
            <div className={classes.description}>{props.description} </div>
          </li>
          <li>
            <div className={classes.price}>{price} </div>
          </li>
        </ul>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
