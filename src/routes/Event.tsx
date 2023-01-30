import React from 'react';
import { Container, Image } from 'react-bootstrap';
import useEventbrite from 'react-eventbrite-popup-checkout';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Seo } from '../components';
import { EventResponse } from '../schemas';

export type EventLoaderData = EventResponse;

export async function eventLoader({ params }: LoaderFunctionArgs): Promise<EventLoaderData> {
  try {
    const response = await axios.get<EventResponse>(`/events/${params.slug}?populate=*`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function Event() {
  const { data: eventData } = useLoaderData() as EventLoaderData;
  const eventbrite = useEventbrite({
    eventId: eventData.attributes.eventbriteEventId || '',
    modal: false,
    iFrameAutoAdapt: 100
  });
  const startDate = new Date(eventData.attributes.start);
  const endDate = new Date(eventData.attributes.end);

  return (
    <Container className="page">
      <Seo title="Events" description="Check out the events we are planning for this year." />
      <h1>
        {eventData.attributes.logo.data ? (
          <Image src={eventData.attributes.logo.data.attributes.url} alt={eventData.attributes.logo.data.attributes.alternativeText} />
        ) : eventData.attributes.title}
      </h1>
      <p className="lead text-center">Starts on {startDate.toLocaleDateString(undefined, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })} from {startDate.toLocaleTimeString(undefined, {
        hour: 'numeric',
        hour12: true
      })} to {endDate.toLocaleTimeString(undefined, {
        hour: 'numeric',
        hour12: true,
        timeZoneName: 'short'
      })}.</p>
      {eventData.attributes.eventbriteEventId && eventbrite && (
        <div id={eventbrite.id} />
      )}
    </Container>
  );
}

export default Event;
