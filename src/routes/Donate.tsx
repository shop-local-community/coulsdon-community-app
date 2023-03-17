import React from "react";
import { Container } from "react-bootstrap";
import { Seo } from "../components";

function Donate() {
  return (
    <Container className="page">
      <Seo
        title="Get Involved"
        description="Get involved and make a difference in your community with Coulsdon Community Partnership. Find out how to donate and support our charity as a business or individual, and discover the many opportunities for volunteering and making a positive impact on the local area."
      />
      <h1>Get Involved</h1>
      <p className="lead">Coulsdon Community Partnership is a charity organization based in Coulsdon, UK. There are several ways for individuals and businesses to donate and support the organization.</p>
    </Container>
  );
}

export default Donate;
