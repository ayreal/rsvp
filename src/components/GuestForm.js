import React from "react";

const GuestForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input
        type="text"
        value={props.name}
        placeholder="Invite Someone"
        onChange={e => props.handleChange(e.target.value)}
      />
      <button type="submit" name="submit" value="submit">
        Submit
      </button>
    </form>
  );
};

export default GuestForm;
