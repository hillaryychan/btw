import "firebase/firestore";
import React, {Component} from "react";
import Button from "react-bootstrap/Button";
import NotesList from "../components/NotesList";
import NotesModal from "../components/NotesModal";
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
  }

  handleClose() {
    return this.setState({show: false});
  }

  handleShow() {
    return this.setState({show: true});
  }

  addNote(note) {
    return this.setState((prevState) => ({
      notes: [note, ...prevState.notes]
    }));
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

  componentDidMount() {
    const retrievedNotes = [];
    const db = firebase.firestore();
    db.collection("notes").
      orderBy("lastModified", "desc").
      limit(50).
      get().
      then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          retrievedNotes.push({data: doc.data(), ref: doc.id});
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
          addNote={this.addNote}
        />
        <hr />
        <NotesList
          initNotes={this.state.initNotes}
          notes={this.state.notes}
          deleteNote={this.deleteNote}
        />
      </>
    );
  }
}

export default Notes;
