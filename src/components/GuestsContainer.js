import React, { Component } from "react";
import GuestTile from "./GuestTile";
// import GhostTile from "GhostTile";

class GuestsContainer extends Component {
  render() {
    console.log("%c >> Rendering GuestsContainer \n", "color: #bada55");
    const { guests } = this.props;
    // console.log("%c >> guests is: \n", "color: #bada55", guests);

    return <ul>{guests.forEach(guest => <GuestTile />)}</ul>;
  }
}

export default GuestsContainer;
