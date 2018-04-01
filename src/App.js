import React, { Component } from "react";
import GuestForm from "./components/GuestForm";
import GuestsContainer from "./components/GuestsContainer";
import GuestList from "./components/GuestList";
import ToggleResponded from "./components/ToggleResponded";

class App extends Component {
  state = {
    isFiltered: false,
    currentGuest: "",
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
      }
    ]
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

  setNameAt = (name, index) => {
    this.setState({
      guests: this.state.guests.map((guest, ind) => {
        if (index === ind) {
          return {
            ...guest,
            name: name
          };
        }
        return guest;
      })
    });
  };

  toggleConfirmationAt = index =>
    this.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index => this.toggleGuestPropertyAt("isEditing", index);

  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered
    });
  };

  setCurrentGuest = name => {
    this.setState({
      currentGuest: name
    });
  };

  createNewGuest = e => {
    e.preventDefault();
    this.setState({
      guests: [
        { name: this.state.currentGuest, isConfirmed: false },
        ...this.state.guests
      ]
    });
    this.setState({
      currentGuest: ""
    });
  };

  removeGuestAt = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
    });
  };

  render() {
    return (
      <div className="App">
        <header>
          <h1>RSVP</h1>
          <GuestForm
            name={this.state.currentGuest}
            handleChange={this.setCurrentGuest}
            handleSubmit={this.createNewGuest}
          />
        </header>
        <div className="main">
          <div>
            <h2>Invitees</h2>
            <ToggleResponded
              isFiltered={this.state.isFiltered}
              handleToggle={this.toggleFilter}
            />
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
            setNameAt={this.setNameAt}
            isFiltered={this.state.isFiltered}
            removeGuestAt={this.removeGuestAt}
            currentGuest={this.state.currentGuest}
          />
        </div>
      </div>
    );
  }
}

export default App;
