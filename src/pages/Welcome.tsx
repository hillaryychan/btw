import "../styles.css";
import Button from "react-bootstrap/Button";
import React from "react";
import {useNavigate} from "react-router-dom";

export default function Welcome() {
  const navigate = useNavigate();

  function handleClick(path: string) {
    navigate(path);
  }

  return (
    <div className="Welcome">
      <h1>
        Welcome to <span className="Brand">btw</span>!
      </h1>
      <p>
        Keep track of <b>what</b> you want to talk about with <b>whom</b> you
        want to talk to.
      </p>
      <Button variant="outline-primary" onClick={() => handleClick("signup")}>
        Get Started
      </Button>
    </div>
  );
}
