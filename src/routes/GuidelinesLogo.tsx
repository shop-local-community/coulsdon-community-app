import React from "react";
import logo from "./../logo.svg";
import { Image } from "react-bootstrap";

function Guidelines() {
  return (
    <>
      <h2>Logo</h2>
      <Image src={logo} alt="Coulsdon Community Partnership" fluid />
    </>
  );
}

export default Guidelines;
