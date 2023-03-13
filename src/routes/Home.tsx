import React from "react";
import { Button, Card, Container, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { Blog, Seo } from "../components";
import { ArticleListResponse, EventListResponse } from "../schemas";
import { themeToCssProps } from "../theme";

export type HomeLoaderData = {
  event: EventListResponse;
  blog: ArticleListResponse;
}

export async function homeLoader(): Promise<HomeLoaderData> {
  try {
    const eventResponse = axios.get<EventListResponse>(
      "/events?sort=start&pagination[pageSize]=1&populate=*"
    );
    const blogResponse = axios.get<ArticleListResponse>(
      "/articles?populate=*&sort=publishedAt:desc"
    );
    return {
      event: (await eventResponse).data,
      blog: (await blogResponse).data
    };
  } catch (error) {
    throw error;
  }
}

function Home() {
  const {
    event: { data: eventsData },
    blog: { data: blogData },
  } = useLoaderData() as HomeLoaderData;

  let Event = null;

  if (eventsData.length > 0) {
    const eventData = eventsData[0];

    const style = themeToCssProps(eventData.attributes.theme);

    Event = (
      <Card className="mb-3" style={style as React.CSSProperties}>
        <Card.Body>
          <Card.Subtitle className="">Our Next Event</Card.Subtitle>
          <Card.Title>
            {eventsData[0].attributes.logo.data ? (
              <Image
                src={eventsData[0].attributes.logo.data.attributes.url}
                alt={eventsData[0].attributes.logo.data.attributes.alternativeText}
              />
            ) : (
              eventsData[0].attributes.title
            )}
          </Card.Title>
          <Card.Text>
            {eventsData[0].attributes.seo.metaDescription}
          </Card.Text>
          <div className="d-flex justify-content-between mt-auto">
            <LinkContainer to={`/events/${eventsData[0].attributes.slug}`}>
              <Button
                className="stretched-link"
                variant="outline-secondary"
                size="sm"
              >
                View
              </Button>
            </LinkContainer>
            <small className="text-muted">
              {(new Date(eventsData[0].attributes.start)).toLocaleDateString(undefined, {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </small>
          </div>
        </Card.Body>
      </Card>
    );
  }

  return (
    <Container className="page">
      <Seo />
      {Event}
      <Blog blog={blogData} featured={false} />
    </Container>
  );
}

export default Home;
