import React from "react";
import Checkout from "./Checkout";
import { useCart } from "react-use-cart";

function FinalCheckout() {
  const { emptyCart } = useCart();
  return (
    <nav>
      <div className="navbox">
        <div className="cart" align="right">
          <div
            align="center"
            style={{ fontFamily: "cursive", fontSize: "30px" }}
          >
            Order Summary
          </div>
          <Checkout />

          <hr />
          <div align="center">
            <a href={"/home"} role="button" className="btn btn-warning">
              Home
            </a>
            {}
            <a
              href={"/login"}
              role="button"
              className="btn btn-danger"
              onClick={emptyCart}
            >
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default FinalCheckout;
