import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Seo } from '../components';
import { EventListResponse } from '../schemas';

export type EventsLoaderData = EventListResponse;

export async function eventsLoader(): Promise<EventsLoaderData> {
  try {
    const response = await axios.get<EventListResponse>('/events?sort=start&populate=*');
    return response.data;
  } catch (error) {
    throw error;
  }
}

function Events() {
  const { data: eventsData } = useLoaderData() as EventsLoaderData;

  return (
    <Container className="page">
      <Seo title="Events" description="Check out the events we are planning for this year." />
      <h1>Events</h1>
      <p className="lead">Check out the events we are planning for this year, reserve your tickets for our ever popular Halloween Trick or Treat Trail, or help us to bring some Christmas cheer to town with our new event Coulsdon's Yuletide Magic.</p>
      {eventsData.length ? (
        <Row className="g-3" xs={1} sm={2} md={3}>
          {eventsData.map(event => (
            <Col key={event.id}>
              <Card border="light">
                <Link to={`/events/${event.attributes.slug}`} className="stretched-link" />
                <Card.Img src={event.attributes.cover.data.attributes.url} alt={event.attributes.cover.data.attributes.alternativeText} />
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <p>No events.</p>
      )}
    </Container>
  );
}

export default Events;
