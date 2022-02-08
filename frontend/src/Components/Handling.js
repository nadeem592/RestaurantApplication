import React, { useState } from "react";
import Menu from "../data";
import Itemcard from "./Itemcard";
// import "../styles/amazon.css";

const Amazon = ({ handleClick }) => {
  return (
    <section>
      {Menu.map((items) => (
        <Itemcard key={items.id} items={items} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Amazon;
