import React, { Fragment } from "react";
import Home from "./Components/Home";
import { CartProvider } from "react-use-cart";
import Nav from "./Components/Nav";
import "./styles.css";
import { BrowserRouter, Router, Switch, Route, Routes } from "react-router-dom";
import LoginSignup from "./Components/LoginSignup";
import FinalCheckout from "./Components/FinalCheckout";
import Login from "./Components/Login";
import Register from "./Components/Register";
import OrdersHistory from "./Components/OrdersHistory";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
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
          <Route path="/history" exact element={<OrdersHistory />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
