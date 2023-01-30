import React from 'react';
import { Container } from 'react-bootstrap';
import { useRouteLoaderData } from 'react-router-dom';
import { Seo } from '../components';
import { AppLoaderData } from '../App';

function Home() {
  const { preferences: { data: preferencesData } } = useRouteLoaderData('app') as AppLoaderData;

  return (
    <Container className="page">
      <Seo />
      <h1>Mission Statement</h1>
      {preferencesData.attributes.missionStatement.split('\n').map((p, i) => (
        <p key={i} className="lead">{p}</p>
      ))}
    </Container>
  );
}

export default Home;
