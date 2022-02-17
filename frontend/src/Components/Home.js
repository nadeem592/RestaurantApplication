import React from 'react';
import Itemcard from './Itemcard';
import menu from './data';
import Categories from './Categories';
import items from './data';
import { useState } from 'react';
import { Link } from 'react-bootstrap/lib/Navbar';
import Nav from './Nav';
import Cart from './Cart';
import Checkout from "./Checkout";
//import data from "./Login";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Home() {
  const [show, setShow] = useState(true);
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <h3>
      <span class="badge badge-pill badge-primary">
        welcome, {localStorage.getItem("logged-user")}
      </span></h3>
      <div align="right">
        <a class="btn btn-primary" href={"/cart"} role="button">
          <h3>
            <span>
              <i class="fas fa-cart-plus"></i>
            </span>
          </h3>
        </a>
      </div>
      <div align="right"></div>
      <h1 className="text-center mt-3">Our Menu </h1>
      <Categories categories={categories} filterItems={filterItems} />
      <section className="py-4 container">
        <div className="row justify-content-center">
          {menu.map((item, index) => {
            return (
              <Itemcard
                id={item.id}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
export  default Home;
