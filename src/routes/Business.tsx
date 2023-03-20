import React from "react";
import { Container, Image, Nav } from "react-bootstrap";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import axios from "axios";
import { Seo, Socials } from "../components";
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
    <div className="profile-header bg-primary">
      <Seo
        title={businessData.attributes.seo.metaTitle}
        description={businessData.attributes.seo.metaDescription}
      />
      <Container className="page">
        <div className="container-inner">
          <Image
            className="media-object"
            src={businessData.attributes.logo.data?.attributes.url}
            alt={businessData.attributes.logo.data?.attributes.alternativeText}
          />
          <h1 className="profile-header-user">{businessData.attributes.name}</h1>
          <p className="profile-header-bio">{businessData.attributes.seo.metaDescription}</p>
          <Nav className="justify-content-center">
            <Socials socialUrls={businessData.attributes.socialURLs} />
          </Nav>
        </div>
      </Container>
    </div>
  );
}

export default Business;
