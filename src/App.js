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
        isConfirmed: true
      },
      {
        name: "Vitor",
        isConfirmed: false
      },
      {
        name: "Kira",
        isConfirmed: true
      },
      {
        name: "Francis",
        isConfirmed: false
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

  toggleConfirmationAt = index => {
    // debugger;
    this.setState({
      guests: this.state.guests.map((guest, ind) => {
        const conf = !guest.isConfirmed;
        if (index === ind) {
          return {
            ...guest,
            isConfirmed: conf
          };
        }
        return guest;
      })
    });
  };

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
          />
        </div>
      </div>
    );
  }
}

export default App;
