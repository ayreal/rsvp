import React from "react";

const GuestName = props => {
  if (props.isEditing) {
    return <input type="text" onChange={props.handleNameEdit} />;
  } else {
    return <span>{props.name}</span>;
  }
};

export default GuestName;
