import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Article } from "../schemas";

type BlogProps = {
  blog: Article[];
  featured?: boolean;
}

function Blog(props: BlogProps) {
  const featured = props.featured === undefined ? true : false;

  return (
    <Row className="g-3">
      {props.blog.map((article, index) => {
        const publishedAtDate = new Date(article.attributes.publishedAt);

        if (index === (featured ? 0 : -1)) {
          return (
            <Col key={article.id} xs={12}>
              <Card>
                <Card.Img
                  src={article.attributes.image.data.attributes.url}
                  alt={article.attributes.image.data.attributes.alternativeText}
                />
                <Card.ImgOverlay className="bg-blur-3">
                  <Card.Title>{article.attributes.title}</Card.Title>
                  <Card.Text>
                    {article.attributes.seo.metaDescription}
                  </Card.Text>
                  <div className="d-flex justify-content-between mt-auto">
                    <LinkContainer to={`/blog/${article.attributes.slug}`}>
                    <Button
                      className="stretched-link"
                      variant="link"
                      size="sm"
                    >
                      Continue reading&hellip;
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
                </Card.ImgOverlay>
              </Card>
            </Col>
          );
        }

        return (
          <Col key={article.id} className="d-flex" xs={12} md={6}>
            <Card className="w-100">
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
                      variant="link"
                      size="sm"
                    >
                      Continue reading&hellip;
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
  );
}

export default Blog;
