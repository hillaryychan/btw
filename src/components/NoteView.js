import "../styles.css";
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
                {props.filter !== "" &&
                  <Button
                    size="sm"
                    variant="success"
                    className=""
                    onClick={() => props.completeNote(idx, note.ref, props.filter)}
                  >
                    Complete for {props.filter}
                  </Button>
                }
                <Button
                  size="sm"
                  variant="danger"
                  className="ms-1"
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
          actionName="Save Note"
          submitAction={(noteToUpdate) => props.updateNote(idx, note.ref, noteToUpdate)
          }
        />
      </Accordion.Item>
    </>
  );
}

NoteView.propTypes = {
  idx: PropTypes.number,
  filter: PropTypes.string,
  note: PropTypes.object,
  completeNote: PropTypes.func,
  deleteNote: PropTypes.func,
  updateNote: PropTypes.func
};

export default NoteView;
