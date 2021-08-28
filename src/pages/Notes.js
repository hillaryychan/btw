import "firebase/firestore";
import {Button, Col, Form, Row} from "react-bootstrap";
import React, {Component} from "react";
import {canShow, createDoc} from "../utils/helper";
import NotesList from "../components/NotesList";
import NotesModal from "../components/NotesModal";
import firebase from "firebase/app";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      initNotes: true,
      notes: [],
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.filterNotes = this.filterNotes.bind(this);
  }

  handleClose() {
    return this.setState({show: false});
  }

  handleShow() {
    return this.setState({show: true});
  }

  addNote(note) {
    const db = firebase.firestore();
    db.collection("notes").
      add(note).
      then((docRef) => {
        this.setState((prevState) => ({
          notes: [
            createDoc(docRef.id, note, this.state.filter),
            ...prevState.notes
          ]
        }));
      }).
      catch(() => {
        // TODO: error handling
      });
  }

  deleteNote(idx, docRef) {
    const db = firebase.firestore();
    db.collection("notes").
      doc(docRef).
      delete().
      then(() => {
        const {notes} = this.state;
        notes.splice(idx, 1);
        this.setState([notes]);
      }).
      catch(() => {
        // TODO: error handling
      });
  }

  updateNote(idx, docRef, note) {
    const db = firebase.firestore();
    db.collection("notes").
      doc(docRef).
      update(note).
      then(() => {
        const {notes} = this.state;
        notes[idx] = createDoc(docRef, note, this.state.filter);
        this.setState([notes]);
      }).
      catch(() => {
        // TODO: error handling
      });
  }

  filterNotes(person) {
    let {notes} = this.state;
    notes = notes.map((doc) => {
      // Show note if person undefined or falsy
      doc.show = canShow(doc.data, person);
      return doc;
    });
    this.setState({filter: person, notes});
  }

  componentDidMount() {
    const retrievedNotes = [];
    const db = firebase.firestore();
    db.collection("notes").
      orderBy("lastModified", "desc").
      limit(50).
      get().
      then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          retrievedNotes.push(createDoc(doc.id, doc.data(), this.state.filter));
        });
      }).
      then((_) => {
        this.setState({initNotes: false, notes: retrievedNotes});
      });
  }

  render() {
    const audienceSet = new Set();
    this.state.notes.map((doc) => doc.data.audience.map((person) => audienceSet.add(person)));
    return (
      <>
        <h1>My Notes</h1>
        <Row>
          <Col>
            <Form.Label column>Filter by audience</Form.Label>
            <Form.Select>
              <option value="none" onClick={() => this.filterNotes("")}>
                No audience filter
              </option>
              {[...audienceSet].map((person, idx) => <option
                key={idx}
                value={person}
                onClick={() => this.filterNotes(person)}
              >
                {person}
              </option>)}
            </Form.Select>{" "}
          </Col>
          <Col>
            <Button
              variant="primary"
              onClick={this.handleShow}
              className="float-end"
            >
              New Note
            </Button>
          </Col>
        </Row>
        <NotesModal
          handleClose={this.handleClose}
          show={this.state.show}
          action="Create Note"
          doNoteAction={this.addNote}
        />
        <hr />
        <NotesList
          initNotes={this.state.initNotes}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          updateNote={this.updateNote}
        />
      </>
    );
  }
}

export default Notes;
