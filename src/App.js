import React from "react";
import Cart from "./componants/Cart/Cart";
import Header from "./componants/Layout/Header";
import Meals from "./componants/Meals/Meals";

function App() {
  return (
    <React.Fragment>
      <Cart />
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
