import React from "react";
import icon from "./../icon.svg";
import { Image } from "react-bootstrap";

function Guidelines() {
  return (
    <>
      <h2>Icon</h2>
      <Image src={icon} fluid style={{ maxWidth: `${(1161 / 3840) * 100}%` }} />
    </>
  );
}

export default Guidelines;
