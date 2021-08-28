import {Button, Container, Form} from "react-bootstrap";
import React, {Component} from "react";
import {signInWithGoogle, signUp} from "../utils/auth";
import Alerts from "../components/Alerts";
import isEmail from "validator/lib/isEmail";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: [],
      password1: "",
      password2: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange(event) {
    const {target} = event;
    this.setState({[target.name]: target.value});
  }

  validateForm(email, password1, password2) {
    const errors = [];
    if (!isEmail(email)) {
      errors.push("Enter a valid email");
    }
    if (password1.length < 6) {
      errors.push("Passwords must be at least 6 character");
    }
    if (password1 !== password2) {
      errors.push("Passwords do not match");
    }
    return errors;
  }

  submitForm(event) {
    const {email, password1, password2} = this.state;

    event.preventDefault();
    const errors = this.validateForm(email, password1, password2);
    if (errors.length === 0) {
      signUp(email, password1);
      this.setState({errors: []});
    } else {
      this.setState({errors});
    }
  }

  render() {
    const {email, password1, password2} = this.state;
    return (
      <Container className="mt-2">
        <h1>Sign Up</h1>
        <Form>
          <Alerts errors={this.state.errors} />
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={this.handleInputChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password1"
              type="password"
              placeholder="Password"
              value={password1}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Re-enter password</Form.Label>
            <Form.Control
              name="password2"
              type="password"
              placeholder="Re-enter password"
              value={password2}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={this.submitForm}>
            Sign up
          </Button>
        </Form>
        <hr />
        <Button
          variant="outline-primary"
          type="submit"
          onClick={signInWithGoogle}
        >
          Sign in with Google
        </Button>
      </Container>
    );
  }
}
export default SignUp;
