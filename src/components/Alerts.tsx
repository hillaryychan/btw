import Alert from "react-bootstrap/Alert";
import {ErrorMessages} from "src/types";
import React from "react";

export type AlertsProps = {
  errors: ErrorMessages;
};

export default function Alerts({errors}: AlertsProps) {
  if (errors) {
    return (
      <>
        {errors.map((msg, idx) => <Alert key={idx} variant="danger" style={{textAlign: "center"}}>
          {msg}
        </Alert>)}
      </>
    );
  }

  return null;
}
