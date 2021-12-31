import "../styles.css";
import {Button, Col, Form, Row} from "react-bootstrap";
import {AudienceList} from "../types";
import AudiencePills from "./AudiencePills";
import {MAX_NAME_LEN} from "../constants";
import React from "react";
import {normaliseAudience} from "../utils/helper";

export type AudienceInputProps = {
  addAudience: () => void;
  audience: AudienceList;
  audienceInput: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  removeAudience: (event: React.MouseEvent) => void;
};

export default function AudienceInput({
  addAudience,
  audience,
  audienceInput,
  handleInputChange,
  removeAudience
}: AudienceInputProps) {
  const audienceValue = normaliseAudience(audienceInput);
  return (
    <Form.Group className="mb-3">
      <Form.Label>
        Audience<span className="ReqInput">*</span>
      </Form.Label>
      <Row className="g-2" xs={2}>
        <Col md>
          <Form.Control
            name="audienceInput"
            as="input"
            maxLength={MAX_NAME_LEN}
            placeholder="Add an audience"
            value={audienceInput}
            onChange={handleInputChange}
          />
        </Col>
        <Col md>
          <Button variant="outline-primary" onClick={addAudience}>
            Add
          </Button>
        </Col>
      </Row>

      {audienceValue !== "" &&
        <div className="m-1 Faded">
          Audience member will be added as <b>{audienceValue}</b>
        </div>
      }
      <AudiencePills audience={audience} doAction={removeAudience} />
    </Form.Group>
  );
}
