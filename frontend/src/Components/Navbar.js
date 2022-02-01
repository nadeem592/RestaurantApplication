import React from 'react'
import * as ReactBootStrap from 'react-bootstrap'

function Navbar(){
  return (

    <>
   <ReactBootStrap.Form className="d-flex">
        <ReactBootStrap.FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <ReactBootStrap.Button variant="outline-success">Search</ReactBootStrap.Button>
      </ReactBootStrap.Form> 
      <br /><br/>
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
    <ReactBootStrap.Nav.Link href="#home" className='text-secondary'>All </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#breakfast" className='text-secondary'>Breakfast </ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#lunch" className='text-secondary'>Lunch</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#shakes" className='text-secondary'>Shakes</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#starters" className='text-secondary'>Starters</ReactBootStrap.Nav.Link>
      
  
  <br />
      <ReactBootStrap.NavDropdown  id="collasible-nav-dropdown" align={{ lg: 'end' }}>
        <ReactBootStrap.NavDropdown.Item href="#action/3.1">History</ReactBootStrap.NavDropdown.Item>
        <ReactBootStrap.NavDropdown.Item href="#action/3.2">Logout</ReactBootStrap.NavDropdown.Item>
      </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>

</>
  )
}
export default Navbar