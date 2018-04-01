import React, { Component } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

class App extends Component {
  state = {
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

  removeGuestAt = index => {
    this.setState({
      guests: [
        ...this.state.guests.slice(0, index),
        ...this.state.guests.slice(index + 1)
      ]
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

  render() {
    return (
      <div className="App">
        <Header
          name={this.state.currentGuest}
          handleChange={this.setCurrentGuest}
          handleSubmit={this.createNewGuest}
        />

        <Main
          guests={this.state.guests}
          currentGuest={this.state.currentGuest}
          setNameAt={this.setNameAt}
          removeGuestAt={this.removeGuestAt}
          toggleGuestPropertyAt={this.toggleGuestPropertyAt}
        />
      </div>
    );
  }
}

export default App;
