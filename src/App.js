import React, { useState } from "react";
import Cart from "./componants/Cart/Cart";
import Header from "./componants/Layout/Header";
import Meals from "./componants/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
     {cartIsShown && <Cart onCloseCart ={hideCartHandler}/>}
      <Header onShowCart ={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
