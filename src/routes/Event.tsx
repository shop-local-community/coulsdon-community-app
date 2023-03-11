import React from "react";
import { Container, Image } from "react-bootstrap";
import useEventbrite from "react-eventbrite-popup-checkout";
import ReactMarkdown from "react-markdown";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import axios from "axios";
import { Seo } from "../components";
import { EventResponse } from "../schemas";
import { themeToCssProps } from "../theme";

export type EventLoaderData = EventResponse;

export async function eventLoader({
  params,
}: LoaderFunctionArgs): Promise<EventLoaderData> {
  try {
    const response = await axios.get<EventResponse>(
      `/events/${params.slug}?populate=*`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

function Event() {
  const { data: eventData } = useLoaderData() as EventLoaderData;
  const eventbrite = useEventbrite({
    eventId: eventData.attributes.eventbriteEventId || "",
    modal: false,
    iFrameAutoAdapt: 100,
  });

  const startDate = new Date(eventData.attributes.start);
  const endDate = new Date(eventData.attributes.end);

  const style = themeToCssProps(eventData.attributes.theme);

  return (
    <div className="theme" style={style as React.CSSProperties}>
      <Container className="page">
        <Seo
          title={eventData.attributes.seo.metaTitle}
          description={eventData.attributes.seo.metaDescription}
        />
        <h1>
          {eventData.attributes.logo.data ? (
            <Image
              src={eventData.attributes.logo.data.attributes.url}
              alt={eventData.attributes.logo.data.attributes.alternativeText}
            />
          ) : (
            eventData.attributes.title
          )}
        </h1>
        <p className="lead text-center">
          Starts on{" "}
          {startDate.toLocaleDateString(undefined, {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          from{" "}
          {startDate.toLocaleTimeString(undefined, {
            hour: "numeric",
            hour12: true,
          })}{" "}
          to{" "}
          {endDate.toLocaleTimeString(undefined, {
            hour: "numeric",
            hour12: true,
            timeZoneName: "short",
          })}
          .
        </p>
        <ReactMarkdown>{eventData.attributes.description}</ReactMarkdown>
        {eventData.attributes.eventbriteEventId && eventbrite && (
          <div id={eventbrite.id} />
        )}
      </Container>
    </div>
  );
}

export default Event;
