import "../styles.css";
import CharCounter from "./CharCounter";
import Form from "react-bootstrap/Form";
import React from "react";

const MAX_TITLE_LEN = 100;

export type TitleInputProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
};

export default function TitleInput({handleInputChange, title}: TitleInputProps) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        Title<span className="ReqInput">*</span>{" "}
        <CharCounter count={title.length} maxCount={MAX_TITLE_LEN} />
      </Form.Label>
      <Form.Control
        name="title"
        type="text"
        maxLength={MAX_TITLE_LEN}
        placeholder="Note title"
        value={title}
        onChange={handleInputChange}
      />
    </Form.Group>
  );
}

