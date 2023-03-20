import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useRouteLoaderData } from "react-router-dom";
import { AppLoaderData } from "../App";
import Socials from "./Socials";

function Footer() {
  const {
    preferences: { data: preferencesData },
  } = useRouteLoaderData("app") as AppLoaderData;

  return (
    <Navbar className="mt-auto" variant="dark" bg="primary" as="footer">
      <Container>
        <Nav>
          <Nav.Item>
            <Nav.Link className="link-light" as="span">Charity number: 1201996</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/mission-statement">
              <Nav.Link className="link-light">Mission statement</Nav.Link>
            </LinkContainer>
          </Nav.Item>
          <Nav.Item>
            <LinkContainer to="/guidelines">
              <Nav.Link className="link-light">Guidelines</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-center">
          <Socials socialUrls={preferencesData.attributes.socialURLs} />
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
