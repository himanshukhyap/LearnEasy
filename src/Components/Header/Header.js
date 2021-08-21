import React from "react";
import "./Header.css";
import Dropdown from "react-multilevel-dropdown";
import {
  AiOutlineShoppingCart,
  AiOutlineUser,
  AiOutlineSearch
} from "react-icons/ai";
import { GiUsaFlag } from "react-icons/gi";
import {
  Navbar,
  Container,
  Nav,
  FormControl,
  Form,
  NavDropdown,
  Button
} from "react-bootstrap";
export default function Header() {
  function doSomething() {
    alert("clicked");
  }
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="headerNavbar"
      // variant=""
    >
      <Container fluid>
        <Navbar.Brand className="headernavbrand" href="#home">
          Learn Easy
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto headernavtop">
            <Dropdown title="Dropdown title">
              <Dropdown.Item onClick={() => doSomething()}>
                Business Management
                <Dropdown.Submenu>
                  <Dropdown.Item>Finance</Dropdown.Item>
                  <Dropdown.Item>Subitem 2</Dropdown.Item>
                  <Dropdown.Item>Subitem 2</Dropdown.Item>
                  <Dropdown.Item>Subitem 2</Dropdown.Item>
                  <Dropdown.Item>Subitem 2</Dropdown.Item>
                </Dropdown.Submenu>
              </Dropdown.Item>
              <Dropdown.Item>
                Item 2
                <Dropdown.Submenu>
                  <Dropdown.Item>Finance</Dropdown.Item>
                  <Dropdown.Item>Subitem 2</Dropdown.Item>
                  <Dropdown.Item>Subitem 2</Dropdown.Item>
                  <Dropdown.Item>Subitem 2</Dropdown.Item>
                  <Dropdown.Item>Subitem 2</Dropdown.Item>
                </Dropdown.Submenu>
              </Dropdown.Item>
              <Dropdown.Item>Item 3</Dropdown.Item>
            </Dropdown>
            {/* <NavDropdown
              title="Categories"
              id="collasible-nav-dropdown"
              className="headerdropdown"
            >
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className="headersearch">
            <FormControl
              type="search"
              placeholder="Search"
              className="headermr2"
              aria-label="Search"
            />
            <button className="headerserachbutton">
              <AiOutlineSearch />
            </button>
          </Form>
          <Nav className="headernavmarginsecond">
            <div className="headernavborder">
              <Nav.Link className="headernavlinkborder" href="#pricing">
                <AiOutlineShoppingCart color="#120f2d" size={30} />
              </Nav.Link>
            </div>
            <div className="headernavborder">
              <Nav.Link className="headernavlinkborder" href="#pricing">
                <AiOutlineUser className="hdsavicon" size={30} />
                <span>Login</span>
              </Nav.Link>
            </div>
            <Nav.Link className="headernavlinkborder l" href="#pricing">
              <GiUsaFlag className="hdsavicon" size={25} />
              <span>English</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
