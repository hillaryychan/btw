import {isUserSignedIn, signIn} from "./Authentication";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import React from "react";

function Welcome() {
  return (
    <>
      <h1>
        Welcome to{" "}
        <b>
          <i>btw</i>
        </b>
        !
      </h1>
      <p>
        Keep track of <b>what</b> you want to talk about with <b>whom</b> you
        want to talk to.
      </p>
      <Button variant="outline-primary" onClick={() => signIn()}>
        Sign in with Google
      </Button>
    </>
  );
}

function Notes() {
  return <h1>My Notes</h1>;
}

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
