import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { Seo } from "../components";
import { EventListResponse } from "../schemas";
import { themeToCssProps } from "../theme";

export type EventsLoaderData = EventListResponse;

export async function eventsLoader(): Promise<EventsLoaderData> {
  try {
    const response = await axios.get<EventListResponse>(
      "/events?sort=start&populate=*"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

function Events() {
  const { data: eventsData } = useLoaderData() as EventsLoaderData;

  return (
    <Container className="page">
      <Seo
        title="Events"
        description="Check out the events we are planning for this year."
      />
      <h1>Events</h1>
      <p className="lead">
        Check out the events we are planning for this year, reserve your tickets
        for our ever popular Halloween Trick or Treat Trail, or help us to bring
        some Christmas cheer to town with our new event Coulsdon's Yuletide
        Magic.
      </p>
      {eventsData.length ? (
        <Row className="g-3" xs={1} sm={2} md={3}>
          {eventsData.map((event) => {
            const startDate = new Date(event.attributes.start);

            const style = themeToCssProps(event.attributes.theme);

            return (
              <Col key={event.id}>
                <Card className="h-100" style={style as React.CSSProperties}>
                  <Card.Img
                    variant="top"
                    src={event.attributes.cover.data.attributes.url}
                    alt={event.attributes.cover.data.attributes.alternativeText}
                  />
                  <Card.Body>
                    <Card.Text>
                      {event.attributes.seo.metaDescription}
                    </Card.Text>
                    <div className="d-flex justify-content-between mt-auto">
                      <LinkContainer to={`/events/${event.attributes.slug}`}>
                        <Button
                          className="stretched-link"
                          variant="outline-primary"
                          size="sm"
                        >
                          View
                        </Button>
                      </LinkContainer>
                      <small>
                        {startDate.toLocaleDateString(undefined, {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <p>No events.</p>
      )}
    </Container>
  );
}

export default Events;
