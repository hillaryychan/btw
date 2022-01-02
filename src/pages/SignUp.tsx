import "../styles.css";
import {Button, Container, Form} from "react-bootstrap";
import React, {useCallback, useEffect, useRef, useState} from "react";
import {signInWithGoogle, signUp} from "../utils/auth";
import Alerts from "../components/Alerts";
import {ErrorMessages} from "../types";
import isEmail from "validator/lib/isEmail";
import useApp from "../contexts/AppContext";
import {useHistory} from "react-router";

function validateForm(email: string, password1: string, password2: string) {
  const errors = [];
  if (!isEmail(email)) {
    errors.push("Enter a valid email");
  }
  if (password1.length < 6) {
    errors.push("Passwords must be at least 6 characters");
  }
  if (password1 !== password2) {
    errors.push("Passwords do not match");
  }
  return errors;
}

export default function SignUp() {
  const {user} = useApp();
  const history = useHistory();

  const [errors, setErrors] = useState<ErrorMessages>([]);
  const emailInput = useRef<HTMLInputElement>(null);
  const password1Input = useRef<HTMLInputElement>(null);
  const password2Input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user]);

  const submitForm = useCallback(
    (event) => {
      const email = emailInput.current?.value ?? "";
      const password1 = password1Input.current?.value ?? "";
      const password2 = password2Input.current?.value ?? "";

      event.preventDefault();
      const validationErrors = validateForm(email, password1, password2);
      if (validationErrors.length === 0) {
        signUp(email, password1);
        setErrors([]);
      } else {
        setErrors(validationErrors);
      }
    },
    [emailInput, password1Input, password2Input]
  );

  return (
    <Container className="mt-2">
      <div className="AuthForm">
        <h1 className="CenterText">Sign Up</h1>
        <Form>
          <Alerts errors={errors} />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailInput}
              name="email"
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={password1Input}
              name="password1"
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Re-enter password</Form.Label>
            <Form.Control
              ref={password2Input}
              name="password2"
              type="password"
              placeholder="Re-enter password"
            />
          </Form.Group>
          <div className="CenterHorizontal">
            <Button variant="primary" type="submit" onClick={submitForm}>
              Sign up
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
