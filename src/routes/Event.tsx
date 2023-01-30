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

  let style: React.CSSProperties = {
    backgroundColor: 'var(--bs-body-bg)',
    color: 'var(--bs-body-color)',
    fontFamily: 'var(--bs-body-font-family)'
  };

  if (eventData.attributes.theme) {
    if (eventData.attributes.theme.bodyBg) style = {
      ...style,
      '--bs-body-bg': eventData.attributes.theme.bodyBg
    } as React.CSSProperties;

    if (eventData.attributes.theme.bodyColor) style = {
      ...style,
      '--bs-body-color': eventData.attributes.theme.bodyColor
    } as React.CSSProperties;

    if (eventData.attributes.theme.fontFamily) {
      switch (eventData.attributes.theme.fontFamily) {
        case 'Asul':
          style = {
            ...style,
            '--bs-body-font-family': `'${eventData.attributes.theme.fontFamily}', sans-serif`
          } as React.CSSProperties;
          break;
        case 'Freckle Face':
        case 'Mali':
          style = {
            ...style,
            '--bs-body-font-family': `'${eventData.attributes.theme.fontFamily}', cursive`
          } as React.CSSProperties;
          break;
        default:
          style = {
            ...style,
            '--bs-body-font-family': `'${eventData.attributes.theme.fontFamily}'`
          } as React.CSSProperties;
      }
    }
  }

  return (
    <div style={style as React.CSSProperties}>
      <Container className="page">
        <Seo title={eventData.attributes.seo.metaTitle} description={eventData.attributes.seo.metaDescription} />
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
        {eventData.attributes.description.split('\n').map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        {eventData.attributes.eventbriteEventId && eventbrite && (
          <div id={eventbrite.id} />
        )}
      </Container>
    </div>
  );
}

export default Event;
