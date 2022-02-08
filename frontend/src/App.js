import React from 'react';
import Home from "./Components/Home"
import Cart from "./Components/Cart"
import { CartProvider } from "react-use-cart"
const App = () => {
  return (
    <>
    <CartProvider>
    <Home/>
    <Cart/>
    </CartProvider>

    </>
  );
};
export default App;