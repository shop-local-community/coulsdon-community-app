import React from 'react';
import logo from './../logo.svg';
import { Image } from 'react-bootstrap';
import { Seo } from '../components';

function Home() {
  return (
    <>
      <Seo />
      <Image src={logo} alt="Coulsdon Community Partnership" fluid />
    </>
  );
}

export default Home;
