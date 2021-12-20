import "firebase/firestore";
import {Button, Form} from "react-bootstrap";
import React, {useCallback, useState} from "react";
import {containsDuplicates, normaliseAudience} from "../utils/helper";
import Alerts from "./Alerts";
import AudienceInput from "./AudienceInput";
import DescriptionInput from "./DescriptionInput";
import PropTypes from "prop-types";
import TitleInput from "./TitleInput";
import firebase from "firebase/app";

function validateForm(form) {
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

function createNote(form) {
  return {
    audience: form.audience,
    description: form.description,
    lastModified: firebase.firestore.FieldValue.serverTimestamp(),
    title: form.title
  };
}

function initFormState(noteData) {
  return {
    title: noteData?.title || "",
    description: noteData?.description || "",
    audience: noteData?.audience || [],
    audienceInput: ""
  };
}

export default function NotesForm(props) {
  const [errors, setErrors] = useState([]);
  const initialState = initFormState(props.noteData);
  const [form, setForm] = useState(initialState);

  const exitForm = useCallback(() => {
    props.handleClose();
    setForm(initialState); // reset form state
  });

  const handleInputChange = useCallback((event) => {
    const {target} = event;
    setForm({...form, [target.name]: target.value});
  });

  const addAudience = useCallback(() => {
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
  });

  const removeAudience = useCallback((event) => {
    const person = event.target.id;
    const idx = parseInt(person.slice(5), 10);

    const newAudience = form.audience;
    newAudience.splice(idx, 1);
    setForm({
      ...form,
      audience: newAudience
    });
  });

  const submitForm = useCallback((event) => {
    event.preventDefault();
    const formErrors = validateForm(form);
    if (formErrors.length === 0) {
      const note = createNote(form);
      props.submitAction(note);
      exitForm();
    }
    setErrors(formErrors);
  });

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
        {props.actionName}
      </Button>
    </Form>
  );
}

NotesForm.propTypes = {
  actionName: PropTypes.string,
  submitAction: PropTypes.func,
  handleClose: PropTypes.func,
  noteData: PropTypes.object
};
