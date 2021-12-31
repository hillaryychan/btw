import "firebase/firestore";
import {AudienceList, Note, NoteDocument} from "../types";
import {Button, Col, Form, Row} from "react-bootstrap";
import React, {useCallback, useEffect, useState} from "react";
import {canShow, createDoc} from "../utils/helper";
import NotesList from "../components/NotesList";
import NotesModal from "../components/NotesModal";
import firebase from "firebase/app";

const MAX_NOTES = 50;
const DEFAULT_FILTER = "";

export type NotesProps = {
  userId: string;
};

function getAudience(notes: NoteDocument[]): AudienceList {
  const audienceSet = new Set<string>();
  notes.map((doc) => doc.data.audience.map((person: string) => audienceSet.add(person)));
  return [...audienceSet].sort();
}

export default function Notes({userId}: NotesProps) {
  const [initNotes, setInitNotes] = useState<boolean>(true);
  const [modalShowState, setModalShowState] = useState<boolean>(false);
  const [notes, setNotes] = useState<NoteDocument[]>([]);
  const [filter, setFilter] = useState<string>(DEFAULT_FILTER);

  const filterNotes = useCallback((unfilteredNotes: NoteDocument[], filterBy: string) => {
    let showable = 0;
    const filteredNotes = unfilteredNotes.map((doc) => {
      // Show note if person undefined or falsy
      const show = canShow(doc.data, filterBy);
      doc.show = show;
      if (show) {
        showable += 1;
      }
      return doc;
    });
    if (showable === 0 && filter !== DEFAULT_FILTER) {
      filterNotes(filteredNotes, DEFAULT_FILTER);
    } else {
      setNotes([...filteredNotes]);
      setFilter(filterBy);
    }
  }, []);

  const addNote = useCallback((note) => {
    if (notes.length >= MAX_NOTES) {
      alert(`We cannot create your note because we have limited the no. of notes per account to ${MAX_NOTES}.

We apologise for any inconvenience this may have caused.`);
    } else {
      const db = firebase.firestore();
      db.collection(userId).
        add(note).
        then((docRef) => {
          setNotes([createDoc(docRef.id, note, filter), ...notes]);
        }).
        catch((error) => {
          alert(error);
        });
    }
  }, []);

  const updateNote = useCallback((idx: number, docRef: string, note: Note) => {
    const db = firebase.firestore();
    db.collection(userId).
      doc(docRef).
      update(note).
      then(() => {
        const newNotes = notes;
        newNotes[idx] = createDoc(docRef, note, filter);
        filterNotes(newNotes, filter);
      }).
      catch((error) => {
        alert(error);
      });
  }, []);

  const deleteNote = useCallback((idx: number, docRef: string) => {
    const db = firebase.firestore();
    db.collection(userId).
      doc(docRef).
      delete().
      then(() => {
        const newNotes = notes;
        newNotes.splice(idx, 1);
        filterNotes(newNotes, filter);
      }).
      catch((error) => {
        alert(error);
      });
  }, []);

  useEffect(() => {
    const retrievedNotes: NoteDocument[] = [];
    const db = firebase.firestore();
    db.collection(userId).
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

  const audienceList: AudienceList = getAudience(notes);
  return (
    <>
      <h1>My Notes</h1>
      <Row>
        <Col>
          <Form.Label column>Filter by audience</Form.Label>
          <Form.Select
            value={filter}
            onChange={(event) => filterNotes(notes, event.target.value)}
          >
            <option value={DEFAULT_FILTER}>No audience filter</option>
            {[...audienceList].map((person, idx) => <option key={idx} value={person}>
              {person}
            </option>)}
          </Form.Select>{" "}
        </Col>
        <Col>
          <Button
            variant="primary"
            onClick={() => setModalShowState(true)}
            className="float-end"
          >
            New Note
          </Button>
        </Col>
      </Row>
      <NotesModal
        handleClose={() => setModalShowState(false)}
        show={modalShowState}
        actionName="Create Note"
        submitAction={addNote}
      />
      <hr />
      <NotesList
        initNotes={initNotes}
        filter={filter}
        notes={notes}
        deleteNote={deleteNote}
        updateNote={updateNote}
      />
    </>
  );
}
