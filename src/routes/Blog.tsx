import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { Seo } from "../components";
import { ArticleListResponse } from "../schemas";

export type BlogLoaderData = ArticleListResponse;

export async function blogLoader(): Promise<BlogLoaderData> {
  try {
    const response = await axios.get<ArticleListResponse>(
      "/articles?populate=*&sort=publishedAt:desc"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

function Blog() {
  const { data: blogData } = useLoaderData() as BlogLoaderData;

  return (
    <Container className="page">
      <Seo title="Blog" />
      <Row className="g-3">
        {blogData.map((article, index) => {
          const publishedAtDate = new Date(article.attributes.publishedAt);

          return (
            <Col key={article.id} xs={12}>
              <Card border="light">
                <Card.Img
                  variant="top"
                  src={article.attributes.image.data.attributes.url}
                  alt={article.attributes.image.data.attributes.alternativeText}
                />
                <Card.Body>
                  <Card.Title>{article.attributes.title}</Card.Title>
                  <Card.Text>
                    {article.attributes.seo.metaDescription}
                  </Card.Text>
                  <div className="d-flex justify-content-between mt-auto">
                    <LinkContainer to={`/blog/${article.attributes.slug}`}>
                      <Button
                        className="stretched-link"
                        variant="outline-secondary"
                        size="sm"
                      >
                        View
                      </Button>
                    </LinkContainer>
                    <small className="text-muted">
                      {publishedAtDate.toLocaleDateString(undefined, {
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
    </Container>
  );
}

export default Blog;
