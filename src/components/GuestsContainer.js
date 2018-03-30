import React, { Component } from "react";
import GuestTile from "./GuestTile";
// import GhostTile from "GhostTile";

class GuestsContainer extends Component {
  render() {
    console.log("%c >> Rendering GuestsContainer \n", "color: #bada55");
    const { guests } = this.props;
    // console.log("%c >> guests is: \n", "color: #bada55", guests);

    return (
      <ul>
        {guests
          // either return true for every guest (not filtered) OR return true for guest.isConfirmed (filtered) otherwise
          .filter(guest => !this.props.isFiltered || guest.isConfirmed)
          .map((guest, index) => (
            <GuestTile
              data={guest}
              key={index}
              handleConfirmation={() => this.props.toggleConfirmationAt(index)}
              handleEdit={() => this.props.toggleEditingAt(index)}
              setName={text => this.props.setNameAt(text, index)}
            />
          ))}
      </ul>
    );
  }
}

export default GuestsContainer;
