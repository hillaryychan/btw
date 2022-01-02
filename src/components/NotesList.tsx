import {Note, NoteDocument} from "src/types";
import React, {useEffect, useRef, useState} from "react";
import Accordion from "react-bootstrap/Accordion";
import NoteView from "./NoteView";

export type NotesListProps = {
  initNotes: boolean;
  filter: string;
  notes: NoteDocument[];
  deleteNote: (idx: number, docRef: string) => void;
  updateNote: (idx: number, docRef: string, note: Note) => void;
};

function toggleAccordion(idx: number) {
  const accordionItem = document.getElementById(`note-accordion-${idx}`);
  const toggleButton = accordionItem?.querySelector(".accordion-button") as HTMLButtonElement;
  toggleButton.click();
}

export default function NotesList(props: NotesListProps) {
  const [notes, setNotes] = useState<NoteDocument[]>(props.notes);
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      setNotes(props.notes);
    } else {
      didMountRef.current = true;
    }
  }, [props.notes]);

  function deleteNote(idx: number, docRef: string) {
    toggleAccordion(idx);
    props.deleteNote(idx, docRef);
  }

  function completeNote(idx: number, docRef: string, filterBy: string) {
    const note = notes[idx];
    const audienceIdx = note.data.audience.indexOf(filterBy);
    if (audienceIdx > -1) {
      toggleAccordion(idx);
      note.data.audience.splice(audienceIdx, 1);
      if (note.data.audience.length === 0) {
        props.deleteNote(idx, docRef);
      } else {
        props.updateNote(idx, docRef, note.data);
      }
    }
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
      <Accordion flush>
        {notes.map((note, idx) => {
          if (note.show) {
            return (
              <NoteView
                key={idx}
                idx={idx}
                filter={props.filter}
                note={note}
                completeNote={completeNote}
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
