import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useRouteLoaderData } from 'react-router-dom';
import { AppLoaderData } from '../App';
import { ReactComponent as FacebookIcon } from './../icons/facebook.svg';
import { ReactComponent as TwitterIcon } from './../icons/twitter.svg';

function Footer() {
  const { preferences: { data: preferencesData } } = useRouteLoaderData('app') as AppLoaderData;

  return (
    <Navbar className="mt-auto" variant="dark" bg="primary" as="footer">
      <Container>
        <Nav>
          <Nav.Item>
            <LinkContainer to="/guidelines">
              <Nav.Link className="link-light">Guidelines</Nav.Link>
            </LinkContainer>
          </Nav.Item>
        </Nav>
        <Nav className="justify-content-center">
          {preferencesData.attributes.socialURLs.map((socialURL, index) => (
            <Nav.Item>
              <Nav.Link className="link-light" href={socialURL.URL} target="_blank">
                <div className="icon">
                  {(() => {
                    switch (socialURL.socialNetwork) {
                      case 'Facebook':
                        return <FacebookIcon width="24" />;
                      case 'Twitter':
                        return <TwitterIcon width="24" />
                    }
                  })()}
                </div>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;
