import React from "react";

import { push as Menu } from "react-burger-menu";

import "./styles.css";

export class OffCanvas extends React.Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  render() {
    const { navLinks } = this.props;
    const { isOpen } = this.state;

    return (
      <Menu width={"75%"} isOpen={isOpen}>
        {navLinks}
      </Menu>
    );
  }
}
