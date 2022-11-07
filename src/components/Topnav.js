
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container}  from 'react-bootstrap';
import { Link } from "react-router-dom";

export const Topnav = () => {
  return (
    <Navbar collapseOnSelect bg= "none" expand = "md">
    <Container>
      {/* <Navbar.Brand href="#" >Jyoti</Navbar.Brand> */}
      <Link className = "nav-link"to = "/">Jyoti</Link>
      <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
      <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className = "ms-auto">
            <Link className = "nav-link" to = "/skills">Skills</Link>
            <Link className = "nav-link" to = "/projects">Projects</Link>
            <Link className = "nav-link" to = "/about-me">About Me</Link>
            <Link className = "nav-link" to = "/contact">Contact</Link>
        </Nav>
      </Navbar.Collapse>
     
      
    </Container>
  </Navbar>
  );
};
