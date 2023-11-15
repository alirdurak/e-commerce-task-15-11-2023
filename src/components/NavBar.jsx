import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

const NavBar = () => {
  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand>E-Ticaret Sitesi</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink>Ürünler</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Sepet</NavLink>
        </NavItem>
        <NavItem>
          <NavLink>Hesap</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
