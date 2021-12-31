import "../styles.css";
import React from "react";

export type CharCounterProps = {
  count: number;
  maxCount: number;
};

export default function CharCounter({count, maxCount}: CharCounterProps) {
  return (
    <span className="Faded">
      ({count}/{maxCount})
    </span>
  );
}
