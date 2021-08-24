import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import NotesModalForm from "./NotesModalForm";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {"show": false};
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    return this.setState({"show": false});
  }

  handleShow() {
    return this.setState({"show": true});
  }

  render() {
    return (
      <>
        <h1>My Notes</h1>
        <Button variant="primary" onClick={this.handleShow}>
          New Note
        </Button>

        <NotesModalForm handleClose={this.handleClose} show={this.state.show} />
      </>
    );
  }
}

export default Notes;
