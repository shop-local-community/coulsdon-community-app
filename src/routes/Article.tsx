import React from 'react';
import { Container, Image } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import { LoaderFunctionArgs, useLoaderData } from 'react-router-dom';
import axios from 'axios';
import { Seo } from '../components';
import { ArticleResponse } from '../schemas';

export type ArticleLoaderData = ArticleResponse;

export async function articleLoader({ params }: LoaderFunctionArgs): Promise<ArticleLoaderData> {
  try {
    const response = await axios.get<ArticleResponse>(`/articles/${params.slug}?populate=*`);
    return response.data;
  } catch (error) {
    throw error;
  }
}

function Article() {
  const { data: articleData } = useLoaderData() as ArticleLoaderData;

  const publishedAtDate = new Date(articleData.attributes.publishedAt);

  return (
    <Container className="page">
      <Seo title={articleData.attributes.seo.metaTitle} description={articleData.attributes.seo.metaDescription} />
      <h1>{articleData.attributes.title}</h1>
      <p className="text-center">{publishedAtDate.toLocaleDateString(undefined, {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })}</p>
      <Image className="mb-3" src={articleData.attributes.image.data.attributes.url} alt={articleData.attributes.image.data.attributes.alternativeText} fluid />
      <ReactMarkdown>{articleData.attributes.content}</ReactMarkdown>
    </Container>
  );
}

export default Article;
