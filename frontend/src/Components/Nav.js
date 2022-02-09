import React from 'react';

/* import { Button, Dropdown, Navbar } from "react-bootstrap";
import { HiUser } from "react-icons/hi"; */
import Cart from './Cart';

const Nav = ({size}) => {
  return(
      <nav>
  <div className='navbox'>
      {/* <span className='my_cart' onClick={setShow(true)}>My Cart</span> */}
      <div className='cart'  align="right">
          <span><i class="fas fa-cart-plus" ></i></span>
          <span>0</span>
         <Cart/>
     {/* <div align='right'>
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
  </div> */}
  </div>
  </div>
  </nav>
  )
};

export default Nav;
