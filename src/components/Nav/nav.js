import React from 'react';

import { Navbar, Nav, Container } from 'react-bootstrap'

function Navigation() {

    return (
        <Navbar className="navbar sticky-top" id="navbar" bg="" expand="md">
          <Container>
            <Navbar.Brand className ="brand" href="./index.html">David</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link className="nav-link" href="#about">About</Nav.Link>
                <Nav.Link className="nav-link" href="#experience">Experience</Nav.Link>
                <Nav.Link className="nav-link" href="#featured">Projects</Nav.Link>
                <Nav.Link className="nav-link" href="#contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default Navigation;