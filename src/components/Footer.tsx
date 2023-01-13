import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function Footer() {
  return (
    <footer className="text-bg-primary">
      <Container>
        <Nav>
          <Nav.Item>
            <LinkContainer to="/guidelines">
              <Nav.Link className="link-light">Guidelines</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
      </Container>
    </footer>
  );
}

export default Footer;
