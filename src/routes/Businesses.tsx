import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import { Coordinate, Map, Marker, OverlayLayer } from "@jetblack/map";
import axios from "axios";
import { Seo } from "../components";
import { BusinessListResponse } from "../schemas";
import { ReactComponent as LocationPinIcon } from "./../icons/location-pin-duotone.svg";

export type BusinessesLoaderData = BusinessListResponse;

export async function businessesLoader(): Promise<BusinessesLoaderData> {
  try {
    const response = await axios.get<BusinessListResponse>(
      "/businesses?sort=name&populate=*"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

function Businesses() {
  const { data: businessesData } = useLoaderData() as BusinessesLoaderData;

  const Coulsdon: Coordinate = {
    latitude: 51.320921,
    longitude: -0.13820
  }

  return (
    <>
      <Container className="page">
        <Seo
          title="Businesses"
          description="Coulsdon Community Partnership brings together local businesses to create a vibrant and thriving community in Coulsdon. Our members offer a wide range of products and services, from delicious food and drink to quality health and beauty treatments. Discover Coulsdon's hidden gems and support your local community by shopping with us. Whether you're a resident or a visitor, there's something for everyone in Coulsdon. Shop local with Coulsdon Community Partnership today."
        />
        <h1>Businesses</h1>
        <p className="lead">
          Looking to support your local community while discovering some of the best businesses in Coulsdon? Look no further than Coulsdon Community Partnership. Our members offer a diverse range of products and services, from tasty treats to essential services, and everything in between. By shopping with us, you'll be supporting local businesses and helping to create a thriving community in Coulsdon. Plus, you'll have the chance to discover some hidden gems and connect with fellow community members. Whether you're a resident or a visitor, there's something for everyone with Coulsdon Community Partnership. Shop local and support your community today.
        </p>
      </Container>
      <Container className="p-0" fluid>
        <Map width="100%" center={Coulsdon} zoom={18}>
          <OverlayLayer>
            {businessesData.map((business) => {
              const address: Coordinate = Coulsdon;
              return (
                <Marker key={business.id} coordinate={address} render={point => {
                  return (
                    <LocationPinIcon height="24" />
                  );
                }} />
              );
            })}
          </OverlayLayer>
        </Map>
      </Container>
      <Container className="page">
        {businessesData.length ? (
          <Row className="g-3" xs={1} sm={2} md={3}>
            {businessesData.map((business) => (
              <Col key={business.id}>
                <Card className="h-100" border="light">
                  <Card.Img
                    variant="top"
                    src={business.attributes.logo.data?.attributes.url}
                    alt={business.attributes.logo.data?.attributes.alternativeText}
                  />
                  <Card.Body>
                    <Card.Title>{business.attributes.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <p>No businesses.</p>
        )}
      </Container>
    </>
  );
}

export default Businesses;
