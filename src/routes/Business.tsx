import React from "react";
import { Container, Image } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import axios from "axios";
import { Seo } from "../components";
import { BusinessResponse } from "../schemas";

export type BusinessLoaderData = BusinessResponse;

export async function businessLoader({
  params,
}: LoaderFunctionArgs): Promise<BusinessLoaderData> {
  try {
    const response = await axios.get<BusinessResponse>(
      `/businesses/${params.slug}?populate=*`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
}

function Business() {
  const { data: businessData } = useLoaderData() as BusinessLoaderData;

  return (
    <div className="theme">
      <Container className="page">
        <Seo
          title={businessData.attributes.seo.metaTitle}
          description={businessData.attributes.seo.metaDescription}
        />
        <h1>
          {businessData.attributes.logo.data ? (
            <Image
              src={businessData.attributes.logo.data.attributes.url}
              alt={businessData.attributes.logo.data.attributes.alternativeText}
            />
          ) : (
            businessData.attributes.name
          )}
        </h1>
      </Container>
    </div>
  );
}

export default Business;
