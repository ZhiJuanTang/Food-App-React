import React from "react";

const CartContext = React.createContext({
  items: [],
  //each item details is defined in MealItem componant by calling 'addItem' funtion there, also updated by anywhere 'addItem' or 'removeItem' funtions are called
  //   MealItem componant:
  //   cartCtx.addItem({
  //      id: props.id,
  //      name: props.name,
  //      amount: amount,
  //      price: props.price,
  // });
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {}
});

export default CartContext;
