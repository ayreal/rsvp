import React, { Component } from "react";

class GuestTile extends Component {
  render() {
    console.log("%c >> Rendering GuestTile \n", "color: #bada55");

    return (
      <li className={this.props.data.isConfirmed ? "responded" : null}>
        <span>{this.props.data.name}</span>
        <label>
          <input
            type="checkbox"
            checked={this.props.data.isConfirmed}
            onChange={this.props.handleConfirmation}
          />{" "}
          Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
      </li>
    );
  }
}

export default GuestTile;
