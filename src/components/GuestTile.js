import React, { Component } from "react";
import GuestName from "./GuestName";

class GuestTile extends Component {
  render() {
    console.log("%c >> Rendering GuestTile \n", "color: #bada55");

    return (
      <li className={this.props.data.isConfirmed ? "responded" : null}>
        <GuestName
          name={this.props.data.name}
          isEditing={this.props.data.isEditing}
          handleNameEdit={e => this.props.setName(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={this.props.data.isConfirmed}
            onChange={this.props.handleConfirmation}
          />{" "}
          Confirmed
        </label>
        <button onClick={this.props.handleEdit}>edit</button>
        <button>remove</button>
      </li>
    );
  }
}

export default GuestTile;
