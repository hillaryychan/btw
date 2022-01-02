import "firebase/firestore";
import {Button, Form} from "react-bootstrap";
import {ErrorMessages, Note, NoteFormData} from "src/types";
import React, {useState} from "react";
import {containsDuplicates, normaliseAudience} from "../utils/helper";
import Alerts from "./Alerts";
import AudienceInput from "./AudienceInput";
import DescriptionInput from "./DescriptionInput";
import TitleInput from "./TitleInput";
import firebase from "firebase/app";

export type NotesFormProps = {
  actionName: string;
  submitAction: (note: Note) => void;
  handleClose: () => void;
  noteData?: Note;
};

function validateForm(form: NoteFormData) {
  const {title, audience} = form;
  const errors = [];

  if (title === "") {
    errors.push("Note must have a title");
  }
  if (audience.length === 0) {
    errors.push("Note must have at least one audience");
  } else if (containsDuplicates(audience)) {
    errors.push("Audience contains duplicates");
  }
  return errors;
}

function createNote(form: NoteFormData) {
  return {
    audience: form.audience,
    description: form.description,
    lastModified: firebase.firestore.FieldValue.serverTimestamp(),
    title: form.title
  };
}

function initFormState(noteData?: Note) {
  return {
    title: noteData?.title || "",
    description: noteData?.description || "",
    audience: noteData ? [...noteData.audience] : [],
    audienceInput: ""
  };
}

export default function NotesForm({
  actionName,
  submitAction,
  handleClose,
  noteData
}: NotesFormProps) {
  const [errors, setErrors] = useState<ErrorMessages>([]);
  const initialState = initFormState(noteData);
  const [form, setForm] = useState<NoteFormData>(initialState);

  function exitForm () {
    handleClose();
    setForm(initialState); // reset form state
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const {target} = event;
    setForm({...form, [target.name]: target.value});
  }

  function addAudience() {
    const member = normaliseAudience(form.audienceInput);
    if (member !== "") {
      const newAudience = form.audience;
      newAudience.push(member);
      newAudience.sort();
      setForm({
        ...form,
        audience: newAudience,
        audienceInput: ""
      });
    }
  }

  function removeAudience(event: React.MouseEvent) {
    const person = event.target.id;
    const idx = parseInt(person.slice(5), 10);

    const newAudience = form.audience;
    newAudience.splice(idx, 1);
    setForm({
      ...form,
      audience: newAudience
    });
  }

  function submitForm(event: React.FormEvent) {
    event.preventDefault();
    const formErrors = validateForm(form);
    if (formErrors.length === 0) {
      const note = createNote(form);
      submitAction(note);
      exitForm();
    }
    setErrors(formErrors);
  }

  return (
    <Form>
      <Alerts errors={errors} />
      <TitleInput title={form.title} handleInputChange={handleInputChange} />
      <DescriptionInput
        description={form.description}
        handleInputChange={handleInputChange}
      />
      <AudienceInput
        audience={form.audience}
        audienceInput={form.audienceInput}
        handleInputChange={handleInputChange}
        addAudience={addAudience}
        removeAudience={removeAudience}
      />
      <Button variant="secondary" onClick={exitForm} data-testid="cancel-btn">
        Cancel
      </Button>{" "}
      <Button variant="primary" type="submit" onClick={submitForm}>
        {actionName}
      </Button>
    </Form>
  );
}
