import React from "react";
import { Container, Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/UseAuth";
import cartlogo from "../../../Images/download.png";
import logo from "../../../Images/logo.png";
import TopNavbar from "../TopNavbar/TopNavbar";

import "./Navigation.css";

const Navigation = () => {
  const {user,logOut} = useAuth()
  return (
   
        <div>
          <TopNavbar />
   <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
      <Container>
        <NavLink to="/home"><img width="120px" src={logo} alt="" />  </NavLink>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>

          <Nav.Link className='link-style ms-auto' as={Link} to="/home"><h5 className='text-style' >HOME</h5></Nav.Link>
          
          

          <NavDropdown style={{fontSize: "22px", marginBottom: "7px", fontWeight: "600"}} title="PAGES" id="basic-nav-dropdown">
          <NavDropdown.Item as={Link} to="/football">Football</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/cricket">Cricket</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/hockeyPuck">Hockey Puck</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/tableTennis">Table Tennis</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/baseBall">Base Ball</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/basketBall">Basket Ball</NavDropdown.Item>
          <NavDropdown.Item as={Link} to="/volleyBall">Volley Ball</NavDropdown.Item>
          
          
        </NavDropdown>
          
          <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>NEWS</h5></Nav.Link>

          <Nav.Link className='link-style' as={Link} to="/"><h5 className='text-style'>SHOP</h5></Nav.Link>

          <Nav.Link className='link-style' as={Link} to="/contact"><h5 className='text-style'>CONTACT</h5></Nav.Link>
          
          
  
       { user?.email ? 
      <h5 onClick={logOut} style={{cursor:'pointer'}} className='text-style'>LOGOUT</h5>
       : 
        <Nav.Link className='link-style' as={Link} to="/login"><h5 className='text-style'>LOGIN</h5></Nav.Link>}
         
         
         

          <Nav.Link className='link-style cart-button' as={Link} to="/dashbord/home"><img src={cartlogo} width="50px" alt="" /> </Nav.Link>
          


           

         
           
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
