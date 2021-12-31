import {Badge, OverlayTrigger, Tooltip} from "react-bootstrap";
import React, {ReactNode} from "react";
import {AudienceList} from "src/types";
import {OverlayInjectedProps} from "react-bootstrap/esm/Overlay";

export type AudiencePillsProps = {
  actionName?: string;
  audience: AudienceList;
  doAction?: (event: React.MouseEvent) => void;
};

function renderTooltip(props: OverlayInjectedProps): ReactNode {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Click to remove
    </Tooltip>
  );
}

export default function AudiencePills(props: AudiencePillsProps) {
  const {audience} = props;
  if (audience && audience.length > 0) {
    if (props.doAction) {
      return (
        <div id="audience-list">
          {audience.map((person, idx) => <OverlayTrigger
            key={idx}
            placement="top"
            delay={{hide: 400, show: 250}}
            overlay={renderTooltip}
          >
            <Badge
              pill
              id={`pers-${idx}`}
              className="m-1"
              onClick={props.doAction}
            >
              {person}
            </Badge>
          </OverlayTrigger>)}
        </div>
      );
    }
    return (
      <div id="audience-list">
        {audience.map((person, idx) => <Badge
          pill
          key={idx}
          id={`pers-${idx}`}
          className="m-1"
          onClick={props.doAction}
        >
          {person}
        </Badge>)}
      </div>
    );
  }
  return null;
}
