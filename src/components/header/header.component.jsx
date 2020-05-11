import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Image } from "react-bootstrap";
import logo from "../../assets/logo_transparent2.png";

import "./header.styles.scss";

const header = () => {
  return (
    <div>
      <Navbar className="nav" expand="lg" variant="dark">
        <div className="logo">
          <Link to="/">
            <Image src={logo} fluid />
          </Link>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/shop" className="nav-link">
              Shop
            </NavLink>
          </Nav>
          <Nav className="justify-content-end">
            <NavLink to="/login" className="nav-link">
              Login
            </NavLink>
            <NavLink to="/cart" className="nav-link">
              Cart
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default header;
