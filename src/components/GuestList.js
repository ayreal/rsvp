import React, { Component } from "react";

const GuestList = props => {
  return (
    <table class="counter">
      <tbody>
        <tr>
          <td>Attending:</td>
          <td>2</td>
        </tr>
        <tr>
          <td>Unconfirmed:</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td>3</td>
        </tr>
      </tbody>
    </table>
  );
};

export default GuestList;
