import React from "react";

const ToggleResponded = props => {
  return (
    <label>
      <input
        type="checkbox"
        checked={props.isFiltered}
        onChange={props.handleToggle}
      />{" "}
      Hide those who haven't responded
    </label>
  );
};

export default ToggleResponded;
