
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Container}  from 'react-bootstrap';

export const Topnav = () => {
  return (
    <Navbar collapseOnSelect bg= "none" expand = "md">
    <Container>
      <Navbar.Brand href="#" >Jyoti</Navbar.Brand>
      <Navbar.Toggle aria-controls = "basic-navbar-nav"/>
      <Navbar.Collapse id = "basic-navbar-nav">
        <Nav className = "ms-auto">
            <Nav.Link href = "#skills">Skills</Nav.Link>
            <Nav.Link href = "#projects">Projects</Nav.Link>
            <Nav.Link href = "about-me">About Me</Nav.Link>
            <Nav.Link href = "#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
     
      
    </Container>
  </Navbar>
  );
};