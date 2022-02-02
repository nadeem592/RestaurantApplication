import React, { useState } from 'react';
import Menu from './Components/Menu';
import Categories from './Components/Categories';
<<<<<<< HEAD
import items from './Components/data';
=======
import items from "./Components/data";
import { Dropdown } from "react-bootstrap";
import { HiOutlineViewList } from "react-icons/hi";
>>>>>>> a2997ef68e29669238c92ec9d20776782f6b5c41

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
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
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          style={{ textAlign: "right" }}
        >
          <HiOutlineViewList />
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Orders History</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <main>
        <section className="menu section">
          <div className="title">
            <h2>our menu</h2>
            <div className="underline"></div>
          </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems} />
        </section>
      </main>
    </div>
  );
}

export default App;