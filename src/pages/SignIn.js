import "../styles.css";
import {Button, Container, Form} from "react-bootstrap";
import React, {Component} from "react";
import {signIn, signInWithGoogle} from "../utils/auth";
import Alerts from "../components/Alerts";
import isEmail from "validator/lib/isEmail";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      errors: [],
      password: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleInputChange(event) {
    const {target} = event;
    this.setState({[target.name]: target.value});
  }

  validateForm(email) {
    const errors = [];
    if (!isEmail(email)) {
      errors.push("Enter a valid email");
    }
    return errors;
  }

  submitForm(event) {
    const {email, password} = this.state;

    event.preventDefault();
    const errors = this.validateForm(email);
    if (errors.length === 0) {
      signIn(email, password).catch((error) => {
        if (error.message) {
          this.setState({errors: [error.message]});
        } else {
          this.setState({errors: ["There was an error signing in"]});
        }
      });
    } else {
      this.setState({errors});
    }
  }

  render() {
    const {email, password} = this.state;
    return (
      <Container className="mt-2 AuthForm">
        <h1 className="CenterText">Sign In</h1>
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
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <div className="CenterHorizontal">
            <Button variant="primary" type="submit" onClick={this.submitForm}>
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
      </Container>
    );
  }
}

export default SignIn;
