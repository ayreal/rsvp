import React, { Component } from "react";
import GuestForm from "./components/GuestForm";
import GuestsContainer from "./components/GuestsContainer";
import GuestList from "./components/GuestList";
import ToggleResponded from "./components/ToggleResponded";

class App extends Component {
  state = {
    guests: [
      {
        name: "Ariel",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Vitor",
        isConfirmed: false,
        isEditing: false
      },
      {
        name: "Kira",
        isConfirmed: true,
        isEditing: false
      },
      {
        name: "Francis",
        isConfirmed: false,
        isEditing: true
      }
    ],
    currentGuest: ""
  };

  // componentDidMount() {
  //   debugger;
  // }

  getTotalInvited = () => this.state.guests.length;

  getTotalConfirmed = () =>
    this.state.guests.filter(guest => guest.isConfirmed).length;

  getTotalUnconfirmed = () => this.getTotalInvited() - this.getTotalConfirmed();

  toggleGuestPropertyAt = (property, index) => {
    // debugger;
    this.setState({
      guests: this.state.guests.map((guest, ind) => {
        if (index === ind) {
          return {
            ...guest,
            [property]: !guest[property]
          };
        }
        return guest;
      })
    });
  };

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index => this.toggleGuestPropertyAt("isEditing", index);

  handleChange = e => {
    console.log(e);
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <GuestForm
            props={this.state.currentGuest}
            onChange={this.handleChange}
          />
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <ToggleResponded />
          </div>
          <GuestList
            guests={this.state.guests}
            getTotalInvited={this.getTotalInvited}
            getTotalConfirmed={this.getTotalConfirmed}
            getTotalUnconfirmed={this.getTotalUnconfirmed}
          />
          <GuestsContainer
            guests={this.state.guests}
            toggleConfirmationAt={this.toggleConfirmationAt}
            toggleEditingAt={this.toggleEditingAt}
          />
        </div>
      </div>
    );
  }
}

export default App;
