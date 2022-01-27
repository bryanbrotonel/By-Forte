import React, { Component } from "react";

import ComingSoon from "../../components/ComingSoon"

export default class Editorial extends Component {
  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    document.title = "By Forte | Editorial";
  }

  render() {
    return (
      <ComingSoon bgImage="https://source.unsplash.com/Qid2PBGeJmc/1600x1024&fm=webp&auto=compress&lossless=true" text="Coming Soon" />
    );
  }
}
