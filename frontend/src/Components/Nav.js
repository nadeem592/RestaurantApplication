import React from "react";
import Cart from "./Cart";

const Nav = ({ size }) => {
  return (
    <nav>
      <div className="navbox">
        <div className="cart" align="right">
          <span>{size}</span>
          <Cart />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
