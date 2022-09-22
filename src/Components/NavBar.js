import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavBar = () => {
  return (
    <Navbar className="bg-success bg-gradient bg-opacity-50" variant="light">
      <Container>
        <Navbar.Brand href="/home">tinDog 🐶 ❤️</Navbar.Brand>
        <Nav className="d-flex flex-row mb-3 mt-3">
          <Nav.Link className="me-4" href="/allbreeds">
            All Breeds
          </Nav.Link>
          <Nav.Link className="me-4" href="/breedlist">
            Breed List
          </Nav.Link>
          <Nav.Link className="me-4" href="/bybreed">
            By Breed
          </Nav.Link>
          <Nav.Link className="me-4" href="/randomdog">
            Random Breed
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
