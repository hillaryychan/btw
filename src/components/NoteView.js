import {Accordion, Button, Col, Row} from "react-bootstrap";
import React, {useState} from "react";
import AudiencePills from "./AudiencePills";
import NotesModal from "./NotesModal";
import PropTypes from "prop-types";

function NoteView(props) {
  const [show, useShow] = useState(false);
  const {note} = props;
  const {idx} = props;

  function handleClose() {
    return useShow(false);
  }

  function handleShow() {
    return useShow(true);
  }

  return (
    <>
      <Accordion.Item eventKey={idx}>
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
            <Row className="g-2" xs={2}>
              <Col>
                <Button
                  size="sm"
                  variant="success"
                  onClick={() => props.deleteNote(idx, note.ref)}
                >
                  Complete
                </Button>{" "}
                <Button size="sm" variant="secondary" onClick={handleShow}>
                  Edit
                </Button>
              </Col>
              <Col>
                <Button
                  size="sm"
                  variant="danger"
                  className="float-end"
                  onClick={() => props.deleteNote(idx, note.ref)}
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
          action="Save Note"
          doNoteAction={(noteToUpdate) => props.updateNote(idx, note.ref, noteToUpdate)
          }
        />
      </Accordion.Item>
    </>
  );
}

NoteView.propTypes = {
  deleteNote: PropTypes.func,
  idx: PropTypes.number,
  note: PropTypes.object,
  updateNote: PropTypes.func
};

export default NoteView;
