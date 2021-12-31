import "../styles.css";
import {Accordion, Button, Col, Row} from "react-bootstrap";
import {Note, NoteDocument} from "src/types";
import React, {useState} from "react";
import AudiencePills from "./AudiencePills";
import NotesModal from "./NotesModal";

export type NoteViewProps = {
  idx: number;
  filter: string;
  note: NoteDocument;
  completeNote: (idx: number, docRef: string, filterBy: string) => void;
  deleteNote: (idx: number, docRef: string) => void;
  updateNote: (idx: number, docRef: string, note: Note) => void;
};

export default function NoteView({idx, filter, note, completeNote, deleteNote, updateNote}: NoteViewProps) {
  const [show, useShow] = useState(false);

  function handleClose() {
    return useShow(false);
  }

  function handleShow() {
    return useShow(true);
  }

  return (
    <>
      <Accordion.Item eventKey={`${idx}`}>
        <Accordion.Header>
          <b>{note.data.title}</b>
        </Accordion.Header>
        <Accordion.Body style={{whiteSpace: "pre-line"}}>
          {note.data.description !== "" &&
            <>
              <div id={`note-${idx}-description`}>{note.data.description}</div>
            </>
          }
          {note.data.audience.length > 0 &&
            <div id={`note-${idx}-audience`} className="mt-2">
              <b>Audience:</b> <AudiencePills audience={note.data.audience} />
            </div>
          }
          {(note.data.description !== "" || note.data.audience.length > 0) &&
            <hr />
          }
          <div id={`note-${idx}-actions`}>
            <Row className="g-2">
              <Col className="Box">
                <Button
                  size="sm"
                  variant="secondary"
                  className="me-1"
                  onClick={handleShow}
                >
                  Edit
                </Button>
                {filter !== "" &&
                  <Button
                    size="sm"
                    variant="success"
                    className=""
                    onClick={() => completeNote(idx, note.ref, filter)}
                  >
                    Complete for {filter}
                  </Button>
                }
                <Button
                  size="sm"
                  variant="danger"
                  className="ms-1"
                  onClick={() => deleteNote(idx, note.ref)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        </Accordion.Body>
        <NotesModal
          noteData={note.data}
          handleClose={handleClose}
          show={show}
          actionName="Save Note"
          submitAction={(noteToUpdate) => updateNote(idx, note.ref, noteToUpdate)
          }
        />
      </Accordion.Item>
    </>
  );
}
