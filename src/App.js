import React, { Component } from "react";
import GuestForm from "./components/GuestForm";
import GuestsContainer from "./components/GuestsContainer";
import GuestList from "./components/GuestList";

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

  handleChange = e => {
    console.log(e);
  };

  render() {
    return (
      <div class="App">
        <header>
          <h1>RSVP</h1>
          <GuestForm
            props={this.state.currentGuest}
            onChange={this.handleChange}
          />
        </header>
        <div class="main">
          <div>
            <h2>Invitees</h2>
            <label>
              <input type="checkbox" /> Hide those who haven't responded
            </label>
          </div>
          <GuestList
            guests={this.state.guests}
            getTotalInvited={this.getTotalInvited}
            getTotalConfirmed={this.getTotalConfirmed}
            getTotalUnconfirmed={this.getTotalUnconfirmed}
          />
          <GuestsContainer guests={this.state.guests} />
        </div>
      </div>
    );
  }
}

export default App;
