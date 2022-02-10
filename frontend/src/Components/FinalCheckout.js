import React from "react";
import Checkout from "./Checkout";

function FinalCheckout() {
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
          <h2 align="center" style={{ color: "blue", fontFamily: "cursive" }}>
            Thanks for your Order ..!!
          </h2>
        </div>
      </div>
    </nav>
  );
}

export default FinalCheckout;
