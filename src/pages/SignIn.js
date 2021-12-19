import "../styles.css";
import {Button, Container, Form} from "react-bootstrap";
import React, {useCallback, useRef, useState} from "react";
import {signIn, signInWithGoogle} from "../utils/auth";
import Alerts from "../components/Alerts";
import isEmail from "validator/lib/isEmail";

function validateForm(email) {
  const errors = [];
  if (!isEmail(email)) {
    errors.push("Enter a valid email");
  }
  return errors;
}

export default function SignIn() {
  const [errors, setErrors] = useState([]);
  const emailInput = useRef("");
  const passwordInput = useRef("");

  const submitForm = useCallback((event) => {
    const email = emailInput.current.value;
    const password = passwordInput.current.value;

    event.preventDefault();
    const validationErrors = validateForm(email);
    if (validationErrors.length === 0) {
      signIn(email, password).catch((error) => {
        if (error.message) {
          setErrors([error.message]);
        } else {
          setErrors(["There was an error signing in"]);
        }
      });
    } else {
      setErrors(validationErrors);
    }
  });

  return (
    <Container className="mt-2">
      <div className="AuthForm">
        <h1 className="CenterText">Sign In</h1>
        <Form>
          <Alerts errors={errors} />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailInput}
              name="email"
              type="email"
              placeholder="email@email.com"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passwordInput}
              name="password"
              type="password"
              placeholder="password"
            />
          </Form.Group>
          <div className="CenterHorizontal">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Sign in
            </Button>
          </div>
        </Form>
        <hr />
        <div className="CenterHorizontal">
          <Button
            variant="outline-primary"
            type="submit"
            onClick={signInWithGoogle}
          >
            Sign in with Google
          </Button>
        </div>
      </div>
    </Container>
  );
}
