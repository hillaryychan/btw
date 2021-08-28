import {Container, Spinner} from "react-bootstrap";
import React from "react";
import styles from "../utils/styles";

function Loading() {
  return (
    <Container id="home" className="mt-2">
      <div style={styles.Center}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    </Container>
  );
}

export default Loading;
