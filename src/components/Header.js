import React from "react";
import GuestForm from "./GuestForm";

const Header = props => {
  return (
    <header>
      <h1>RSVP</h1>
      <GuestForm
        name={props.name}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
      />
    </header>
  );
};

export default Header;
