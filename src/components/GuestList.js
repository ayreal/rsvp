import React from "react";

const GuestList = props => {
  return (
    <table className="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>{props.getTotalConfirmed()}</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>{props.getTotalUnconfirmed()}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>{props.getTotalInvited()}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GuestList;
