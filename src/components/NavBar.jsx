import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Link to={"/"}>
        <Navbar.Brand href="#">Surfar-Tiendita</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to={"/category/suit"}>
            <Nav.Link href="#Traje">Trajes</Nav.Link> </Link>
            <Link to={"/category/table"}>
            <Nav.Link href="#Tablas">Tablas</Nav.Link>{" "}
            </Link>
            <Link to={"/category/boots"}>
            <Nav.Link href="#Botas">Botas</Nav.Link> </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="d-flex">
          <Link to={"/cart"}>
            <Nav.Link href="#Cart">
              <CartWidget />
            </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
