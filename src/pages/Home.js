import Container from "react-bootstrap/Container";
import Loading from "./Loading";
import Notes from "./Notes";
import PropTypes from "prop-types";
import React from "react";
import Welcome from "./Welcome";

function Home(props) {
  if (props.init) {
    return <Loading />;
  }

  return (
    <Container id="home" className="mt-2 mb-5">
      {props.signedIn
        ? <Notes />
        : <Welcome />}
    </Container>
  );
}

Home.propTypes = {
  init: PropTypes.bool,
  signedIn: PropTypes.bool
};

export default Home;
