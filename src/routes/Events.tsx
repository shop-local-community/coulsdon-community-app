import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';

type EventsLoaderData = {
  events: EventData[]
}

type EventData = {}

export async function eventsLoader(): Promise<EventsLoaderData> {
  const events: EventData[] = [];
  return { events };
}

function Events() {
  const { events } = useLoaderData() as EventsLoaderData;

  return (
    <Container className="page">
      <h1>Events</h1>
      <p className="lead">Check out the events we are planning for this year, reserve your tickets for our ever popular Halloween Trick or Treat Trail, or help us to bring some Christmas cheer to town with our new event Coulsdon's Yuletide Magic.</p>
      {events.length ? null : (
        <p>No events.</p>
      )}
    </Container>
  );
}

export default Events;
