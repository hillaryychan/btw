import CharCounter from "./CharCounter";
import Form from "react-bootstrap/Form";
import {MAX_DESC_LEN} from "../constants";
import React from "react";

export type DescriptionInputProps = {
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  description: string;
};

export default function DescriptionInput({
  handleInputChange,
  description
}: DescriptionInputProps) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        Description{" "}
        <CharCounter count={description.length} maxCount={MAX_DESC_LEN} />
      </Form.Label>
      <Form.Control
        name="description"
        as="textarea"
        rows={5}
        maxLength={MAX_DESC_LEN}
        placeholder="Add description"
        value={description}
        onChange={handleInputChange}
      />
    </Form.Group>
  );
}
