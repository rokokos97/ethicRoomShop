import React from 'react';
import {
  Nav,
  Navbar,
  NavLink,
  NavDropdown,
} from 'react-bootstrap';
import NavBar from './navBar';
const Header = () => {
  return (
    <>
      <Navbar
        // fixed="top"
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
      >
        <div className="d-flex justify-content-between w-100 m-3">
          <Navbar.Brand href={'/'}>
            <span>ETHIC</span>
          </Navbar.Brand>
          <div className="text-uppercase">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end">
                <NavLink href="/"> main </NavLink>
                <NavDropdown title="catalogue" id="responsive-nav-dropdown">
                  <NavDropdown.Item href="/all-goods">
                    all goods
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/dress">
                    dress
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/pants">
                    pants
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/hoodies">
                    hoodies
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/kimono">
                    kimono
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/t-shirts">
                    t-shirts
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/body">
                    body
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/outwear">
                    outwear
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/tops">
                    tops
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/something different">
                    something different
                  </NavDropdown.Item>
                </NavDropdown>
                <NavLink href="/about">about us</NavLink>
                <NavLink href="/info">info</NavLink>
              </Nav>
            </Navbar.Collapse>
          </div>
        </div>
      </Navbar>
      <NavBar/>
    </>
  );
};

export default Header
;
