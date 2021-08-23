import Container from "react-bootstrap/Container";
import Notes from "./Notes";
import React from "react";
import Welcome from "./Welcome";
import {isUserSignedIn} from "./Authentication";

function Home() {
  const isSignedIn = isUserSignedIn();
  return <>{isSignedIn
    ? <Notes />
    : <Welcome />}</>;
}

function HomeContainer() {
  return <Container id="home" className="mt-2"></Container>;
}

export {Home};
export default HomeContainer;
