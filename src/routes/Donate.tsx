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
      <h2>Fundraising</h2>
      <p>You can organize a fundraising event or activity to support the charity. This could be anything from a sponsored walk or run, to a cake sale or quiz night.</p>
      <h2>Corporate sponsorship</h2>
      <p>Businesses can support the charity by sponsoring an event or making a donation.</p>
      <h2>Volunteer</h2>
      <p>You can offer your time and skills to support the work of the Coulsdon Community Partnership. This could be anything from helping to organize an event to providing practical support to individuals in need.</p>
      <h2>Gift aid</h2>
      <p>If you are a UK taxpayer, you can make your donation go further by signing up for Gift Aid. This allows the charity to claim an additional 25% of your donation from the government.</p>
    </Container>
  );
}

export default Donate;
