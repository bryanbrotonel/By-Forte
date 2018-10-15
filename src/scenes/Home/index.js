import React, { Component } from "react";
import Loadable from "react-loadable";

import Loading from "../../components/Loading";
import "./styles.css";

import MP4video from "../../videos/Storm Clouds.mp4";

const VideoBackground = Loadable({
  loader: () => import("../../components/VideoBackgorund"),
  loading: Loading
});

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
      // <ComingSoon
      //   bgImage="https://source.unsplash.com/K61C1XrwTWs/1600x1024"
      //   text="Coming Soon"
      // />
      <VideoBackground MP4video={MP4video} />
    );
  }
}
