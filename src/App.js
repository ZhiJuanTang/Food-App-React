import React, { useState } from "react";
import Cart from "./componants/Cart/Cart";
import Header from "./componants/Layout/Header";
import Meals from "./componants/Meals/Meals";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <React.Fragment>
     {cartIsShown && <Cart onCloseCart ={hideCartHandler}/>}
      <Header onShowCart ={showCartHandler} />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
