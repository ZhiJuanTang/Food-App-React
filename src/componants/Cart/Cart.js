import classes from "./Cart.module.css";
import React from "react";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 19.99 }].map((item) => (
        <li key={item.id}>{item.name} </li>
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart ={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>36.55</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick ={props.onCloseCart} >Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
