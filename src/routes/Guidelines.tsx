import React from 'react';
import { Outlet } from 'react-router-dom';
import { Col, Container, Nav, Placeholder, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Spinner } from '../components';

function Guidelines() {
  return (
    <Container className="page">
      <h1>Guidelines</h1>
      <Row>
        <Col xs={12} md={2}>
          <Nav className="flex-column" variant="pill">
            <Nav.Item>
              <LinkContainer to="/guidelines/logo">
                <Nav.Link>Logo</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/guidelines/icon">
                <Nav.Link>Icon</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/guidelines/fonts">
                <Nav.Link>Fonts</Nav.Link>
              </LinkContainer>
            </Nav.Item>
            <Nav.Item>
              <LinkContainer to="/guidelines/colors">
                <Nav.Link>Colours</Nav.Link>
              </LinkContainer>
            </Nav.Item>
          </Nav>
        </Col>
        <Col xs={12} md={10}>
          <React.Suspense fallback={(
            <>
              <Placeholder as="h1" animation="wave">
                <Placeholder xs={2} />
              </Placeholder>
              <Spinner />
            </>
          )}>
            <Outlet />
          </React.Suspense>
        </Col>
      </Row>
    </Container>
  );
}

export default Guidelines;
