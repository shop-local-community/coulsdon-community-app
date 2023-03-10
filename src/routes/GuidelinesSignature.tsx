import React from "react";
import { Image } from "react-bootstrap";
import logo from "./../logo.svg";

function Guidelines() {
  return (
    <>
      <h2>Signature</h2>
      <strong>&nbsp;</strong>
      <a href="https://coulsdonpartnership.org">
        <Image src={logo} alt="Coulsdon Community Partnership" fluid />
      </a>
    </>
  );
}

export default Guidelines;
