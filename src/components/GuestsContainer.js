import React from "react";
import GuestTile from "./GuestTile";
import GhostTile from "GhostTile";

const GuestsContainer = props => {
  return (
    <ul>
      {guests
        // either return true for every guest (not filtered) OR return true for guest.isConfirmed (filtered) otherwise
        .filter(guest => !props.isFiltered || guest.isConfirmed)
        .map((guest, index) => (
          <GuestTile
            data={guest}
            key={index}
            handleConfirmation={() => props.toggleConfirmationAt(index)}
            handleEdit={() => props.toggleEditingAt(index)}
            setName={text => props.setNameAt(text, index)}
            handleRemove={() => props.removeGuestAt(index)}
          />
        ))}
    </ul>
  );
};

export default GuestsContainer;
