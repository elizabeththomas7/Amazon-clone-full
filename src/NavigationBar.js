import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import 'bootstrap/dist/css/bootstrap.min.css';
import { GiHamburgerMenu } from "react-icons/gi";
import './NavigationBar.css';
import {Link} from "react-router-dom";


function NavigationBar() {

    return (
      <div>
        <div className="navbar-active">
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <GiHamburgerMenu/>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link  href="/products" to="/products">All</Nav.Link>
      <Nav.Link className="inactive" href="/products" to="/products">Mobiles</Nav.Link>
      <Nav.Link className="inactive" href="/products" to="/products">Amazon Pay</Nav.Link>
      <Nav.Link className="inactive" href="/products">Elizabeth's Amazon.in</Nav.Link>
      <Nav.Link className="inactive" href="/products">Best Sellers</Nav.Link>
      <Nav.Link className="inactive" href="/products">Today's Deals</Nav.Link>
      <Nav.Link className="inactive" href="/products">Customer Service</Nav.Link>
      <Nav.Link className="inactive" href="/products">Buy Again</Nav.Link>
      <Nav.Link className="inactive" href="/products">Pantry</Nav.Link>
    

    </Nav>
  </Navbar>
  
        </div>
        <div className="navbar-bottom">
             <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
    <GiHamburgerMenu/>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link className="inactive" href="/products" to="/products">Shop by Category</Nav.Link>
      <Nav.Link className="inactive" href="/products">Best Sellers</Nav.Link>
      <Nav.Link className="inactive" href="/products">Today's Deals</Nav.Link>
    </Nav>
  </Navbar>
  
        </div>
        </div>
    )
}

export default NavigationBar
