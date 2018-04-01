import React, { Component } from "react";
import GuestsContainer from "./GuestsContainer";
import GuestList from "./GuestList";
import ToggleResponded from "./ToggleResponded";

class Main extends Component {
  state = {
    isFiltered: false
  };

  getTotalInvited = () => this.props.guests.length;

  getTotalConfirmed = () =>
    this.props.guests.filter(guest => guest.isConfirmed).length;

  getTotalUnconfirmed = () => this.getTotalInvited() - this.getTotalConfirmed();

  toggleConfirmationAt = index =>
    this.props.toggleGuestPropertyAt("isConfirmed", index);

  toggleEditingAt = index =>
    this.props.toggleGuestPropertyAt("isEditing", index);

  toggleFilter = () => {
    this.setState({
      isFiltered: !this.state.isFiltered
    });
  };

  render() {
    return (
      <div className="main">
        <div>
          <h2>Invitees</h2>
          <ToggleResponded
            isFiltered={this.state.isFiltered}
            handleToggle={this.toggleFilter}
          />
        </div>
        <GuestList
          guests={this.props.guests}
          getTotalInvited={this.getTotalInvited}
          getTotalConfirmed={this.getTotalConfirmed}
          getTotalUnconfirmed={this.getTotalUnconfirmed}
        />
        <GuestsContainer
          guests={this.props.guests}
          isFiltered={this.state.isFiltered}
          toggleConfirmationAt={this.toggleConfirmationAt}
          toggleEditingAt={this.toggleEditingAt}
          setNameAt={this.props.setNameAt}
          removeGuestAt={this.props.removeGuestAt}
          currentGuest={this.props.currentGuest}
        />
      </div>
    );
  }
}

export default Main;
