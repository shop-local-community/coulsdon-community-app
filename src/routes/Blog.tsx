import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useLoaderData } from "react-router-dom";
import axios from "axios";
import { Blog as BlogComponent, Seo } from "../components";
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
      <BlogComponent blog={blogData} />
    </Container>
  );
}

export default Blog;
