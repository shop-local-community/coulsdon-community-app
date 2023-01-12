import React from 'react';
import { Container, Image, Navbar } from 'react-bootstrap';
import icon from './../icon-white.svg';

function Header() {
  return (
    <Navbar variant="dark" bg="primary" sticky="top" as="header">
      <Container>
        <Navbar.Brand>
          <Image className="d-inline-block align-top" src={icon} height="30" />{' '}
          <span className="fw-bold">Coulsdon Community Partnership</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;
