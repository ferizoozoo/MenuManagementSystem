import React, { Component } from "react";

import Cooks from "./Cooks/Cooks";
import Meals from "./Meals/Meals";

class Menu extends Component {
  render() {
    return (
      <>
        <Cooks />
        <Meals />
      </>
    );
  }
}

export default Menu;
