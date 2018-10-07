import React, { Component } from "react";
import Loadable from "react-loadable";

import Loading from "./../../components/Loading";

const ComingSoon = Loadable({
  loader: () => import("../../components/ComingSoon"),
  loading: Loading
});

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
      <ComingSoon bgImage="https://source.unsplash.com/Qid2PBGeJmc/1600x1024" text="Coming Soon" />
    );
  }
}
