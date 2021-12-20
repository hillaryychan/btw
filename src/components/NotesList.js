import React, {useEffect, useRef, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import NoteView from "./NoteView";
import PropTypes from "prop-types";

function NotesList(props) {
  const [collapse, useCollapse] = useState(false); // Hack to make accordion collapse on delete
  const [notes, setNotes] = useState(props.notes);
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      setNotes(props.notes);
    } else {
      didMountRef.current = true;
    }
  }, [props.notes]);

  function deleteNote(idx, docRef) {
    useCollapse(!collapse);
    props.deleteNote(idx, docRef);
  }

  if (props.initNotes) {
    return null;
  } else if (notes.length === 0) {
    return (
      <div id="notes-list">
        <p>You have no notes</p>
      </div>
    );
  }
  const numShowable = notes.reduce(
    (count, note) => (note.show ? count + 1 : count),
    0
  );

  return (
    <div id="notes-list">
      <Accordion key={collapse} flush>
        {notes.map((note, idx) => {
          if (note.show) {
            return (
              <NoteView
                key={idx}
                idx={idx}
                note={note}
                deleteNote={deleteNote}
                updateNote={props.updateNote}
              />
            );
          }
          return null;
        })}
      </Accordion>
      <div className="mt-2 CenterText Faded">
        Viewing {numShowable} of {notes.length} notes
      </div>
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
