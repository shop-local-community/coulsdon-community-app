import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Seo } from '../components';
import { EventListResponse } from '../schemas';

export type BlogLoaderData = EventListResponse;

export async function blogLoader(): Promise<BlogLoaderData> {
  try {
    const response = await axios.get<EventListResponse>('/articles?populate=*');
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
      <h1>Blog</h1>
    </Container>
  );
}

export default Blog;
