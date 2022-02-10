import React, { Fragment } from "react";
import Home from "./Components/Home";
import { CartProvider } from "react-use-cart";
import Nav from "./Components/Nav";
import "./styles.css";
import { BrowserRouter, Router, Switch, Route, Routes } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup";
import FinalCheckout from "./Components/FinalCheckout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            element={
              <CartProvider>
                <LoginSignup />
              </CartProvider>
            }
          />
          <Route
            path="/home"
            exact
            element={
              <CartProvider>
                <Home />
              </CartProvider>
            }
          />
          <Route
            path="/cart"
            element={
              <CartProvider>
                <Nav />
              </CartProvider>
            }
          />
          <Route
            path="/checkout"
            exact
            element={
              <CartProvider>
                <FinalCheckout />
              </CartProvider>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
