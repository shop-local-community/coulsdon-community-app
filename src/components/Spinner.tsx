import React from "react";
import { Image, Spinner as BSSpinner } from "react-bootstrap";
import spinner from "./../spinner.svg";

function Spinner() {
  return (
    <div className="d-flex justify-content-center">
      <BSSpinner className="m-5" role="status">
        <Image src={spinner} fluid />
        <span className="visually-hidden">Loading&hellip;</span>
      </BSSpinner>
    </div>
  );
}

export default Spinner;
