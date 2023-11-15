import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem } from "reactstrap";

const NavBar = ({ cats, setSelectedCat }) => {
  const catHandle = (id) => {
    setSelectedCat(id);
  };

  return (
    <Navbar color="dark" dark expand="md">
      <NavbarBrand>E-Ticaret Sitesi</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem
          onClick={() => catHandle(null)}
          style={{ color: "wheat", padding: "1rem", cursor: "pointer" }}
        >
          Tüm Ürünler
        </NavItem>
        {cats.map((i) => {
          return (
            <NavItem
              onClick={() => catHandle(i.id)}
              style={{ color: "wheat", padding: "1rem", cursor: "pointer" }}
              key={i.id}
            >
              {i.ad}
            </NavItem>
          );
        })}
      </Nav>
    </Navbar>
  );
};

export default NavBar;
