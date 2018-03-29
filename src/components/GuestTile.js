import React, { Component } from "react";

class GuestTile extends Component {
  render() {
    console.log("%c >> Rendering GuestTile \n", "color: #bada55");

    return (
      <li class="responded">
        <span>Iver</span>
        <label>
          <input type="checkbox" checked /> Confirmed
        </label>
        <button>edit</button>
        <button>remove</button>
      </li>
    );
  }
}

export default GuestTile;
