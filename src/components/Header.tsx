import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import icon from './../icon.svg';

function Header() {
  return (
    <Navbar variant="light">
      <Container>
        <Navbar.Brand>
          <img src={icon} className="d-inline-block align-top" height="30" alt="" />{' '}
          <span className="fw-bold text-primary">Coulsdon Community</span>
          </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
