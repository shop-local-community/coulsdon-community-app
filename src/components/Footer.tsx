import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { ReactComponent as FacebookIcon } from './../icons/facebook.svg';

function Footer() {
  return (
    <footer className="text-bg-primary mt-auto">
      <Container>
        <Nav>
          <Nav.Item>
            <LinkContainer to="/guidelines">
              <Nav.Link className="link-light">Guidelines</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-center">
          <Nav.Item>
            <Nav.Link className="link-light" href="https://facebook.com/ShopCoulsdon" target="_blank">
              <div className="icon">
                <FacebookIcon width="24" />
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </footer>
  );
}

export default Footer;
