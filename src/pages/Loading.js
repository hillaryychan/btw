import "../styles.css";
import {Container, Spinner} from "react-bootstrap";
import React from "react";

function Loading() {
  return (
    <Container id="home" className="mt-2">
      <div className="Center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Container>
  );
}

export default Loading;
