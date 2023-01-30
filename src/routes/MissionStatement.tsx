import React from "react";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import { useRouteLoaderData } from "react-router-dom";
import { Seo } from "../components";
import { AppLoaderData } from "../App";

function MissionStatement() {
  const {
    preferences: { data: preferencesData },
  } = useRouteLoaderData("app") as AppLoaderData;

  return (
    <Container className="page">
      <Seo />
      <h1>Mission Statement</h1>
      <ReactMarkdown>
        {preferencesData.attributes.missionStatement}
      </ReactMarkdown>
    </Container>
  );
}

export default MissionStatement;
