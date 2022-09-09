import { useReducer } from "react";
import CartContext from "./cart-context";

//following 2 consts should be defined outside the default funtion CartProvider because they won't need anything any data inside of the funtion CartProvider. and they shouldn't be recreated every time when the CartProvider componant is revaluated
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  // state : last state snapshot of the state managed by the reducer. action will update this state, 'return' a new state snapshot
  //action will be dispatched by me later

  // a state snapshot looks like this:
  //   {items: [ item1: { id: props.id,
  //        name: props.name,
  //        amount: amount,
  //        price: props.price,}, item2, item3....], 
  //    totalAmount: }
  if (action.type === "ADD") {
    //update totalAmount:
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    //find the updated item
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    // updatedItems & updatedItem:
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items]; //this CartItem exists already, so item list shouldn't be changed after 'ADD'
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item); //this CartItem doesn't exists yet, so this new item  should be added to item list
    } // concat makes a new array. better than .push(same array. so push changes the react DOM without react knowing it).

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }; // a new state snapshot is returned by reducer
  }
  
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; // here means override this old item in items array with the updated item which had the updated amount
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    //useReducer always returns: [state snapshot, a funtion that dispatch an action which updates the snaphot]
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
    //'type' is a identifier for reducer. 'item: item': forward item that we get to reducer
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
