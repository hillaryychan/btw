import React, {useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import NoteView from "./NoteView";
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
        {props.notes.map((note, idx) => <NoteView
          key={idx}
          idx={idx}
          note={note}
          deleteNote={deleteNote}
          updateNote={props.updateNote}
        />)}
      </Accordion>
    </div>
  );
}

NotesList.propTypes = {
  deleteNote: PropTypes.func,
  initNotes: PropTypes.bool,
  notes: PropTypes.array,
  updateNote: PropTypes.func
};

export default NotesList;
