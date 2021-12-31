import Container from "react-bootstrap/Container";
import Loading from "src/components/Loading";
import Notes from "src/components/Notes";
import React from "react";
import Welcome from "src/components/Welcome";
import useApp from "src/contexts/AppContext";

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
