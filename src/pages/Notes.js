import "firebase/firestore";
import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import NotesList from "../components/NotesList";
import NotesModal from "../components/NotesModal";
import {createDoc} from "../utils/helper";
import firebase from "firebase/app";

class Notes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initNotes: true,
      notes: [],
      show: false
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.addNote = this.addNote.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
    this.updateNote = this.updateNote.bind(this);
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
          notes: [createDoc(docRef.id, note), ...prevState.notes]
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
        notes[idx] = createDoc(docRef, note);
        this.setState([notes]);
      }).
      catch(() => {
        // TODO: error handling
      });
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
          retrievedNotes.push(createDoc(doc.id, doc.data()));
        });
      }).
      then((_) => {
        this.setState({initNotes: false, notes: retrievedNotes});
      });
  }

  render() {
    return (
      <>
        <h1>My Notes</h1>
        <Button variant="primary" onClick={this.handleShow}>
          New Note
        </Button>
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
