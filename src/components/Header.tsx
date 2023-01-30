import React from 'react';
import { Container, Image, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from './../logo-white.svg';
import { ReactComponent as EventsIcon } from './../icons/calendar-days-duotone.svg';

function Header() {
  const breakpoint = 'lg';

  return (
    <Navbar variant="dark" bg="primary" expand={breakpoint} sticky="top" as="header">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Image className="d-inline-block align-top" src={logo} alt="Coulsdon Community Partnership" height="90" />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Offcanvas id="navbar-nav" className="text-bg-primary" placement="bottom">
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="ms-auto" variant="icon-nav">
              <Nav.Item>
                <LinkContainer to="/events">
                  <Nav.Link>
                    <div className="icon">
                      <EventsIcon width="24" />
                    </div>
                    <small className="nav-icon-nav-label">Events</small>
                  </Nav.Link>
                </LinkContainer>
              </Nav.Item>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default Header;
