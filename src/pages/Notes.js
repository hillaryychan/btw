import "firebase/firestore";
import {Button, Col, Form, Row} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {canShow, createDoc} from "../utils/helper";
import NotesList from "../components/NotesList";
import NotesModal from "../components/NotesModal";
import firebase from "firebase/app";
import useApp from "../contexts/AppContext";

const MAX_NOTES = 50;
const DEFAULT_FILTER = "";

function getAudience(notes) {
  const audienceSet = new Set();
  notes.map((doc) => doc.data.audience.map((person) => audienceSet.add(person)));
  return [...audienceSet].sort();
}

export default function Notes() {
  const {user} = useApp();
  const [initNotes, setInitNotes] = useState(true);
  const [modalShowState, setModalShowState] = useState(false);
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState(DEFAULT_FILTER);

  const filterNotes = useCallback((filterBy) => {
    let newNotes = notes;
    let showable = 0;
    newNotes = newNotes.map((doc) => {
      // Show note if person undefined or falsy
      const show = canShow(doc.data, filterBy);
      doc.show = show;
      if (show) {
        showable += 1;
      }
      return doc;
    });
    if (showable === 0 && filter !== DEFAULT_FILTER) {
      filterNotes(DEFAULT_FILTER);
    } else {
      setNotes(newNotes);
      setFilter(filterBy);
    }
  });

  const showModal = useCallback(() => {
    setModalShowState(true);
  });

  const closeModal = useCallback(() => {
    setModalShowState(false);
  });

  const deleteNote = useCallback((idx, docRef) => {
    const db = firebase.firestore();
    db.collection(user.uid).
      doc(docRef).
      delete().
      then(() => {
        const newNotes = notes;
        newNotes.splice(idx, 1);
        filterNotes(filter);
        setNotes(newNotes);
      }).
      catch((error) => {
        alert(error);
      });
  });

  const addNote = useCallback((note) => {
    if (notes.length >= MAX_NOTES) {
      alert(`We cannot create your note because we have limited the no. of notes per account to ${MAX_NOTES}.

We apologise for any inconvenience this may have caused.`);
    } else {
      const db = firebase.firestore();
      db.collection(user.uid).
        add(note).
        then((docRef) => {
          setNotes([createDoc(docRef.id, note, filter), ...notes]);
        }).
        catch((error) => {
          alert(error);
        });
    }
  });

  const updateNote = useCallback((idx, docRef, note) => {
    const db = firebase.firestore();
    db.collection(user.uid).
      doc(docRef).
      update(note).
      then(() => {
        const newNotes = notes;
        newNotes[idx] = createDoc(docRef, note, filter);
        setNotes([...newNotes]);
      }).
      catch((error) => {
        alert(error);
      });
  });

  useEffect(() => {
    const retrievedNotes = [];
    const db = firebase.firestore();
    db.collection(user.uid).
      orderBy("lastModified", "desc").
      limit(MAX_NOTES).
      get().
      then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          retrievedNotes.push(createDoc(doc.id, doc.data(), filter));
        });
      }).
      then((_) => {
        setInitNotes(false);
        setNotes(retrievedNotes);
      });
  }, []);

  const audienceList = getAudience(notes);
  return (
    <>
      <h1>My Notes</h1>
      <Row>
        <Col>
          <Form.Label column>Filter by audience</Form.Label>
          <Form.Select
            value={filter}
            onChange={(event) => filterNotes(event.target.value)}
          >
            <option value={DEFAULT_FILTER}>No audience filter</option>
            {[...audienceList].map((person, idx) => <option key={idx} value={person}>
              {person}
            </option>)}
          </Form.Select>{" "}
        </Col>
        <Col>
          <Button variant="primary" onClick={showModal} className="float-end">
            New Note
          </Button>
        </Col>
      </Row>
      <NotesModal
        handleClose={closeModal}
        show={modalShowState}
        actionName="Create Note"
        submitAction={addNote}
      />
      <hr />
      <NotesList
        initNotes={initNotes}
        notes={notes}
        deleteNote={deleteNote}
        updateNote={updateNote}
      />
    </>
  );
}
