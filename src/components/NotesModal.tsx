import Modal from "react-bootstrap/Modal";
import {Note} from "../types";
import NotesForm from "./NotesForm";
import React from "react";

export type NotesModalProps = {
  actionName: string;
  submitAction: (note: Note) => void;
  handleClose: () => void;
  noteData?: Note;
  show: boolean;
};

export default function NotesModal({
  actionName,
  submitAction,
  handleClose,
  noteData,
  show
}: NotesModalProps) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>New Note</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NotesForm
          noteData={noteData}
          handleClose={handleClose}
          actionName={actionName}
          submitAction={submitAction}
        />
      </Modal.Body>
    </Modal>
  );
}
