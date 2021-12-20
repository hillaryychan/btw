import Container from "react-bootstrap/Container";
import Loading from "./Loading";
import Notes from "./Notes";
import PropTypes from "prop-types";
import React from "react";
import Welcome from "./Welcome";
import useApp from "../contexts/AppContext";

function Home(props) {
  const {user} = useApp();

  if (props.init) {
    return <Loading />;
  }

  return (
    <Container id="home" className="mt-2 mb-5">
      {user ? <Notes userId={user.uid} /> : <Welcome />}
    </Container>
  );
}

Home.propTypes = {
  init: PropTypes.bool
};

export default Home;
