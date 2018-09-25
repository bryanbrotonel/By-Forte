import React, { Component } from "react";
import { PictureRow } from "./components/PictureRow";
import "./styles.css";

export default class Home extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.title = "By Forte";
  }

  render() {
    return (
      <div className="hv-center container">
        <PictureRow />
      </div>
    );
  }
}
