import React from "react";
import GuestName from "./GuestName";

const GuestTile = props => {
  return (
    <li className={props.data.isConfirmed ? "responded" : null}>
      <GuestName
        name={props.data.name}
        isEditing={props.data.isEditing}
        handleNameEdit={e => props.setName(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={props.data.isConfirmed}
          onChange={props.handleConfirmation}
        />{" "}
        Confirmed
      </label>
      <button onClick={props.handleEdit}>edit</button>
      <button onClick={props.handleRemove}>remove</button>
    </li>
  );
};

export default GuestTile;
