import React from 'react';
import { Card, Col, ListGroup, Row } from 'react-bootstrap';

function Guidelines() {
  return (
    <>
      <h2>Colours</h2>
      <Card bg="primary" text="white">
        <Card.Body>
          <Card.Title>Pantone</Card.Title>
          <Card.Subtitle>P 76-16 C</Card.Subtitle>
          <Card.Text>CMYK Coated</Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Row>
              <Col xs={6} sm={5} md={4} lg={3} xl={2} xxl={1}>Lab</Col>
              <Col className="text-muted" xs={6} sm={7} md={8} lg={9} xl={10} xxl={11}>36.72 57.51 -2.24</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} sm={5} md={4} lg={3} xl={2} xxl={1}>sRGB</Col>
              <Col className="text-muted" xs={6} sm={7} md={8} lg={9} xl={10} xxl={11}>158 24 93</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} sm={5} md={4} lg={3} xl={2} xxl={1}>CMYK</Col>
              <Col className="text-muted" xs={6} sm={7} md={8} lg={9} xl={10} xxl={11}>0 100 0 35</Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col xs={6} sm={5} md={4} lg={3} xl={2} xxl={1}>HEX</Col>
              <Col className="text-muted" xs={6} sm={7} md={8} lg={9} xl={10} xxl={11}>9E185D</Col>
            </Row>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

export default Guidelines;
