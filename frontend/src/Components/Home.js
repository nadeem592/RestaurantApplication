import React from 'react';
import Itemcard from './Itemcard';
import menu from './data';
import Categories from './Categories';
import items from './data';
import { useState } from 'react';
import { Dropdown } from "react-bootstrap";
import { HiUser } from "react-icons/hi";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function Home() {
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
    <div align='right'>
      <Dropdown>
        <Dropdown.Toggle
          variant="secondary"
          id="dropdown-basic"
          style={{ textAlign: "right" }}
        >
           <HiUser /> 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" >Orders History</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </div>
      <h1 className='text-center mt-3'>Our Menu</h1>
      <Categories categories={categories} filterItems={filterItems} />
      
      <section className="py-4 container">
          <div className='row justify-content-center'>
              {menu.map((item,index)=>{
                  return(
                    <Itemcard id={item.id}
                     title={item.title} 
                     desc={item.desc} 
                     price={item.price}
                     item={item}
                      key={index}/>
                  )
              })}
              
          </div>
         
          
      </section>
      </>
  );
};
export  default Home;
