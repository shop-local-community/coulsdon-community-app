import React from "react";
import { Footer, Header } from "./components";
import "./App.scss";
import { Container } from "react-bootstrap";

function Error() {
  return (
    <>
      <Header />
      <Container className="page my-auto">
        <h1>Error</h1>
        <p className="text-center">Sorry, an unexpected error has occurred.</p>
      </Container>
      <Footer />
    </>
  );
}

export default Error;
