import {Accordion, Button, Col, Row} from "react-bootstrap";
import React, {useState} from "react";
import AudiencePills from "../components/AudiencePills";
import PropTypes from "prop-types";

function NotesList(props) {
  const [collapse, useCollapse] = useState(false); // Hack to make accordion collapse on delete
  function deleteNote(idx, docRef) {
    useCollapse(!collapse);
    props.deleteNote(idx, docRef);
  }

  if (props.initNotes) {
    return null;
  } else if (props.notes.length === 0) {
    return (
      <div id="notes-list">
        <p>You have no notes</p>
      </div>
    );
  }

  return (
    <div id="notes-list">
      <Accordion key={collapse}>
        {props.notes.map((note, idx) => <Accordion.Item key={idx} eventKey={idx}>
          <Accordion.Header>
            <b>{note.data.title}</b>
          </Accordion.Header>
          <Accordion.Body style={{whiteSpace: "pre-line"}}>
            {note.data.description !== "" &&
                <>
                  <div id={`note-${idx}-description`}>
                    {note.data.description}
                  </div>
                </>
            }
            {note.data.audience.length > 0 &&
                <div id={`note-${idx}-audience`} className="mt-2">
                  <b>Audience:</b>{" "}
                  <AudiencePills audience={note.data.audience} />
                </div>
            }
            {(note.data.description !== "" ||
                note.data.audience.length > 0) && <hr />}
            <div id={`note-${idx}-actions`}>
              <Row className="g-2" xs={2}>
                <Col>
                  <Button
                    size="sm"
                    variant="success"
                    onClick={() => deleteNote(idx, note.ref)}
                  >
                      Complete
                  </Button>{" "}
                  <Button size="sm" variant="secondary">
                      Edit
                  </Button>
                </Col>
                <Col>
                  <Button
                    size="sm"
                    variant="danger"
                    className="float-end"
                    onClick={() => deleteNote(idx, note.ref)}
                  >
                      Delete
                  </Button>
                </Col>
              </Row>
            </div>
          </Accordion.Body>
        </Accordion.Item>)}
      </Accordion>
    </div>
  );
}

NotesList.propTypes = {
  deleteNote: PropTypes.func,
  initNotes: PropTypes.bool,
  notes: PropTypes.array
};

export default NotesList;
