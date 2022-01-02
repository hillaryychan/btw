import Container from "react-bootstrap/Container";
import Loading from "./Loading";
import Notes from "./Notes";
import React from "react";
import Welcome from "./Welcome";
import useApp from "../contexts/AppContext";

export type HomeProps = {
  init: boolean;
};

export default function Home({init}: HomeProps): JSX.Element {
  const {user} = useApp();

  if (init) {
    return <Loading />;
  }

  return (
    <Container id="home" className="mt-2 mb-5">
      {user ? <Notes userId={user.uid} /> : <Welcome />}
    </Container>
  );
}
