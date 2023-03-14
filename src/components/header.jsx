import React from 'react';
import {
  Nav,
  Navbar,
  NavLink,
  NavDropdown,
} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import Main from '../layauts/main';
import Catalogue from '../layauts/catalogue';
import About from '../layauts/about';
import Info from '../layauts/info';


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
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/catalogue" component={Catalogue}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/info" component={Info}/>
      </Switch>
    </>
  );
};

export default Header
;
