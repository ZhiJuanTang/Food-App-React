import classes from "./Cart.module.css";

import React from "react";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 19.99 }].map((item) => (
        <li key={item.id}>{item.name} </li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes.['button--alt']}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
