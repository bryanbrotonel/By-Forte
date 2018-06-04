import React, { Component } from "react";
import {ComingSoon} from "../../components/ComingSoon";

export class Editorial extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.title =  "By Forte | Editorial";
  }

  render() {
    return ( <ComingSoon/> )
  }
}
