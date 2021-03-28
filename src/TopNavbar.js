import './App.css';
import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button  } from 'react-bootstrap';

export default class TopNavbar extends Component {
  render(){
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Daniel's Reads</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Books</Nav.Link>
            <NavDropdown title="Learn More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SIIKKKEEEE</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Page still rendering..</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Don't Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}