import {Badge, OverlayTrigger, Tooltip} from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";

function renderTooltip(props) {
  return (
    <Tooltip id="button-tooltip" {...props}>
      Click to remove
    </Tooltip>
  );
}

function AudiencePills(props) {
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

AudiencePills.propTypes = {
  actionName: PropTypes.string,
  audience: PropTypes.array,
  doAction: PropTypes.func
};

export default AudiencePills;
