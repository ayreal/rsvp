import React, { Component } from "react";

class GuestForm extends Component {
  render() {
    console.log("%c >> Rendering GuestForm \n", "color: #bada55");

    return (
      <form>
        <input type="text" value="Safia" placeholder="Invite Someone" />
        <button type="submit" name="submit" value="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default GuestForm;
